(function () {
  const btn = document.querySelector("[data-menu-btn]");
  const overlay = document.querySelector("[data-menu-overlay]");

  if (!btn || !overlay) return;

  const openMenu = () => {
    btn.classList.add("is-open");
    overlay.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    btn.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    if (overlay.classList.contains("is-open")) closeMenu();
    else openMenu();
  };

  btn.addEventListener("click", toggleMenu);

  // Close when clicking a menu link
  overlay.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) {
      e.preventDefault();
      closeMenu();
      setTimeout(() => {
        window.location.href = link.href;
      }, 400);
    }
  });

  // ESC to close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      closeMenu();
    }
  });
})();
