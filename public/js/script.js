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

  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.galleryDiv ul li a');
    const page = document.querySelector('.galleryPage');

    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            const color = link.classList[0];
            page.style.backgroundColor = getColor(color);
        });

        link.addEventListener('mouseout', function () {
            page.style.backgroundColor = '#000'; // Reset to initial color on mouseout
        });
    });

    function getColor(category) {
        switch (category) {
          case 'Xenos':
            return '#d8c6ff'; // Soft purple
        case 'Chaos':
            return '#ffe9a5'; // Soft gold
        case 'spaceMarines':
            return '#b3b3b3'; // Soft dark grey
        case 'imperialArmies':
            return '#b3ffb3'; // Soft neon green
        case 'necron':
            return '#b3b3ff'; // Soft blue
        case 'aeldari':
            return '#ffb3b3'; // Soft red
            default:
                return '#000'; 
        }
    }
});
