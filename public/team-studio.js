(function () {
  var INTRO_TEXT = "We are LocoStudio, a creative team bringing ideas to life through visual storytelling, design, and digital experiences. Combining different creative perspectives and technical skills, we build identities, create meaningful visuals, and develop experiences that leave a lasting impression.";
  var overlay = document.getElementById("team-hero");
  var intro = document.getElementById("team-intro");
  if (!overlay || !intro) return;

  var wasHome = null;
  var namesAnimated = false;
  var entranceAnimated = false;
  var introEntered = false;
  var splitDone = false;

  function isHome() {
    return !/(^|\/)(about|contact|projects)(\/|$)/.test(location.pathname);
  }

  function spring(from, to, options, onUpdate, onDone) {
    var stiffness = options.stiffness;
    var damping = options.damping;
    var mass = options.mass || 1;
    var delay = options.delay || 0;
    var delta = options.delta || 0.005;
    var value = from;
    var velocity = 0;
    var last = 0;

    setTimeout(function () {
      last = performance.now();
      requestAnimationFrame(step);
    }, delay);

    function step(now) {
      var dt = Math.min((now - last) / 1000, 1 / 30);
      if (dt <= 0) dt = 1 / 60;
      last = now;
      var acceleration = (-stiffness * (value - to) - damping * velocity) / mass;
      velocity += acceleration * dt;
      value += velocity * dt;
      onUpdate(value);
      if (Math.abs(value - to) < delta && Math.abs(velocity) < delta) {
        onUpdate(to);
        if (onDone) onDone();
        return;
      }
      requestAnimationFrame(step);
    }
  }

  function fitNames() {
    var names = overlay.querySelectorAll(".name-spring");
    Array.prototype.forEach.call(names, function (element) {
      element.style.fontSize = "";
      var maximum = parseFloat(getComputedStyle(element).fontSize);
      var width = element.parentElement.clientWidth - 4;
      var size = maximum;
      var guard = 0;
      element.style.fontSize = size + "px";
      while (element.scrollWidth > width && size > 24 && guard < 80) {
        size -= 2;
        element.style.fontSize = size + "px";
        guard += 1;
      }
    });
  }

  function splitIntro() {
    if (splitDone) return;
    var paragraph = intro.querySelector(".intro-reveal");
    if (!paragraph) return;
    paragraph.textContent = "";
    var words = INTRO_TEXT.split(" ");
    words.forEach(function (word, wordIndex) {
      var wordElement = document.createElement("span");
      wordElement.className = "intro-word";
      word.split("").forEach(function (character) {
        var characterElement = document.createElement("span");
        characterElement.className = "intro-char";
        characterElement.textContent = character;
        wordElement.appendChild(characterElement);
      });
      if (wordIndex < words.length - 1) {
        var space = document.createElement("span");
        space.className = "intro-space";
        space.textContent = "\u00A0";
        wordElement.appendChild(space);
      }
      paragraph.appendChild(wordElement);
    });
    splitDone = true;
    updateIntroColor();
  }

  function animateNames() {
    if (namesAnimated) return;
    namesAnimated = true;
    fitNames();
    Array.prototype.forEach.call(overlay.querySelectorAll(".name-spring"), function (element) {
      element.style.opacity = "0.001";
      element.style.setProperty("--spring-y", "90px");
      element.style.setProperty("--parallax-y", "0px");
      spring(90, 0, { stiffness: 300, damping: 60, mass: 1, delay: 1000, delta: 0.02 }, function (value) {
        element.style.setProperty("--spring-y", value.toFixed(2) + "px");
      });
      spring(0.001, 1, { stiffness: 300, damping: 60, mass: 1, delay: 1000, delta: 0.0005 }, function (value) {
        element.style.opacity = String(value);
      });
    });
  }

  function animateEntrance() {
    if (entranceAnimated) return;
    entranceAnimated = true;

    var logo = overlay.querySelector(".team-logo");
    var nav = overlay.querySelector(".team-nav");
    var descriptions = overlay.querySelectorAll(".profile-desc");
    var footerLabels = document.querySelectorAll("#team-footer span");

    if (logo) {
      spring(23, 0, { stiffness: 300, damping: 60, mass: 1, delay: 1000, delta: 0.02 }, function (value) {
        logo.style.setProperty("--logo-y", value.toFixed(2) + "px");
      });
      spring(0.001, 1, { stiffness: 300, damping: 60, mass: 1, delay: 1000, delta: 0.0005 }, function (value) {
        logo.style.opacity = String(value);
      });
    }

    if (nav) {
      spring(-90, 0, { stiffness: 300, damping: 60, mass: 1, delay: 1000, delta: 0.02 }, function (value) {
        nav.style.setProperty("--nav-y", value.toFixed(2) + "px");
      });
      spring(0.001, 1, { stiffness: 300, damping: 60, mass: 1, delay: 1000, delta: 0.0005 }, function (value) {
        nav.style.opacity = String(value);
      });
    }

    Array.prototype.forEach.call(descriptions, function (element) {
      spring(90, 0, { stiffness: 300, damping: 60, mass: 1, delay: 1100, delta: 0.02 }, function (value) {
        element.style.setProperty("--desc-y", value.toFixed(2) + "px");
      });
      spring(0.001, 1, { stiffness: 300, damping: 60, mass: 1, delay: 1100, delta: 0.0005 }, function (value) {
        element.style.opacity = String(value);
      });
    });

    Array.prototype.forEach.call(footerLabels, function (element) {
      spring(20, 0, { stiffness: 400, damping: 80, mass: 1, delay: 500, delta: 0.02 }, function (value) {
        element.style.setProperty("--footer-y", value.toFixed(2) + "px");
      });
      spring(0.001, 1, { stiffness: 400, damping: 80, mass: 1, delay: 500, delta: 0.0005 }, function (value) {
        element.style.opacity = String(value);
      });
    });
  }

  function introEnter() {
    if (introEntered) return;
    introEntered = true;
    var label = intro.querySelector(".intro-label");
    var reveal = intro.querySelector(".intro-reveal");
    if (!label || !reveal) return;
    spring(0.001, 1, { stiffness: 400, damping: 80, mass: 1, delay: 100, delta: 0.0005 }, function (value) {
      label.style.opacity = String(value);
    });
    spring(60, 0, { stiffness: 400, damping: 80, mass: 1, delay: 100, delta: 0.02 }, function (value) {
      label.style.setProperty("--intro-y", value.toFixed(2) + "px");
    });
    spring(0.001, 1, { stiffness: 400, damping: 80, mass: 1, delay: 200, delta: 0.0005 }, function (value) {
      reveal.style.opacity = String(value);
    });
    spring(60, 0, { stiffness: 400, damping: 80, mass: 1, delay: 200, delta: 0.02 }, function (value) {
      reveal.style.setProperty("--intro-y", value.toFixed(2) + "px");
    });
  }

  function resetAnimations() {
    namesAnimated = false;
    entranceAnimated = false;
    introEntered = false;
    Array.prototype.forEach.call(overlay.querySelectorAll(".name-spring"), function (element) {
      element.style.opacity = "0.001";
      element.style.setProperty("--spring-y", "90px");
      element.style.setProperty("--parallax-y", "0px");
    });
    var logo = overlay.querySelector(".team-logo");
    var nav = overlay.querySelector(".team-nav");
    if (logo) {
      logo.style.opacity = "0.001";
      logo.style.setProperty("--logo-y", "23px");
    }
    if (nav) {
      nav.style.opacity = "0.001";
      nav.style.setProperty("--nav-y", "-90px");
    }
    Array.prototype.forEach.call(overlay.querySelectorAll(".profile-desc"), function (element) {
      element.style.opacity = "0.001";
      element.style.setProperty("--desc-y", "90px");
    });
    Array.prototype.forEach.call(document.querySelectorAll("#team-footer span"), function (element) {
      element.style.opacity = "0.001";
      element.style.setProperty("--footer-y", "20px");
    });
    var label = intro.querySelector(".intro-label");
    var reveal = intro.querySelector(".intro-reveal");
    if (label) {
      label.style.opacity = "0.001";
      label.style.setProperty("--intro-y", "60px");
    }
    if (reveal) {
      reveal.style.opacity = "0.001";
      reveal.style.setProperty("--intro-y", "60px");
    }
  }

  function updateIntroColor() {
    if (!intro.classList.contains("active")) return;
    var rectangle = intro.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var progress = (0.75 * viewportHeight - rectangle.top) / (0.6 * viewportHeight);
    progress = Math.max(0, Math.min(1, progress));
    var characters = intro.querySelectorAll(".intro-char");
    var total = characters.length;
    Array.prototype.forEach.call(characters, function (character, index) {
      var local = (progress * total - index) / 3;
      local = Math.max(0, Math.min(1, local));
      var eased = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
      var channel = Math.round(102 + 153 * eased);
      character.style.color = "rgb(" + channel + "," + channel + "," + channel + ")";
    });
  }

  function updateParallax() {
    if (!overlay.classList.contains("active")) return;
    var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    var shift = Math.max(-90, Math.min(90, -scrollTop * 0.12));
    Array.prototype.forEach.call(overlay.querySelectorAll(".name-spring"), function (element) {
      element.style.setProperty("--parallax-y", shift.toFixed(2) + "px");
    });
    updateIntroColor();
  }

  function centerTrack() {
    if (window.innerWidth > 809.98) return;
    var track = overlay.querySelector(".team-track");
    var centerProfile = overlay.querySelector(".profile.center");
    if (track && centerProfile) {
      track.scrollLeft = centerProfile.offsetLeft - (track.clientWidth - centerProfile.clientWidth) / 2;
    }
  }

  function cleanText(value) {
    return value
      .replace(/Julian\.d®/g, "LocoStudio")
      .replace(/Julian\.d/g, "LocoStudio")
      .replace(/Julian David/g, "LocoStudio")
      .replace(/\bJulian\b/g, "LocoStudio")
      .replace(/\bDavid\b/g, "LocoStudio")
      .replace(/PARIS, FR/g, "EL-OUED, DZ")
      .replace(/BRAND DESIGNER/g, "VISUAL PORTFOLIO");
  }

  function brandingSync() {
    if (document.title.indexOf("LocoStudio") === -1) {
      document.title = "LocoStudio — Creative Studio";
    }
    var metaElements = document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]');
    Array.prototype.forEach.call(metaElements, function (meta) {
      var content = meta.getAttribute("content");
      if (!content || !/Julian|David/.test(content)) return;
      var cleaned = cleanText(content);
      if (cleaned !== content) meta.setAttribute("content", cleaned);
    });
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var value = node.nodeValue;
      if (!/Julian|David|PARIS, FR|BRAND DESIGNER/.test(value)) continue;
      var cleanedValue = cleanText(value);
      if (cleanedValue !== value) node.nodeValue = cleanedValue;
    }
  }

  function sync() {
    var active = isHome();
    overlay.classList.toggle("active", active);
    intro.classList.toggle("active", active);
    document.documentElement.classList.toggle("team-hero-active", active);
    document.body.classList.toggle("team-hero-active", active);
    if (active !== wasHome) {
      if (active) {
        splitIntro();
        fitNames();
        setTimeout(centerTrack, 80);
        animateEntrance();
        animateNames();
      } else {
        resetAnimations();
      }
      wasHome = active;
    }
    brandingSync();
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) introEnter();
    }, { threshold: 0.5 });
    observer.observe(intro);
  } else {
    window.addEventListener("scroll", function () {
      if (intro.getBoundingClientRect().top < window.innerHeight * 0.5) introEnter();
    }, { passive: true });
  }

  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", function () {
    fitNames();
    centerTrack();
    updateIntroColor();
  });
  window.addEventListener("popstate", sync);
  window.setInterval(sync, 500);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      fitNames();
      centerTrack();
    });
  }
  var main = document.getElementById("main");
  if (main && "MutationObserver" in window) {
    var mutationObserver = new MutationObserver(brandingSync);
    mutationObserver.observe(main, { childList: true, subtree: true, characterData: true });
  }
  brandingSync();
  sync();
})();
