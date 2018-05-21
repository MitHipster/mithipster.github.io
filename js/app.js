/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, ScrollReveal, sr, alert*/

// Skills data used in handlebars compilation
const skillsColumnOne = {
  skills: [
    {
      text: "HTML5",
      ariaValueNow: "3",
      ariaValueText: "3 out of 4",
      barWidth: "width: 75%"
    },
    {
      text: "CSS3/Sass",
      ariaValueNow: "3",
      ariaValueText: "3 out of 4",
      barWidth: "width: 75%"
    },
    {
      text: "JavaScript",
      ariaValueNow: "3",
      ariaValueText: "3 out of 4",
      barWidth: "width: 75%"
    },
    {
      text: "jQuery/AJAX",
      ariaValueNow: "3",
      ariaValueText: "3 out of 4",
      barWidth: "width: 75%"
    }
  ]
};

const skillsColumnTwo = {
  skills: [
    {
      text: "Bootstrap",
      ariaValueNow: "3",
      ariaValueText: "3 out of 4",
      barWidth: "width: 75%"
    },
    {
			text: "MongoDB/SQL",
      ariaValueNow: "3",
      ariaValueText: "3 out of 4",
			barWidth: "width: 75%"
		},
		{
			text: "Node.js",
			ariaValueNow: "2",
			ariaValueText: "2 out of 4",
			barWidth: "width: 50%"
		},
    {
      text: "React",
      ariaValueNow: "2",
      ariaValueText: "2 out of 4",
      barWidth: "width: 50%"
    }
  ]
};

// Portfolio data used in handlebars compilation
const portfolio = {
  projects: [
    {
      name: "Web App Dashboard",
      desc: "An interactive dashboard for a web application using advanced web techniques including JavaScript programming with Chart.js employing SVG graphics. The site involved creating charts and graphics along with user interactivity and usability components.",
      image: "p9-desktop.png",
      github: "dashboard",
      order: "na",
      icon: "graph-pie",
      container: "desktop",
      device: "imac",
      orientation: "portrait",
      color: "black"
    },
    {
      name: "PathFinder Travel App",
      desc: "A travel site that presents users a snapshot of an area of interest. By leveraging Google Place Autocomplete, latitude and longitude coordinates are derived from the user’s search term to feed several AJAX requests to return maps, weather forecasts, best restaurants, local events, and what people are saying on Twitter.",
      image: "unc1-tablet.png",
      github: "pathfinder",
      order: "large-order-2",
      icon: "shopping-bag",
      container: "tablet-port",
      device: "ipad_air_2",
      orientation: "portrait",
      color: "black"
    },
    {
      name: "Spotify API",
      desc: "JavaScript programming and multiple, nested AJAX requests were used to generate a gallery of album images and information by submitting a search term to Spotify's API. Selecting an album displays additional details, including tracks with 30-second samples, using custom-styled lightbox and media plugins.",
      image: "p10-laptop.png",
      github: "spotify",
      order: "na",
      icon: "social-spotify",
      container: "laptop",
      device: "macbook",
      orientation: "portrait",
      color: "black"
    },
    {
      name: "Online Registration Form",
      desc: "A responsive, mobile-friendly registration form using a variety of form input types and attributes, fully customized using HTML5 validation.",
      image: "p3-mobile.png",
      github: "project_3_registration_form",
      order: "large-order-2",
      icon: "clipboard-notes",
      container: "phone-port",
      device: "iphone6",
      orientation: "portrait",
      color: "white"
    },
    {
      name: "Accessibility Refactor",
      desc: "Enhanced an existing website, making it accessible to users with disabilites by following W3C's Web Accessibility Initiative (WAI) and using Google's Accessibility Developer Tools.",
      image: "p8-tablet.png",
      github: "project_8_accessibility_refactor",
      order: "na",
      icon: "wheelchair",
      container: "tablet-port",
      device: "ipad_air_2",
      orientation: "portrait",
      color: "black"
    },
    {
      name: "Interactive Video Player",
      desc: "Customized a video player using MediaElement's JavaScript library and HTML5 Video API. Users can follow along with the dynamically highlighted transcript below and navigate the video by clicking the text.",
      image: "p7-laptop.png",
      github: "project_7_video_player",
      order: "large-order-2",
      icon: "play-video",
      container: "laptop",
      device: "macbook",
      orientation: "portrait",
      color: "black"
    },
    {
      name: "Photo Gallery",
      desc: "Created an interactive photo gallery using JavaScript that searches photo captions in real-time, fading images in and out based on the search term. Photos are displayed using a lightbox plugin customized to match the site's overall scheme.",
      image: "p4-desktop.png",
      github: "project_4_photo_gallery",
      order: "na",
      icon: "photo",
      container: "desktop",
      device: "imac",
      orientation: "portrait",
      color: "black"
    }
  ]
};

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

// Get html templates and compile using handlebars
const skillsTemplate = $('#skills-template').html();
const compileSkills = Handlebars.compile(skillsTemplate);
const portfolioTemplate = $('#portfolio-template').html();
const compilePortfolio = Handlebars.compile(portfolioTemplate);

// Add compiled html to the DOM
$('#skills-column-one').html(compileSkills(skillsColumnOne));
$('#skills-column-two').html(compileSkills(skillsColumnTwo));
$('#portfolio').html(compilePortfolio(portfolio));

// Initialize ScrollReveal
window.sr = ScrollReveal(defaults);
// Call ScrollReveal passing container and custom / default options
sr.reveal('.sr-link', srLink, defaultInterval);
sr.reveal('.sr-name-title', srNameTitle);
sr.reveal('.sr-project');
sr.reveal('.sr-get-in-touch');
sr.reveal('.sr-form');
sr.reveal('.sr-contact');
