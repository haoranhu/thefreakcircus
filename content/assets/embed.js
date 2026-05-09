// Controlled embed script: inject iframe only after explicit consent
(function(){
  const CONSENT_KEY = 'freakcircus_embed_consent_v1';
  const iframeSrc = 'https://html-classic.itch.zone/html/16572088/index.html?v=1771780207';

  function createIframe(){
    const iframe = document.createElement('iframe');
    iframe.id = 'game_drop';
    iframe.className = 'embedded-player';
    iframe.src = iframeSrc;
    iframe.title = 'The Freak Circus (embedded official build)';
    iframe.sandbox = 'allow-scripts allow-forms allow-same-origin allow-popups';
    iframe.allow = 'autoplay; fullscreen';
    iframe.setAttribute('loading','lazy');
    return iframe;
  }

  function insertIframeIfConsent(container){
    if(document.getElementById('game_drop')) return;
    const iframe = createIframe();
    container.insertAdjacentElement('afterend', iframe);
  }

  document.addEventListener('DOMContentLoaded', function(){
    const checkbox = document.getElementById('embedConsentCheckbox');
    const openBtn = document.getElementById('openInNewTab');
    const container = document.querySelector('.embed-consent');

    if(!container) return;

    // Open in new tab button
    if(openBtn){
      openBtn.addEventListener('click', function(){
        window.open(iframeSrc, '_blank', 'noopener');
      });
    }

    // restore consent
    try{
      const stored = localStorage.getItem(CONSENT_KEY);
      if(stored === '1'){
        if(checkbox){ checkbox.checked = true; }
        insertIframeIfConsent(container);
      }
    }catch(e){ /* ignore */ }

    if(!checkbox) return;
    checkbox.addEventListener('change', function(e){
      if(e.target.checked){
        try{ localStorage.setItem(CONSENT_KEY,'1'); }catch(err){}
        insertIframeIfConsent(container);
      } else {
        try{ localStorage.removeItem(CONSENT_KEY); }catch(err){}
        const existing = document.getElementById('game_drop');
        if(existing) existing.remove();
      }
    });
  });
})();
