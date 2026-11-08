
/* Highlink shared navigation and footer. All pages use the same responsive shell. */
(function(){
  function init(){
    var path=location.pathname.split('/').pop()||'index.html';
    var categories=['business-registration.html','website-hosting.html','ai-seo.html','vpn-security.html'];
    var articles=['how-to-register-llc-usa.html','how-to-register-uk-ltd-non-resident.html','how-to-choose-web-hosting-small-business.html','how-to-choose-business-domain.html','best-seo-tools-small-business.html','how-ai-tools-help-small-business.html','why-online-businesses-need-vpn-privacy.html','online-security-tips-small-business.html','how-to-build-professional-online-presence.html'];
    var kind=path==='index.html'?'hl-home':categories.indexOf(path)>=0?'hl-category':path==='blog.html'?'hl-blog':articles.indexOf(path)>=0?'hl-article':['about.html','contact.html'].indexOf(path)>=0?'hl-info':['terms.html','privacy-policy.html'].indexOf(path)>=0?'hl-legal':'hl-detail';
    document.body.classList.add('hl-site',kind);
    var groups=[
      {label:'Services',id:'services',cols:[
        ['Business Registration','business-registration.html',[['USA Business','usa-business-registration.html'],['LLC Formation','llc-formation.html'],['Registered Agents','registered-agent-services.html'],['UK Business','uk-business-registration.html'],['UK LTD Formation','uk-ltd-formation.html']]],
        ['Website & Hosting','website-hosting.html',[['Website Builders','website-builders.html'],['Web Hosting','web-hosting.html'],['Domain Services','domain-services.html'],['Cloud Hosting','cloud-hosting.html']]],
        ['AI & SEO','ai-seo.html',[['AI Tools','ai-tools.html'],['Moz Pro & Local','seo-tools.html'],['Chatbots','chatbots-automation.html'],['AI Productivity','ai-productivity.html']]],
        ['VPN & Security','vpn-security.html',[['VPN Services','vpn-services.html'],['Protection Tools','protection-tools.html'],['Device Tools','device-tools.html'],['Online Safety','online-safety.html']]]
      ]},
      {label:'Guides',id:'guides',cols:[
        ['Business Guides','blog.html',[['Start a U.S. LLC','how-to-register-llc-usa.html'],['Register a UK LTD','how-to-register-uk-ltd-non-resident.html'],['Professional Online Presence','how-to-build-professional-online-presence.html']]],
        ['Digital Guides','blog.html',[['Choose Web Hosting','how-to-choose-web-hosting-small-business.html'],['SEO Tools Guide','best-seo-tools-small-business.html'],['Online Security Tips','online-security-tips-small-business.html']]]
      ]},
      {label:'Company',id:'company',cols:[
        ['Highlink','about.html',[['About Highlink','about.html'],['Contact Us','contact.html']]],
        ['Information','privacy-policy.html',[['Privacy Policy','privacy-policy.html'],['Terms & Conditions','terms.html']]]
      ]}
    ];
    function e(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
    function col(c){
      return '<div class="hl-menu-col"><a href="/'+c[1]+'">'+e(c[0])+' ↗</a>'+c[2].map(function(l){return '<a href="/'+l[1]+'">'+e(l[0])+'</a>'}).join('')+'</div>';
    }
    function group(g){
      return '<div class="hl-menu'+(g.id!=='services'?' hl-menu--small':'')+'"><button class="hl-trigger" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="hl-'+g.id+'">'+g.label+' <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button><div class="hl-menu-panel" id="hl-'+g.id+'"><div class="hl-menu-inner"><div class="hl-menu-caption">'+(g.id==='services'?'Explore the categories':g.id==='guides'?'Practical reading':'Highlink information')+'</div><div class="hl-menu-grid">'+g.cols.map(col).join('')+'</div></div></div></div>';
    }
    var themeButton='<button type="button" class="hl-theme-button" aria-label="Switch to dark theme" title="Switch color theme" aria-pressed="false"><svg class="hl-theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg><svg class="hl-theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/></svg></button>';
    var head='<header class="hl-header"><div class="hl-nav-shell"><a class="hl-brand" href="/"><img src="/highlink-logo.png" width="40" height="40" alt="Highlink logo"><span class="hl-brand-name">High<em>link</em></span></a><nav class="hl-nav" aria-label="Main navigation" id="hl-navigation"><a href="/"' +(path==='index.html'?' aria-current="page"':'')+'>Home</a>'+groups.map(group).join('')+'<a class="hl-cta" href="/#services">Explore tools <span aria-hidden="true">↗</span></a></nav>'+themeButton+'<button class="hl-hamburger" aria-label="Open menu" aria-controls="hl-navigation" aria-expanded="false" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button><div class="hl-shade" aria-hidden="true"></div></div>'+'</header>';
    var footLink=function(t,h){return '<a href="/'+h+'">'+e(t)+'</a>'};
    var column=function(t,a){return '<div class="hl-foot-col"><h4>'+t+'</h4>'+a.map(function(x){return footLink(x[0],x[1])}).join('')+'</div>'};
    var foot='<footer class="hl-footer"><div class="hl-container"><div class="hl-foot-grid"><div><div class="hl-foot-logo"><img src="/highlink-logo.png" width="39" height="39" alt="">Highlink</div><p class="hl-foot-intro">Helpful resources for company setup, websites, AI, SEO, and online security — all in one place.</p><a class="hl-foot-mail" href="mailto:contact@highlinkllc.com">contact@highlinkllc.com</a></div>'+
      column('Business',[['Business Registration','business-registration.html'],['USA Business','usa-business-registration.html'],['UK Business','uk-business-registration.html'],['LLC Formation','llc-formation.html']])+
      column('Website',[['Website & Hosting','website-hosting.html'],['Website Builders','website-builders.html'],['Domain Services','domain-services.html'],['Cloud Hosting','cloud-hosting.html']])+
      column('Tools',[['Resource Finder','resource-finder.html'],['AI & SEO','ai-seo.html'],['Moz Pro & Local','seo-tools.html'],['VPN & Security','vpn-security.html'],['Business Guides','blog.html']])+
      column('Company',[['About','about.html'],['Contact','contact.html'],['Affiliate Disclosure','affiliate-disclosure.html'],['Privacy','privacy-policy.html'],['Terms','terms.html']])+
      '</div><div class="hl-foot-bottom"><span>© 2026 Highlink. All rights reserved.</span><span>Independent business resource and comparison website.</span></div></div></footer>';
    var prior=document.querySelector('header');
    if(prior)prior.outerHTML=head;
    var priorFooter=document.querySelector('footer');
    if(priorFooter)priorFooter.outerHTML=foot;
    // Keep an affiliate disclosure beside sponsored provider comparisons, not only in the footer.
    var paidProviderLink=document.querySelector('.provider-card a[rel~="sponsored"]');
    if(paidProviderLink){
      var providerGrid=paidProviderLink.closest('.grid-2,.grid-3,.llc-provider-grid');
      if(providerGrid && !providerGrid.parentNode.querySelector('.hl-affiliate-near-grid')){
        var notice=document.createElement('p');
        notice.className='hl-affiliate-near-grid';
        notice.innerHTML='Some provider links below are paid affiliate links. Highlink may earn a commission from qualifying purchases. <a href="/affiliate-disclosure.html">How affiliate links work</a>.';
        providerGrid.parentNode.insertBefore(notice,providerGrid);
      }
    }
    var h=document.querySelector('header.hl-header');
    if(!h)return;
    var themeToggle=h.querySelector('.hl-theme-button');
    var root=document.documentElement;
    function applyTheme(mode){
      var dark=mode==='dark';
      root.setAttribute('data-hl-theme',dark?'dark':'light');
      themeToggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
      themeToggle.setAttribute('title',dark?'Switch to light theme':'Switch to dark theme');
      themeToggle.setAttribute('aria-pressed',dark?'true':'false');
    }
    var initialTheme=root.getAttribute('data-hl-theme')==='dark'?'dark':'light';
    applyTheme(initialTheme);
    themeToggle.addEventListener('click',function(){
      var mode=root.getAttribute('data-hl-theme')==='dark'?'light':'dark';
      applyTheme(mode);
      try{localStorage.setItem('hl-theme',mode)}catch(ignore){}
    });
    var nav=h.querySelector('.hl-nav'),toggle=h.querySelector('.hl-hamburger'),shade=h.querySelector('.hl-shade'),menus=[].slice.call(h.querySelectorAll('.hl-menu'));
    function setMenu(m,open){m.classList.toggle('is-open',open);m.querySelector('button').setAttribute('aria-expanded',open?'true':'false')}
    function closeMenus(except){menus.forEach(function(m){if(m!==except)setMenu(m,false)})}
    function closeNav(){
      nav.classList.remove('hl-nav-open');shade.classList.remove('is-visible');
      document.body.classList.remove('hl-lock');toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Open menu');closeMenus();
    }
    menus.forEach(function(m){
      var b=m.querySelector('.hl-trigger');
      b.addEventListener('click',function(ev){ev.preventDefault();ev.stopPropagation();var open=!m.classList.contains('is-open');closeMenus(m);setMenu(m,open)});
      m.addEventListener('mouseenter',function(){if(matchMedia('(min-width:821px) and (hover:hover)').matches){closeMenus(m);setMenu(m,true)}});
      m.addEventListener('mouseleave',function(){if(innerWidth>820)setMenu(m,false)});
    });
    toggle.addEventListener('click',function(){
      if(nav.classList.contains('hl-nav-open')){closeNav();return}
      nav.classList.add('hl-nav-open');shade.classList.add('is-visible');document.body.classList.add('hl-lock');
      toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close menu');
    });
    shade.addEventListener('click',closeNav);
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeNav)});
    document.addEventListener('click',function(ev){if(!h.contains(ev.target))closeMenus()});
    document.addEventListener('keydown',function(ev){if(ev.key==='Escape'){closeNav();toggle.focus()}});
    window.addEventListener('resize',function(){if(innerWidth>820)closeNav()});

    /* One visit, one optional LLC offer. All dismissal paths are respected. */
    function initOfferPopup(){
      if(path==='message-sent.html'||document.getElementById('hl-offer-overlay'))return;
      try{if(sessionStorage.getItem('hl-llc-offer-dismissed')==='1')return}catch(ignore){}
      var overlay=document.createElement('div');
      overlay.className='hl-offer-overlay';
      overlay.id='hl-offer-overlay';
      overlay.innerHTML=
        '<div class="hl-offer-dialog" role="dialog" aria-modal="true" aria-labelledby="hl-offer-title" aria-describedby="hl-offer-desc">'+
          '<button class="hl-offer-close" type="button" aria-label="Close offer" title="Close offer">'+
            '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>'+
          '</button>'+
          '<div class="hl-offer-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-7h6v7M9 10h.01M15 10h.01"/></svg></div>'+
          '<div class="hl-offer-tag"><span class="hl-offer-dot" aria-hidden="true"></span> SPONSORED · LLC FORMATION OFFER</div>'+
          '<h2 id="hl-offer-title">Form your LLC with <span>$0 service fees.</span></h2>'+
          '<p id="hl-offer-desc" class="hl-offer-description">Start your business with a basic LLC formation service at no service charge.</p>'+
          '<div class="hl-offer-fees"><span aria-hidden="true">✓</span><p><strong>Know the cost:</strong> Required state filing fees still apply. Optional additional services may cost extra.</p></div>'+
          '<a class="hl-offer-cta" href="https://goto.incauthority.com/OeX9Mn" target="_blank" rel="nofollow sponsored noopener noreferrer">Explore LLC Formation <span aria-hidden="true">→</span></a>'+
          '<button class="hl-offer-skip" type="button">Not now</button>'+
        '</div>';
      var lastFocused=document.activeElement;
      var close=overlay.querySelector('.hl-offer-close');
      var skip=overlay.querySelector('.hl-offer-skip');
      var cta=overlay.querySelector('.hl-offer-cta');
      function rememberDismissal(){try{sessionStorage.setItem('hl-llc-offer-dismissed','1')}catch(ignore){}}
      function dismiss(){
        rememberDismissal();
        document.body.classList.remove('hl-offer-open');
        document.removeEventListener('keydown',onKey);
        overlay.remove();
        if(lastFocused&&lastFocused.isConnected&&typeof lastFocused.focus==='function')lastFocused.focus();
      }
      function onKey(ev){
        if(ev.key==='Escape'){ev.preventDefault();dismiss();return}
        if(ev.key!=='Tab')return;
        var focusables=[close,cta,skip],first=focusables[0],last=focusables[focusables.length-1];
        if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus()}
        else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus()}
      }
      close.addEventListener('click',dismiss);
      skip.addEventListener('click',dismiss);
      overlay.addEventListener('click',function(ev){if(ev.target===overlay)dismiss()});
      cta.addEventListener('click',rememberDismissal);
      document.body.appendChild(overlay);
      document.body.classList.add('hl-offer-open');
      document.addEventListener('keydown',onKey);
      close.focus({preventScroll:true});
    }
    // Give the page a brief moment to render before displaying the offer.
    window.setTimeout(initOfferPopup,650);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
