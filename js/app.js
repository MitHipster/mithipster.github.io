/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, ScrollReveal, sr, alert*/


// Default overrides for all ScrollReveal elements
const defaults = {
  origin: 'bottom',
  duration: 1000,
  delay: 300,
  distance: '20%',
  viewFactor: 0.4,
  viewOffset: {
    top: 50
  }
};

// Default interval for nav links
const defaultInterval = 200;

// Nav Link options
const srLink = {
  container: '.sticky',
  origin: 'top',
  duration: 600,
  scale: 1,
  viewOffset: {
    top: 0
  }
};

// Callout options
const srNameTitle = {
  origin: 'left',
  duration: 800,
  delay: 0
};

// Initialize ScrollReveal
window.sr = ScrollReveal(defaults);
// Call ScrollReveal passing container and custom / default options
sr.reveal('.sr-link', srLink, defaultInterval);
sr.reveal('.sr-name-title', srNameTitle);
sr.reveal('.sr-project');
sr.reveal('.sr-get-in-touch');
sr.reveal('.sr-form');
sr.reveal('.sr-contact');
