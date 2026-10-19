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

    var submenuData = {
      'business-registration.html': {
        label: 'Business Registration',
        items: [
          ['Business Registration Home', '/business-registration.html'],
          ['USA Business Registration', '/usa-business-registration.html'],
          ['LLC Formation', '/llc-formation.html'],
          ['Registered Agent Services', '/registered-agent-services.html'],
          ['UK Business Registration', '/uk-business-registration.html'],
          ['UK LTD Formation', '/uk-ltd-formation.html']
        ]
      },
      'website-hosting.html': {
        label: 'Website & Hosting',
        items: [
          ['Website & Hosting Home', '/website-hosting.html'],
          ['Website Builders', '/website-builders.html'],
          ['Web Hosting', '/web-hosting.html'],
          ['Domain Services', '/domain-services.html'],
          ['Cloud Hosting', '/cloud-hosting.html']
        ]
      },
      'ai-seo.html': {
        label: 'AI & SEO',
        items: [
          ['AI & SEO Home', '/ai-seo.html'],
          ['AI Tools', '/ai-tools.html'],
          ['SEO Tools', '/seo-tools.html'],
          ['Chatbots & Automation', '/chatbots-automation.html'],
          ['AI Productivity', '/ai-productivity.html']
        ]
      },
      'vpn-security.html': {
        label: 'VPN & Security',
        items: [
          ['VPN & Security Home', '/vpn-security.html'],
          ['VPN Services', '/vpn-services.html'],
          ['Protection Tools', '/protection-tools.html'],
          ['Device Tools', '/device-tools.html'],
          ['Online Safety', '/online-safety.html']
        ]
      },
      'blog.html': {
        label: 'Blog',
        items: [
          ['All Guides', '/blog.html'],
          ['Register an LLC in the USA', '/how-to-register-llc-usa.html'],
          ['Register a UK LTD', '/how-to-register-uk-ltd-non-resident.html'],
          ['Choose Web Hosting', '/how-to-choose-web-hosting-small-business.html'],
          ['Best SEO Tools', '/best-seo-tools-small-business.html'],
          ['Online Security Tips', '/online-security-tips-small-business.html']
        ]
      },
      'about.html': {
        label: 'About',
        items: [
          ['About Highlink', '/about.html'],
          ['Contact', '/contact.html'],
          ['Privacy Policy', '/privacy-policy.html'],
          ['Terms', '/terms.html']
        ]
      },
      'contact.html': {
        label: 'Contact',
        items: [
          ['Contact Highlink', '/contact.html'],
          ['About Highlink', '/about.html'],
          ['Privacy Policy', '/privacy-policy.html'],
          ['Terms', '/terms.html']
        ]
      }
    };

    function fileKey(href) {
      if (!href) return '';
      var clean = href.split('#')[0].split('?')[0];
      return clean.substring(clean.lastIndexOf('/') + 1);
    }

    function buildSmallDropdown(anchor, data) {
      var wrap = document.createElement('div');
      wrap.className = 'nav-submenu';
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'nav-sub-trigger';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-haspopup', 'true');
      button.innerHTML = '<span>' + data.label + '</span><span class="nav-sub-arrow" aria-hidden="true">⌄</span>';
      var panel = document.createElement('div');
      panel.className = 'nav-sub-panel';
      data.items.forEach(function (item, index) {
        var link = document.createElement('a');
        link.href = item[1];
        link.textContent = item[0];
        if (index === 0) link.className = 'nav-sub-main';
        panel.appendChild(link);
      });
      wrap.appendChild(button);
      wrap.appendChild(panel);
      nav.replaceChild(wrap, anchor);

      button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeOtherDropdowns(wrap);
        var open = wrap.classList.toggle('submenu-open');
        button.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      return wrap;
    }

    function closeOtherDropdowns(except) {
      nav.querySelectorAll('.nav-submenu.submenu-open').forEach(function (item) {
        if (item !== except) {
          item.classList.remove('submenu-open');
          var trigger = item.querySelector('.nav-sub-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    Array.prototype.slice.call(nav.children).forEach(function (child) {
      if (child.tagName !== 'A' || child.classList.contains('nav-btn')) return;
      var key = fileKey(child.getAttribute('href'));
      if (submenuData[key]) buildSmallDropdown(child, submenuData[key]);
    });

    var servicesTrigger = serviceMenu.querySelector('.services-trigger');
    function closeServices() {
      serviceMenu.classList.remove('services-open');
      servicesTrigger.setAttribute('aria-expanded', 'false');
    }

    servicesTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeOtherDropdowns();
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
      closeOtherDropdowns();
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('mobile-menu-open');
      btn.classList.toggle('is-open', open);
      document.body.classList.toggle('mobile-menu-active', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      if (!open) {
        closeServices();
        closeOtherDropdowns();
      }
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (e) {
      if (!serviceMenu.contains(e.target)) closeServices();
      if (!e.target.closest || !e.target.closest('.nav-submenu')) closeOtherDropdowns();
      if (nav.classList.contains('mobile-menu-open') && !nav.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeServices();
        closeOtherDropdowns();
        closeMenu();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeMenu();
      else {
        closeServices();
        closeOtherDropdowns();
      }
    });
  });
});
