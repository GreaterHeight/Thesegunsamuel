/* V95 — Event detail tabs: active state, indicator, panel isolation, keyboard support */
(function () {
  function initEventTabs() {
    document.querySelectorAll('.ev-tabs').forEach(function (nav) {
      var tabs = Array.from(nav.querySelectorAll('[data-event-tab][href^="#"]'));
      if (!tabs.length) return;

      var panels = tabs.map(function (tab) {
        return document.getElementById(tab.getAttribute('href').slice(1));
      });

      function positionIndicator(activeTab) {
        var inner = nav.querySelector('.ev-tabs-inner') || nav;
        var indicator = nav.querySelector('.event-tab-indicator');
        if (!indicator) {
          indicator = document.createElement('span');
          indicator.className = 'event-tab-indicator';
          indicator.setAttribute('aria-hidden', 'true');
          inner.appendChild(indicator);
        }
        var innerRect = inner.getBoundingClientRect();
        var tabRect = activeTab.getBoundingClientRect();
        indicator.style.width = tabRect.width + 'px';
        indicator.style.transform = 'translateX(' + (tabRect.left - innerRect.left + inner.scrollLeft) + 'px)';
      }

      function activate(activeTab, moveFocus) {
        tabs.forEach(function (tab, index) {
          var active = tab === activeTab;
          var panel = panels[index];
          tab.classList.toggle('active', active);
          tab.setAttribute('aria-selected', active ? 'true' : 'false');
          tab.setAttribute('tabindex', active ? '0' : '-1');
          if (panel) {
            panel.hidden = !active;
            panel.setAttribute('aria-hidden', active ? 'false' : 'true');
          }
        });
        positionIndicator(activeTab);
        if (moveFocus) activeTab.focus({preventScroll:true});
      }

      tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function (e) {
          e.preventDefault();
          activate(tab, false);
          history.replaceState(null, '', tab.getAttribute('href'));
        });
        tab.addEventListener('keydown', function (e) {
          if (e.key !== 'ArrowRight' && e.key !== 'ArrowDown' &&
              e.key !== 'ArrowLeft' && e.key !== 'ArrowUp' &&
              e.key !== 'Home' && e.key !== 'End') return;
          e.preventDefault();
          var next = index;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (index + 1) % tabs.length;
          if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
          if (e.key === 'Home') next = 0;
          if (e.key === 'End') next = tabs.length - 1;
          activate(tabs[next], true);
        });
      });

      var initial = tabs.find(function (tab) {
        return tab.getAttribute('href') === location.hash;
      }) || tabs[0];

      activate(initial, false);

      window.addEventListener('resize', function () {
        var active = tabs.find(function (tab) { return tab.classList.contains('active'); }) || tabs[0];
        positionIndicator(active);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventTabs);
  } else {
    initEventTabs();
  }
})();
