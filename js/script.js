document.addEventListener("DOMContentLoaded", function () {
  // Load the footer dynamically and append it to the body
  $.get("header.html", function (data) {
    $("body").prepend(data);
    // Load the footer dynamically and prepend it to the body
    $.get("footer.html", function (data) {
      $("body").append(data);
    });
    //   this code is for making the navbar responsible
    const menuToggle = document.querySelector("nav .navSmall .menuToggle");
    function toggleMenu() {
      document.querySelector(".navSmall").classList.toggle("navActive");
      document.querySelector(".links").classList.toggle("active");
    }
    menuToggle.addEventListener("click", toggleMenu);
  });

  try {
    //   this is for the section to make it more responsible
    const secImgH = document.querySelector(".aboutPage .history .secImg");
    const secImgV = document.querySelector(".aboutPage .vision .secImg");
    const secImgC = document.querySelector(".aboutPage .customer .secImg");
    const vision = document.querySelector(".aboutPage .vision");
    const customer = document.querySelector(".aboutPage .customer");
    const products = document.querySelector(".aboutPage .products");

    secImgH.addEventListener("mouseover", function () {
      vision.classList.add("smScreen1");
      customer.classList.add("smScreen1");
      products.classList.add("smScreen1");
    });
    secImgH.addEventListener("mouseout", function () {
      vision.classList.remove("smScreen1");
      customer.classList.remove("smScreen1");
      products.classList.remove("smScreen1");
    });

    secImgV.addEventListener("mouseover", function () {
      customer.classList.add("smScreen1");
      products.classList.add("smScreen1");
    });
    secImgV.addEventListener("mouseout", function () {
      customer.classList.remove("smScreen1");
      products.classList.remove("smScreen1");
    });

    secImgC.addEventListener("mouseover", function () {
      products.classList.add("smScreen1");
    });
    secImgC.addEventListener("mouseout", function () {
      products.classList.remove("smScreen1");
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var speed = 9;
    var carElement = document.querySelector(".car");
    var slowButton = document.querySelector(".slow-btn");
    var fastButton = document.querySelector(".fast-btn");
    // Function for Slow button click event
    slowButton.addEventListener("click", function () {
      speed++;
      if (speed > 30) {
        // Limit the speed range
        speed = 10;
      }
      console.log(speed);
      carElement.style.animationDuration = speed + "s"; // Set slower animation
    });

    // Function for Fast button click event
    fastButton.addEventListener("click", function () {
      speed--;
      if (speed < 1) {
        // Limit the speed range
        speed = 1;
      }
      console.log(speed);
      carElement.style.animationDuration = speed + "s"; // Set faster animation
    });
  } catch (e) {
    console.log(e);
  }
  try {
    // Section click effect
    function handleSectionClick(sectionImg, sectionTxt) {
      var txtVisible = false;

      sectionImg.addEventListener("click", function () {
        if (!txtVisible) {
          sectionTxt.style.display = "flex";
          sectionImg.classList.add("sectionImgShake");
          txtVisible = true;
          if (sectionTxt == sectionTxt1) {
            document.querySelector(".options").classList.add("options1");
          }
        } else {
          sectionTxt.style.display = "none";
          txtVisible = false;
          sectionImg.classList.remove("sectionImgShake");
          if (sectionTxt == sectionTxt1) {
            document.querySelector(".options").classList.remove("options1");
          }
        }
      });
    }

    var sectionImg1 = document.querySelector(".sectionImg1");
    var sectionTxt1 = document.querySelector(".sectionTxt1");
    handleSectionClick(sectionImg1, sectionTxt1);

    var sectionImg2 = document.querySelector(".sectionImg2");
    var sectionTxt2 = document.querySelector(".sectionTxt2");
    handleSectionClick(sectionImg2, sectionTxt2);

    var sectionImg3 = document.querySelector(".sectionImg3");
    var sectionTxt3 = document.querySelector(".sectionTxt3");
    handleSectionClick(sectionImg3, sectionTxt3);
  } catch (e) {
    console.log(e);
  }
});
