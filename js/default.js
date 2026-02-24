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

const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

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
