const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});



  const images = [
    "images/1 (1).jpg",
    "images/1 (2).png",
    "images/1 (3).jpg",
    "images/1 (4).jpg",
    "images/1 (5).jpg",
    "images/1 (6).jpg",
    "images/1 (7).jpg",
    "images/1 (8).jpg"
  ];

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").classList.add("active");
    document.getElementById("lightbox-img").src = images[currentIndex];
  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
  }

  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("lightbox-img").src = images[currentIndex];
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowRight") {
      changeImage(1);
    } else if (event.key === "ArrowLeft") {
      changeImage(-1);
    }
  });
