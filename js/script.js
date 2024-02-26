const toggle = document.querySelector(".menu-toggle");
const topBar = toggle.querySelector(".top");
const bottom = toggle.querySelector(".bottom");
const nav = document.querySelector(".nav-links");

const links = document.querySelectorAll(".header-nav .nav-links li a");

console.log(links);
toggle.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
  topBar.classList.toggle("transform-top");
  bottom.classList.toggle("transform-bottom");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active-nav");
    topBar.classList.remove("transform-top");
    bottom.classList.remove("transform-bottom");
  });
});

//plan section js starts

const plans = document.querySelectorAll(".select");

const planImage = document.querySelector(".plan-content");

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    const dataImage = plan.dataset["plan"];
    console.log(dataImage);

    plans.forEach((plan) => {
      plan.classList.remove("isactive");
    });
    plan.classList.add("isactive");

    const image = planImage.querySelectorAll(`.${dataImage}`);

    const allImages = planImage.querySelectorAll(".image");

    console.log(allImages);

    allImages.forEach((img) => {
      img.classList.remove("active-plan");
    });

    image.forEach((img) => {
      img.classList.add("active-plan");
    });
  });
});

//accordian section starts

const accordians = document.querySelectorAll(".specs-accordian");

accordians.forEach((accordian) => {
  const title = accordian.querySelector(".acc-title");
  const content = accordian.querySelector(".acc-content");

  title.addEventListener("click", () => {
    const dataAcc = content.dataset["acc"];
    console.log(dataAcc);

    const accordian = document.querySelectorAll(`.${dataAcc}`);
    console.log(accordian);

    const accordians = document.querySelectorAll(".specs-accordian");

    accordians.forEach((accordian) => {
      accordian.classList.remove("isopen");
    });

    accordian.forEach((acc) => {
      acc.classList.add("isopen");
    });
  });
});
