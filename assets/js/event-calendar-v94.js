/* V104 — Generic event calendar + invitation utilities.
 * Event pages provide data-event-* attributes on .ev-detail-hero.
 * Calendar generation is enabled only when real start/end values exist.
 */
(function () {
  "use strict";

  function getHero() {
    return document.querySelector(".ev-detail-hero");
  }

  function getEvent() {
    var hero = getHero();
    if (!hero) return null;

    return {
      title: hero.getAttribute("data-event-title") || ((hero.querySelector("h1") || {}).textContent || "Event").trim(),
      start: hero.getAttribute("data-event-start") || "",
      end: hero.getAttribute("data-event-end") || "",
      location: hero.getAttribute("data-event-location") || "Online",
      url: hero.getAttribute("data-event-url") || window.location.href,
      description: hero.getAttribute("data-event-description") ||
        ((hero.querySelector(".ev-detail-copy") || {}).textContent || "").trim(),
      dateLabel: hero.getAttribute("data-event-date-label") || "",
      timeLabel: hero.getAttribute("data-event-time-label") || "",
      venueLabel: hero.getAttribute("data-event-venue-label") || "",
      seatsLabel: hero.getAttribute("data-event-seats-label") || ""
    };
  }

  function icsEscape(value) {
    return String(value)
      .replace(/\\/g, "\\\\")
      .replace(/\r?\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;");
  }

  function downloadCalendar(event) {
    if (!event.start || !event.end) return;

    var uidSlug = event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    var ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Segun Samuel//Events//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:" + uidSlug + "@segunsamuel",
      "DTSTAMP:20260827T000000Z",
      "DTSTART:" + event.start,
      "DTEND:" + event.end,
      "SUMMARY:" + icsEscape(event.title),
      "LOCATION:" + icsEscape(event.location),
      "DESCRIPTION:" + icsEscape(event.description + " " + event.url),
      "URL:" + event.url,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    var blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = uidSlug + ".ics";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 500);
  }

  function copyInvitation(button, event) {
    var lines = [
      event.title,
      "",
      event.dateLabel ? "Date: " + event.dateLabel : "Schedule: To be announced",
      event.timeLabel ? "Time: " + event.timeLabel : "",
      event.venueLabel ? "Venue: " + event.venueLabel : "",
      event.seatsLabel ? "Seats: " + event.seatsLabel : "",
      "",
      event.description,
      "",
      event.url
    ].filter(function (line) { return line !== ""; });

    var text = lines.join("\n");

    function success() {
      var original = button.innerHTML;
      button.textContent = "Invitation Copied";
      setTimeout(function () { button.innerHTML = original; }, 1800);
    }

    function fallbackCopy() {
      var area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.focus();
      area.select();
      try { document.execCommand("copy"); success(); }
      finally { area.remove(); }
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(success).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  }

  function init() {
    var event = getEvent();
    if (!event) return;

    document.querySelectorAll('[data-action="add-calendar"]').forEach(function (button) {
      if (event.start && event.end) {
        button.disabled = false;
        button.removeAttribute("title");
        button.addEventListener("click", function () { downloadCalendar(event); });
      } else {
        button.disabled = true;
      }
    });

    document.querySelectorAll('[data-action="copy-invite"]').forEach(function (button) {
      button.addEventListener("click", function () { copyInvitation(button, event); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}());
