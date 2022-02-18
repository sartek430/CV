//NAVBAR
let lastScollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScollTop = scrollTop;
});

// TYPED
var typed = new Typed(".typed", {
  strings: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis itaque incidunt veniam architecto nulla sit doloribus omnis, eius, molestias laborum deleniti quisquam! Sunt ipsa, ut dicta incidunt enim harum!",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, modi.",
  ],
  typeSpeed: 20,
});
