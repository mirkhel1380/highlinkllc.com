document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('header').forEach(function (header) {
    var nav = header.querySelector('.nav-links, .links, nav');
    if (!nav || nav.classList.contains('mobile-nav-target')) return;

    var serviceMenu = document.createElement('div');
    serviceMenu.className = 'services-dropdown';
    serviceMenu.innerHTML =
      '<button type="button" class="services-trigger" aria-expanded="false" aria-haspopup="true">' +
        '<span>Services</span><span class="services-arrow" aria-hidden="true">⌄</span>' +
      '</button>' +
      '<div class="services-mega">' +
        '<div class="services-mega-inner">' +
          '<div class="services-group">' +
            '<a class="services-group-title" href="/business-registration.html">Business Registration</a>' +
            '<a class="services-sub-link" href="/usa-business-registration.html">USA Business Registration</a>' +
            '<a class="services-sub-link" href="/llc-formation.html">LLC Formation</a>' +
            '<a class="services-sub-link" href="/registered-agent-services.html">Registered Agent Services</a>' +
            '<a class="services-sub-link" href="/uk-business-registration.html">UK Business Registration</a>' +
            '<a class="services-sub-link" href="/uk-ltd-formation.html">UK LTD Formation</a>' +
          '</div>' +
          '<div class="services-group">' +
            '<a class="services-group-title" href="/website-hosting.html">Website &amp; Hosting</a>' +
            '<a class="services-sub-link" href="/website-builders.html">Website Builders</a>' +
            '<a class="services-sub-link" href="/web-hosting.html">Web Hosting</a>' +
            '<a class="services-sub-link" href="/domain-services.html">Domain Services</a>' +
            '<a class="services-sub-link" href="/cloud-hosting.html">Cloud Hosting</a>' +
          '</div>' +
          '<div class="services-group">' +
            '<a class="services-group-title" href="/ai-seo.html">AI &amp; SEO</a>' +
            '<a class="services-sub-link" href="/ai-tools.html">AI Tools</a>' +
            '<a class="services-sub-link" href="/seo-tools.html">SEO Tools</a>' +
            '<a class="services-sub-link" href="/chatbots-automation.html">Chatbots &amp; Automation</a>' +
            '<a class="services-sub-link" href="/ai-productivity.html">AI Productivity</a>' +
          '</div>' +
          '<div class="services-group">' +
            '<a class="services-group-title" href="/vpn-security.html">VPN &amp; Security</a>' +
            '<a class="services-sub-link" href="/vpn-services.html">VPN Services</a>' +
            '<a class="services-sub-link" href="/protection-tools.html">Protection Tools</a>' +
            '<a class="services-sub-link" href="/device-tools.html">Device Tools</a>' +
            '<a class="services-sub-link" href="/online-safety.html">Online Safety</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    var existingServices = null;
    Array.prototype.slice.call(nav.children).some(function (child) {
      if (child.tagName === 'A' && child.textContent.trim().toLowerCase() === 'services') {
        existingServices = child;
        return true;
      }
      return false;
    });

    if (existingServices) {
      nav.replaceChild(serviceMenu, existingServices);
    } else {
      var homeLink = null;
      Array.prototype.slice.call(nav.children).some(function (child) {
        if (child.tagName === 'A' && child.textContent.trim().toLowerCase() === 'home') {
          homeLink = child;
          return true;
        }
        return false;
      });
      if (homeLink && homeLink.nextSibling) nav.insertBefore(serviceMenu, homeLink.nextSibling);
      else if (homeLink) nav.appendChild(serviceMenu);
      else nav.insertBefore(serviceMenu, nav.firstChild);
    }

    var servicesTrigger = serviceMenu.querySelector('.services-trigger');
    function closeServices() {
      serviceMenu.classList.remove('services-open');
      servicesTrigger.setAttribute('aria-expanded', 'false');
    }

    servicesTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = serviceMenu.classList.toggle('services-open');
      servicesTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    serviceMenu.addEventListener('mouseenter', function () {
      if (window.innerWidth > 820) servicesTrigger.setAttribute('aria-expanded', 'true');
    });
    serviceMenu.addEventListener('mouseleave', function () {
      if (window.innerWidth > 820) servicesTrigger.setAttribute('aria-expanded', 'false');
    });

    var host = nav.parentElement;
    if (!host) return;
    host.style.position = host.style.position || 'relative';
    nav.classList.add('mobile-nav-target');

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mobile-menu-toggle';
    btn.setAttribute('aria-label', 'Open navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    host.appendChild(btn);

    function closeMenu() {
      nav.classList.remove('mobile-menu-open');
      btn.classList.remove('is-open');
      document.body.classList.remove('mobile-menu-active');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open navigation menu');
      closeServices();
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('mobile-menu-open');
      btn.classList.toggle('is-open', open);
      document.body.classList.toggle('mobile-menu-active', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      if (!open) closeServices();
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (e) {
      if (!serviceMenu.contains(e.target)) closeServices();
      if (nav.classList.contains('mobile-menu-open') && !nav.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeServices();
        closeMenu();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeMenu();
      else closeServices();
    });
  });
});
