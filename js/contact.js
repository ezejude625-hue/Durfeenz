tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00C7A9",
        "background-light": "#f5f6f8",
        "background-dark": "#101622",
      },
      fontFamily: {
        display: ["Inter"],
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

const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
