/* V94 — Event calendar + invitation utilities */
(function () {
  var EVENT = {
    title: 'The Architects Roundtable',
    start: '20261004T140000',
    end: '20261004T180000',
    location: 'Online',
    url: 'https://greaterheight.github.io/Thesegunsamuel/events/architects-roundtable/',
    description: 'Small-group conversations for leaders, builders and strategic thinkers working on complex problems.'
  };

  function icsEscape(value) {
    return String(value)
      .replace(/\\/g, '\\\\')
      .replace(/\r?\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;');
  }

  function downloadCalendar() {
    var ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Segun Samuel//Events//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:architects-roundtable-20261004@segunsamuel',
      'DTSTAMP:20260825T000000Z',
      'DTSTART:' + EVENT.start,
      'DTEND:' + EVENT.end,
      'SUMMARY:' + icsEscape(EVENT.title),
      'LOCATION:' + icsEscape(EVENT.location),
      'DESCRIPTION:' + icsEscape(EVENT.description + ' ' + EVENT.url),
      'URL:' + EVENT.url,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    var blob = new Blob([ics], {type: 'text/calendar;charset=utf-8'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'the-architects-roundtable-2026-10-04.ics';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 500);
  }

  function copyInvitation(button) {
    var text = [
      'The Architects Roundtable',
      '',
      'Date: October 4, 2026',
      'Time: 2:00pm – 6:00pm',
      'Venue: Online',
      'Seats: Limited',
      '',
      'Small-group conversations for leaders, builders and strategic thinkers working on complex problems.',
      '',
      EVENT.url
    ].join('\n');

    function success() {
      var original = button.innerHTML;
      button.textContent = 'Invitation Copied';
      setTimeout(function () { button.innerHTML = original; }, 1800);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(success).catch(function () {
        fallbackCopy(text, success);
      });
    } else {
      fallbackCopy(text, success);
    }
  }

  function fallbackCopy(text, success) {
    var area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.focus();
    area.select();
    try { document.execCommand('copy'); success(); }
    finally { area.remove(); }
  }

  function init() {
    document.querySelectorAll('[data-action="add-calendar"]').forEach(function (button) {
      button.addEventListener('click', downloadCalendar);
    });
    document.querySelectorAll('[data-action="copy-invite"]').forEach(function (button) {
      button.addEventListener('click', function () { copyInvitation(button); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
