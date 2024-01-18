document.addEventListener("DOMContentLoaded", function () {
  var navContainer = document.querySelector(".navContainer");
  navContainer.addEventListener("click", function () {
    navContainer.classList.toggle("active");

    var dropdownItems = document.querySelector(".dropdown-items");
    var navImgDropDown = document.querySelector(".navImgDropDown");

    if (navContainer.classList.contains("active")) {
      fadeIn(dropdownItems);
      fadeIn(navImgDropDown);
    } else {
      fadeOut(dropdownItems);
      fadeOut(navImgDropDown);
    }
  });

  function fadeIn(element) {
    element.style.display = "block";
    element.style.opacity = 0;

    var opacity = 0;
    var interval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.5;
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
        element.style.display = "none";
        clearInterval(interval);
      }
    }, 100);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".galleryDiv ul li a");
  const page = document.querySelector(".galleryPage");
  const mainImage = document.querySelector(".mainImage");
  let currentFaction = "";

  links.forEach((link) => {
    link.addEventListener("mouseover", function () {
      currentFaction = link.classList[0];
      page.style.backgroundColor = getColor(currentFaction);
      changeImage(currentFaction);
      // hideOtherItems(link);
    });

    link.addEventListener("mouseout", function () {
      page.style.backgroundColor = "#000";
      // showAllItems();
    });
  });

  function getColor(category) {
    switch (category) {
      case "xenos":
        return "#AF7D83";
      case "chaos":
        return "#827F79";
      case "spaceMarines":
        return "#BF9B30";
      case "imperialArmies":
        return "#677990";
      case "necron":
        return "#698174";
      case "aeldari":
        return "#7A6E8D";
      default:
        return "#000";
    }
  }

  function changeImage(category) {
    const categoryToImagePath = {
      xenos: "/images/xenos.png",
      chaos: "/images/chaos.png",
      spaceMarines: "/images/spacemarines.png",
      imperialArmies: "/images/imperialarmies.png",
      necron: "/images/necron.png",
      aeldari: "/images/aeldari.png",
    };

    if (categoryToImagePath.hasOwnProperty(category)) {
      const imagePath = categoryToImagePath[category];
      mainImage.src = imagePath;
    }
  }
});

async function addToFavorites(figurine) {
  console.log(typeof figurine);
  await fetch("/api/users/favourite", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ figurine_id: figurine }),
  });
}
async function deleteFave(figurine) {
  console.log(typeof figurine);
  await fetch(`/api/users/delete/${figurine}`, {
    method: "DELETE",
  });
  window.location.reload();
}


const textContainer = document.querySelector('.text-container');
    const text = textContainer.querySelector('p');
    const warhammerLink = document.getElementById('enterWarhammerBtn');
    const splitText = new SplitType(text);
    
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
    tl.fromTo(textContainer, { opacity: 0, y: "-100vh" }, { opacity: 1, y: "0", duration: 0 })
        .from(splitText.chars, { opacity: 0, x: -1000, y: -500, rotateX: -90, rotateY: 1000, stagger: .01, duration: 3 })
        .to(splitText.chars, { opacity: 0, y: 0, rotateX: 90, rotateY: -90, stagger: .01, duration: 1 }, '-=.01')
        .set(warhammerLink, { opacity: 0, display: 'inline-block' })
        .to(warhammerLink, { opacity: 1, duration: .5, delay: 0 });
