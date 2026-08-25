/* V93 — Event detail tabs + Instagram share */
(function () {
  function initEventPage() {
    document.querySelectorAll('.ev-tabs').forEach(function (nav) {
      var links = Array.from(nav.querySelectorAll('a[href^="#"]'));
      if (!links.length) return;

      var panels = links.map(function (link) {
        return document.getElementById(link.getAttribute('href').slice(1));
      }).filter(Boolean);

      // The Overview section exists as a section but other sections may not have
      // dedicated panels in older content. Create tab behavior only for existing
      // panels, without destroying the page content.
      var usable = links.filter(function (link) {
        return document.getElementById(link.getAttribute('href').slice(1));
      });
      if (!usable.length) return;

      usable.forEach(function (link, i) {
        var panel = document.getElementById(link.getAttribute('href').slice(1));
        link.setAttribute('role', 'tab');
        link.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        link.setAttribute('tabindex', i === 0 ? '0' : '-1');
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', 'tab-' + i);
        link.id = 'tab-' + i;
        if (i !== 0) panel.hidden = true;
      });

      function activate(link, moveFocus) {
        usable.forEach(function (item) {
          var active = item === link;
          item.setAttribute('aria-selected', active ? 'true' : 'false');
          item.setAttribute('tabindex', active ? '0' : '-1');
          var panel = document.getElementById(item.getAttribute('href').slice(1));
          if (panel) panel.hidden = !active;
        });
        if (moveFocus) link.focus();
      }

      usable.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          activate(link, false);
          history.replaceState(null, '', link.getAttribute('href'));
        });
        link.addEventListener('keydown', function (e) {
          var i = usable.indexOf(link);
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            activate(usable[(i + 1) % usable.length], true);
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            activate(usable[(i - 1 + usable.length) % usable.length], true);
          }
        });
      });

      // Honor an incoming hash if it maps to one of the tabs.
      var hash = location.hash;
      if (hash) {
        var target = usable.find(function (link) {
          return link.getAttribute('href') === hash;
        });
        if (target) activate(target, false);
      }
    });

    // Instagram icon: page-share behavior. There is no universal Instagram
    // web-share URL, so use Web Share API where available, with copy fallback.
    document.querySelectorAll('.ev-share a[data-instagram-share]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var url = link.dataset.shareUrl || location.href;
        var title = link.dataset.shareTitle || document.title;
        if (navigator.share) {
          e.preventDefault();
          navigator.share({ title: title, url: url }).catch(function(){});
        } else if (navigator.clipboard) {
          e.preventDefault();
          navigator.clipboard.writeText(url).then(function () {
            link.setAttribute('aria-label', 'Event link copied for Instagram sharing');
            setTimeout(function () {
              link.setAttribute('aria-label', 'Share on Instagram');
            }, 1800);
          });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventPage);
  } else {
    initEventPage();
  }
})();
