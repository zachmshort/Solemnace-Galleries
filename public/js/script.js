document.addEventListener('DOMContentLoaded', function () {
    var navContainer = document.querySelector('.navContainer');
    navContainer.addEventListener('click', function () {
      navContainer.classList.toggle('active');

      var dropdownItems = document.querySelector('.dropdown-items');
      var navImgDropDown = document.querySelector('.navImgDropDown');

      if (navContainer.classList.contains('active')) {
        fadeIn(dropdownItems);
        fadeIn(navImgDropDown);
      } else {
        fadeOut(dropdownItems);
        fadeOut(navImgDropDown);
      }
    });

    function fadeIn(element) {
      element.style.display = 'block';
      element.style.opacity = 0;

      var opacity = 0;
      var interval = setInterval(function () {
        if (opacity < 1) {
          opacity += 0.125;
          element.style.opacity = opacity;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }

    function fadeOut(element) {
      var opacity = 1;
      var interval = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.1;
          element.style.opacity = opacity;
        } else {
          element.style.display = 'none';
          clearInterval(interval);
        }
      }, 100);
    }
  });

let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${index * -100}vw)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 6) % 6;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 6;
    showSlide(currentIndex);
}
