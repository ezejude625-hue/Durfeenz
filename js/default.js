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

// Calculator

const slider = document.getElementById("investmentSlider");
const inputBox = document.getElementById("investmentInput");
const investmentDisplay = document.getElementById("investmentAmount");
const dailyProfitEl = document.getElementById("dailyProfit");
const weeklyProfitEl = document.getElementById("weeklyProfit");
const planButtons = document.querySelectorAll(".plan-btn");

let investment = parseFloat(slider.value);
let roi = 4.7; // DEFAULT ROI — change if you change the default selected plan

// CORE CALCULATION (easy to modify later)
function updateResults() {
  const dailyProfit = investment * (roi / 100);
  const weeklyProfit = dailyProfit * 7; // weekly now

  dailyProfitEl.textContent = `$${dailyProfit.toFixed(2)}`;
  weeklyProfitEl.textContent = `$${weeklyProfit.toFixed(2)}`;
}

// ===== SLIDER → INPUT =====
slider.addEventListener("input", (e) => {
  investment = parseFloat(e.target.value);
  inputBox.value = investment;
  investmentDisplay.textContent = `$${investment.toLocaleString()}`;
  updateResults();
});

// ===== INPUT → SLIDER =====
inputBox.addEventListener("input", (e) => {
  let value = parseFloat(e.target.value);

  if (isNaN(value)) value = 200;

  // Limit value
  if (value < 200) value = 200;
  if (value > 100000) value = 100000;

  // Apply correction
  inputBox.value = value;

  investment = value;
  slider.value = value;

  investmentDisplay.textContent = `$${investment.toLocaleString()}`;

  updateResults();
});

// ===== PLAN SELECTION =====
planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // reset styles
    planButtons.forEach((btn) => {
      btn.classList.remove("border-primary", "bg-primary/5", "text-primary");
      btn.classList.add("border-slate-200", "text-slate-600");
      btn.querySelector("span").classList.add("hidden");
    });

    // activate clicked
    button.classList.add("border-primary", "bg-primary/5", "text-primary");
    button.classList.remove("border-slate-200", "text-slate-600");
    button.querySelector("span").classList.remove("hidden");

    // ROI comes from data-roi (easy to edit in HTML)
    roi = parseFloat(button.getAttribute("data-roi"));
    updateResults();
  });
});

updateResults();
