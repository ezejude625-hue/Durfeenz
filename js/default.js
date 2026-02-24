tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00C7A9", // fallback solid color
        "background-light": "#f5f6f8",
        "background-dark": "#101622",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(10deg, #00674F, #00e6cf)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};

AOS.init();

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.onclick = () => {
  menu.classList.toggle("max-h-0");
  menu.classList.toggle("max-h-96");
};

$(document).ready(function () {
  var $owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    pagination: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // Wire custom buttons to trigger Owl actions
  $(".custom-next").on("click", function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
  $(".custom-prev").on("click", function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
});

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    loop: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    dots: false,
    draggable: false,
    touchMove: false,
    cssEase: "linear",
    speed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(function () {
      loader.style.display = "none";
    }, 600);
  }, 1500);
});
