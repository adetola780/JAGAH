(function () {
  const CONSENT_KEY = "jagah_cookie_preferences_v1";
  const supportNumber = "2349052900067";

  function readConsent() {
    try {
      return JSON.parse(localStorage.getItem(CONSENT_KEY));
    } catch {
      return null;
    }
  }

  function saveConsent(preferences) {
    const value = {
      essential: true,
      analytics: Boolean(preferences.analytics),
      marketing: Boolean(preferences.marketing),
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
    document.documentElement.dataset.analyticsConsent = value.analytics ? "granted" : "denied";
    document.documentElement.dataset.marketingConsent = value.marketing ? "granted" : "denied";
    window.dispatchEvent(new CustomEvent("jagah:consent", { detail: value }));
    return value;
  }

  function injectInterface() {
    document.body.insertAdjacentHTML("beforeend", `
      <a class="floating-whatsapp" href="https://wa.me/${supportNumber}?text=${encodeURIComponent("Hello JAGAH, I need some help.")}" target="_blank" rel="noopener noreferrer" aria-label="Chat with JAGAH on WhatsApp">
        <span aria-hidden="true">WA</span>
        <strong>Need help?</strong>
      </a>

      <section class="cookie-banner" data-cookie-banner aria-label="Cookie preferences" hidden>
        <div>
          <strong>Your privacy, your choice.</strong>
          <p>We use essential storage to run the shop. Analytics and marketing technologies stay off unless you allow them.</p>
          <a href="privacy.html">Read our privacy policy</a>
        </div>
        <div class="cookie-actions">
          <button type="button" class="button soft" data-cookie-reject>Reject optional</button>
          <button type="button" class="button soft" data-cookie-manage>Manage</button>
          <button type="button" class="button primary" data-cookie-accept>Accept all</button>
        </div>
      </section>

      <dialog class="cookie-dialog" data-cookie-dialog aria-labelledby="cookie-title">
        <form method="dialog">
          <div class="cookie-dialog-head">
            <div><p class="policy-eyebrow">Privacy controls</p><h2 id="cookie-title">Cookie preferences</h2></div>
            <button class="close-button" value="cancel" aria-label="Close cookie preferences">X</button>
          </div>
          <p>Essential storage supports your bag, saved products and preferences. Optional categories are disabled until you choose them.</p>
          <label class="cookie-choice"><span><strong>Essential</strong><small>Required for core site functions</small></span><input type="checkbox" checked disabled></label>
          <label class="cookie-choice"><span><strong>Analytics</strong><small>Helps us understand site performance</small></span><input type="checkbox" name="analytics"></label>
          <label class="cookie-choice"><span><strong>Marketing</strong><small>Supports relevant campaigns and measurement</small></span><input type="checkbox" name="marketing"></label>
          <div class="cookie-dialog-actions">
            <button class="button soft" type="button" data-cookie-dialog-reject>Reject optional</button>
            <button class="button primary" value="save" type="submit">Save preferences</button>
          </div>
        </form>
      </dialog>

      <dialog class="store-status-dialog" data-store-status-dialog aria-labelledby="store-status-title">
        <button class="close-button dialog-close" type="button" data-close-store-status aria-label="Close message">X</button>
        <div class="store-status-icon" data-store-status-icon aria-hidden="true">✓</div>
        <p class="policy-eyebrow" data-store-status-eyebrow>JAGAH</p>
        <h2 id="store-status-title" data-store-status-title>All set</h2>
        <p data-store-status-message></p>
        <div class="store-status-actions" data-store-status-actions></div>
      </dialog>
    `);

    const footerLinks = document.querySelector(".footer-bottom > div, .policy-footer nav");
    if (footerLinks && !footerLinks.querySelector("[data-open-cookie-settings]")) {
      footerLinks.insertAdjacentHTML("beforeend", '<a href="#cookie-settings" data-open-cookie-settings>Cookie settings</a>');
    }
  }

  function applySavedConsent() {
    const consent = readConsent();
    if (consent) {
      saveConsent(consent);
    } else {
      document.querySelector("[data-cookie-banner]").hidden = false;
    }
  }

  function openPreferences() {
    const dialog = document.querySelector("[data-cookie-dialog]");
    const form = dialog.querySelector("form");
    const consent = readConsent() || {};
    form.elements.analytics.checked = Boolean(consent.analytics);
    form.elements.marketing.checked = Boolean(consent.marketing);
    dialog.showModal();
  }

  function hideBanner() {
    const banner = document.querySelector("[data-cookie-banner]");
    if (banner) banner.hidden = true;
  }

  function showStatus(options) {
    const dialog = document.querySelector("[data-store-status-dialog]");
    if (!dialog) return;
    dialog.dataset.tone = options.tone || "success";
    dialog.querySelector("[data-store-status-icon]").textContent = options.tone === "error" ? "!" : "✓";
    dialog.querySelector("[data-store-status-eyebrow]").textContent = options.eyebrow || "JAGAH";
    dialog.querySelector("[data-store-status-title]").textContent = options.title || "All set";
    dialog.querySelector("[data-store-status-message]").textContent = options.message || "";
    const actions = dialog.querySelector("[data-store-status-actions]");
    actions.innerHTML = "";
    (options.actions || []).forEach((action) => {
      const link = document.createElement("a");
      link.className = `button ${action.primary ? "primary" : "soft"}`;
      link.href = action.href;
      link.textContent = action.label;
      actions.appendChild(link);
    });
    dialog.showModal();
  }

  function bindInterface() {
    document.querySelector("[data-cookie-accept]").addEventListener("click", () => {
      saveConsent({ analytics: true, marketing: true });
      hideBanner();
    });
    document.querySelector("[data-cookie-reject]").addEventListener("click", () => {
      saveConsent({ analytics: false, marketing: false });
      hideBanner();
    });
    document.querySelector("[data-cookie-manage]").addEventListener("click", openPreferences);
    document.querySelector("[data-cookie-dialog-reject]").addEventListener("click", () => {
      saveConsent({ analytics: false, marketing: false });
      document.querySelector("[data-cookie-dialog]").close();
      hideBanner();
    });
    document.querySelector("[data-cookie-dialog]").addEventListener("close", (event) => {
      if (event.target.returnValue !== "save") return;
      const form = event.target.querySelector("form");
      saveConsent({
        analytics: form.elements.analytics.checked,
        marketing: form.elements.marketing.checked,
      });
      hideBanner();
    });
    document.querySelector("[data-close-store-status]").addEventListener("click", () => {
      document.querySelector("[data-store-status-dialog]").close();
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-open-cookie-settings]")) openPreferences();
    });
  }

  function showCallbackState() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("payment") !== "failed") return;
    showStatus({
      tone: "error",
      eyebrow: "Payment not completed",
      title: "Your payment did not go through.",
      message: "Nothing has been charged by JAGAH. Try again or contact us if your bank shows a debit.",
      actions: [
        { label: "Return to your bag", href: "index.html#shop", primary: true },
        { label: "Contact support", href: `https://wa.me/${supportNumber}?text=${encodeURIComponent("Hello JAGAH, I need help with a failed payment.")}` },
      ],
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectInterface();
    bindInterface();
    applySavedConsent();
    showCallbackState();
    window.JagahUI = { showStatus, openCookiePreferences: openPreferences, readConsent };
  });
})();
