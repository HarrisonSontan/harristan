export const func = (root, initTheme, changeTheme) => {
  const $ = (s) => {
    let dom = root.querySelectorAll(s);
    return dom.length == 1 ? dom[0] : dom;
  };

  let mainButton = $(".main-button");
  let daytimeBackgrond = $(".daytime-backgrond");
  let cloud = $(".cloud");
  let cloudList = $(".cloud-son");
  let cloudLight = $(".cloud-light");
  let components = $(".components");
  let moon = $(".moon");
  let stars = $(".stars");
  let star = $(".star");
  let isMoved = false;
  let isClicked = false;

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    toggleThemeBasedOnSystem();
  });

  const toggleThemeBasedOnSystem = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      if (!isMoved) {
        components.onclick();
      }
    } else {
      if (isMoved) {
        components.onclick();
      }
    }
  };

  components.onclick = () => {
    if (isMoved) {
      mainButton.style.transform = "translateX(0)";
      mainButton.style.backgroundColor = "rgba(255, 195, 35,1)";
      mainButton.style.boxShadow =
        "2em 2em 3.33em rgba(0, 0, 0, 0.5), inset -2em -3.33em 2em -2em rgba(0, 0, 0, 0.5), inset 2.67em 3.33em 1.33em -1.33em rgba(255, 230, 80,1)";
      daytimeBackgrond[0].style.transform = "translateX(0)";
      daytimeBackgrond[1].style.transform = "translateX(0)";
      daytimeBackgrond[2].style.transform = "translateX(0)";
      cloud.style.transform = "translateY(6.67em)";
      cloudLight.style.transform = "translateY(6.67em)";
      components.style.backgroundColor = "rgba(70, 133, 192,1)";
      moon[0].style.opacity = "0";
      moon[1].style.opacity = "0";
      moon[2].style.opacity = "0";
      stars.style.transform = "translateY(-83.33em)";
      stars.style.opacity = "0";
      document.body.setAttribute("data-theme", "light");
      changeTheme("light");
    } else {
      mainButton.style.transform = "translateX(73.33em)";
      mainButton.style.backgroundColor = "rgba(195, 200,210,1)";
      mainButton.style.boxShadow =
        "2em 2em 3.33em rgba(0, 0, 0, 0.5), inset -2em -3.33em 2em -2em rgba(0, 0, 0, 0.5), inset 2.67em 3.33em 1.33em -1.33em rgba(255, 255, 210,1)";
      daytimeBackgrond[0].style.transform = "translateX(73.33em)";
      daytimeBackgrond[1].style.transform = "translateX(53.33em)";
      daytimeBackgrond[2].style.transform = "translateX(33.33em)";
      cloud.style.transform = "translateY(53.33em)";
      cloudLight.style.transform = "translateY(53.33em)";
      components.style.backgroundColor = "rgba(25,30,50,1)";
      moon[0].style.opacity = "1";
      moon[1].style.opacity = "1";
      moon[2].style.opacity = "1";
      stars.style.transform = "translateY(-41.67em)";
      stars.style.opacity = "1";
      document.body.setAttribute("data-theme", "dark");
      changeTheme("dark");
    }

    isClicked = true;

    setTimeout(function () {
      isClicked = false;
    }, 500);
    isMoved = !isMoved;
  };

  mainButton.addEventListener("mousemove", function () {
    if (isClicked) return;

    if (isMoved) {
      mainButton.style.transform = "translateX(66.67em)";
      daytimeBackgrond[0].style.transform = "translateX(66.67em)";
      daytimeBackgrond[1].style.transform = "translateX(48.67em)";
      daytimeBackgrond[2].style.transform = "translateX(30.67em)";
      star[0].style.top = "7.33em";
      star[0].style.left = "24em";
      star[1].style.top = "26.67em";
      star[1].style.left = "60.67em";
      star[2].style.top = "17.33em";
      star[2].style.left = "12.67em";
      star[3].style.top = "25.33em";
      star[3].style.left = "42em";
      star[4].style.top = "14em";
      star[4].style.left = "48em";
      star[5].style.top = "34.33em";
      star[5].style.left = "23.33em";
    } else {
      mainButton.style.transform = "translateX(6.67em)";
      daytimeBackgrond[0].style.transform = "translateX(6.67em)";
      daytimeBackgrond[1].style.transform = "translateX(4.67em)";
      daytimeBackgrond[2].style.transform = "translateX(2.67em)";
      cloudList[0].style.right = "-16em";
      cloudList[0].style.bottom = "6.67em";
      cloudList[1].style.right = "-8em";
      cloudList[1].style.bottom = "-16.67em";
      cloudList[2].style.right = "13.33em";
      cloudList[2].style.bottom = "-28.67em";
      cloudList[3].style.right = "33.33em";
      cloudList[3].style.bottom = "-26.67em";
      cloudList[4].style.right = "50em";
      cloudList[4].style.bottom = "-40em";
      cloudList[5].style.right = "73.33em";
      cloudList[5].style.bottom = "-36.67em";
      cloudList[6].style.right = "-15.33em";
      cloudList[6].style.bottom = "6.67em";
      cloudList[7].style.right = "-7.33em";
      cloudList[7].style.bottom = "-16.67em";
      cloudList[8].style.right = "12em";
      cloudList[8].style.bottom = "-28em";
      cloudList[9].style.right = "33.33em";
      cloudList[9].style.bottom = "-25.33em";
      cloudList[10].style.right = "50em";
      cloudList[10].style.bottom = "-40em";
      cloudList[11].style.right = "73.33em";
      cloudList[11].style.bottom = "-36.67em";
    }
  });

  mainButton.addEventListener("mouseout", function () {
    if (isClicked) return;
    if (isMoved) {
      mainButton.style.transform = "translateX(73.33em)";
      daytimeBackgrond[0].style.transform = "translateX(73.33em)";
      daytimeBackgrond[1].style.transform = "translateX(53.33em)";
      daytimeBackgrond[2].style.transform = "translateX(33.33em)";
      star[0].style.top = "7.33em";
      star[0].style.left = "26em";
      star[1].style.top = "26em";
      star[1].style.left = "60.67em";
      star[2].style.top = "17.33em";
      star[2].style.left = "12.67em";
      star[3].style.top = "25.33em";
      star[3].style.left = "44em";
      star[4].style.top = "14em";
      star[4].style.left = "48em";
      star[5].style.top = "34em";
      star[5].style.left = "25.33em";
    } else {
      mainButton.style.transform = "translateX(0)";
      daytimeBackgrond[0].style.transform = "translateX(0)";
      daytimeBackgrond[1].style.transform = "translateX(0)";
      daytimeBackgrond[2].style.transform = "translateX(0)";
      cloudList[0].style.right = "-13.33em";
      cloudList[0].style.bottom = "6.67em";
      cloudList[1].style.right = "-6.67em";
      cloudList[1].style.bottom = "-16.67em";
      cloudList[2].style.right = "13.33em";
      cloudList[2].style.bottom = "-26.67em";
      cloudList[3].style.right = "33.33em";
      cloudList[3].style.bottom = "-23.33em";
      cloudList[4].style.right = "50em";
      cloudList[4].style.bottom = "-40em";
      cloudList[5].style.right = "73.33em";
      cloudList[5].style.bottom = "-33.33em";
      cloudList[6].style.right = "-13.33em";
      cloudList[6].style.bottom = "6.67em";
      cloudList[7].style.right = "-6.67em";
      cloudList[7].style.bottom = "-16.67em";
      cloudList[8].style.right = "13.33em";
      cloudList[8].style.bottom = "-26.67em";
      cloudList[9].style.right = "33.33em";
      cloudList[9].style.bottom = "-23.33em";
      cloudList[10].style.right = "50em";
      cloudList[10].style.bottom = "-40em";
      cloudList[11].style.right = "73.33em";
      cloudList[11].style.bottom = "-33.33em";
    }
  });

  const getRandomDirection = () => {
    const directions = ["1.33em", "-1.33em"];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  const moveElementRandomly = (element) => {
    const randomDirectionX = getRandomDirection();
    const randomDirectionY = getRandomDirection();
    element.style.transform = `translate(${randomDirectionX}, ${randomDirectionY})`;
  };

  const cloudSons = root.querySelectorAll(".cloud-son");
  setInterval(() => {
    cloudSons.forEach(moveElementRandomly);
  }, 1000);

  if (initTheme === "dark") {
    components.onclick();
  }
};
