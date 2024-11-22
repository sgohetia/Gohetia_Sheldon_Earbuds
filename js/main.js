(() => {
  console.log("IEFE FIRED!");

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 537;
  const images = [];

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `images/mysequence/earbuds_${(i + 1)
      .toString()
      .padStart(5, "0")}.png`;
    images.push(img);
  }

  const buds = { frame: 0 };
  gsap.to(buds, {
    frame: 536,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 1,
      // markers: true,
      start: "top top",
      end: "500% top", //make it longer and look smoother
    },
    onUpdate: render,
  });

  images[0].addEventListener("load", render);

  function render() {
    // console.log(buds.frame);
    // console.log(images[buds.frame]);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
  }
  // SHOW MENU
  const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // HIDE MENU
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // CLOSE MENU WHEN CLICKING OUTSIDE
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      navMenu.classList.remove("show-menu");
    }
  });

  // REMOVE MENU MOBILE
  const navLink = document.querySelectorAll(".nav__link");
  const linkAction = () => {
    const navMenu = document.querySelector("#nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  // SHADOW HEADER
  const shadowHeader = () => {
    const header = document.querySelector("#header");

    // Check if the scroll position is greater than or equal to 50
    if (window.scrollY >= 50) {
      header.classList.add("shadow-header");
    } else {
      header.classList.remove("shadow-header");
    }
  };
  window.addEventListener("scroll", shadowHeader);

  // ADD SHOW SCROLL UP LOGIC
  const scrollUp = () => {
    const scrollUp = document.querySelector("#scroll-up");

    // Check if the scroll position is greater than or equal to 350
    if (window.scrollY >= 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  };
  window.addEventListener("scroll", scrollUp);

  //Adding animation for intro text

  gsap.registerPlugin(ScrollTrigger);

  //Adding animation for all section
  gsap.from(".gallery-hero", {
    scrollTrigger: {
      trigger: ".gallery-hero",
      toggleActions: "restart none restart none",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".gallery-info", {
    scrollTrigger: {
      trigger: ".gallery-info",
      toggleActions: "restart none restart none",
    },
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".gallery-img1", {
    scrollTrigger: {
      trigger: ".gallery-img1",
      toggleActions: "restart none restart none",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".gallery-img2", {
    scrollTrigger: {
      trigger: ".gallery-img2",
      toggleActions: "restart none restart none",
    },
    scale: 0.5,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".gallery-img3", {
    scrollTrigger: {
      trigger: ".gallery-img3",
      toggleActions: "restart none restart none",
    },
    x: 100,
    opacity: 0,
    duration: 3,
    ease: "power2.out",
  });
  gsap.from(".gallery-img4", {
    scrollTrigger: {
      trigger: ".gallery-img1",
      toggleActions: "restart none restart none",
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".gallery-img5", {
    scrollTrigger: {
      trigger: ".gallery-img2",
      toggleActions: "restart none restart none",
    },
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".gallery-img6", {
    scrollTrigger: {
      trigger: ".gallery-img3",
      toggleActions: "restart none restart none",
    },
    x: 100,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".abouttext1", {
    scrollTrigger: {
      trigger: ".abouttext1",
      toggleActions: "restart none restart none",
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".abouttext2", {
    scrollTrigger: {
      trigger: ".abouttext2",
      toggleActions: "restart none restart none",
    },
    x: 100,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });

  //Hotspot
  const hotspots = document.querySelectorAll(".Hotspot");

  // This is my data array for my hotspot info
  const infoboxes = [
    {
      title: "Earbuds Speaker Filter",
      text: "Protects the speaker, ensuring sound clarity while preventing debris from entering the earbud.",
      image: "images/s6.png",
    },
    {
      title: "Silicon Tipped Ear Piece",
      text: "Soft, ergonomic tip providing comfort and a secure fit for prolonged use.",
      image: "images/s7.png",
    },
    {
      title: "Microphone",
      text: "Captures voice input for calls and voice commands with noise-canceling capabilities.",
      image: "images/s5.png",
    },
    {
      title: "Charging Metal",
      text: "Conductive surface that connects with the charging case for efficient power transfer.",
      image: "images/s2s.png",
    },
    {
      title: "Bluetooth LED",
      text: "Indicator light showing the status of Bluetooth connection and pairing.",
      image: "images/s3.png",
    },
    {
      title: "Logo Breathing Light Effect",
      text: "Illuminated logo that pulses subtly, enhancing aesthetics and indicating power or connection status.",
      image: "images/s1.png",
    },
  ];

  // This function will Load the data from my array to display in the html/DOM
  function loadInfo() {
    hotspots.forEach((hotspot, index) => {
      const infobox = infoboxes[index];
      const annotation = hotspot.querySelector(".HotspotAnnotation");

      if (infobox) {
        annotation.innerHTML = "";

        const imgElement = document.createElement("img");
        imgElement.src = infobox.image;
        imgElement.alt = infobox.title;
        // imgElement.style.width = "260px";
        // imgElement.style.height = "auto";
        annotation.appendChild(imgElement);

        const titleElement = document.createElement("h2");
        titleElement.textContent = infobox.title;
        annotation.appendChild(titleElement);

        const textElement = document.createElement("p");
        textElement.textContent = infobox.text;
        annotation.appendChild(textElement);

        annotation.style.display = "none";
      }
    });
  }
  // This function will show and hide my hotspot
  function showInfo() {
    const annotation = this.querySelector(".HotspotAnnotation");
    annotation.style.display = "block";
    gsap.to(annotation, { autoAlpha: 1, duration: 1 });
  }

  function hideInfo() {
    const annotation = this.querySelector(".HotspotAnnotation");
    gsap.to(annotation, {
      autoAlpha: 0,
      duration: 1,
      onComplete: () => (annotation.style.display = "none"),
    });
  }

  loadInfo();

  // This is my event handler
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  // for my xray slider
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = `${slider.value}%`;
  }

  slider.addEventListener("input", moveDivisor);

  // This is for the color selector
  const earbuds = document.querySelector("#ear-buds");
  const buttons = document.querySelectorAll("#color-con button");

  function swapColor(e) {
    console.log(e.currentTarget.id);
    const selected = e.currentTarget.id;
    earbuds.src = `images/${selected}.jpg`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", swapColor);
  });

  // --- This for my contact input form label animation
  const inputs = document.querySelectorAll(".input");

  function focusInput() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurInput() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusInput);
    input.addEventListener("blur", blurInput);
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const navLinks = document.querySelectorAll("#nav-menu ul li a");

  function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `${selectedLink}` },
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
  });
})();
