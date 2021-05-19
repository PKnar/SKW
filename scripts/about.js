function switchAnswer() {
  let switchNum = arguments[0];
  let answerClass = "answer" + switchNum;
  let changerIconId = "answerswitch" + switchNum;
  let answerWrapClass = "answerwrapper" + switchNum;
  let questionWrapClass = "questionwrapper" + switchNum;

  let answerWrap = document.getElementsByClassName(answerWrapClass)[0];
  let questionWrap = document.getElementsByClassName(questionWrapClass)[0];
  let answer = document.getElementsByClassName(answerClass)[0];
  let changerIcon = document.getElementById(changerIconId);
  if (answer.style.display == "block") {
    answer.animate(
      [{ transform: "translateY(0px)" }, { transform: "translateY(-10px)" }],
      { duration: 500 }
    );
    setTimeout(function () {
      answer.style.display = "none";
    }, 500);
    changerIcon.animate([{ transform: "rotate(-90deg)" }], { duration: 500 });
    setTimeout(function () {
      changerIcon.src = "./about-page/about-us/icons/polygon-1.png";
      changerIcon.style.height = "2vh";
    }, 500);
    setTimeout(function () {
      questionWrap.style.borderBottom = "2px solid black";
    }, 500);
    setTimeout(function () {
      answerWrap.style.borderBottom = "none";
    }, 500);
  } else {
    answer.style.display = "block";
    answer.animate(
      [{ transform: "translateY(-10px)" }, { transform: "translateY(0px)" }],
      { duration: 500 }
    );
    changerIcon.animate([{ transform: "rotate(90deg)" }], { duration: 500 });
    setTimeout(function () {
      changerIcon.src = "./about-page/about-us/icons/polygon-2.png";
      changerIcon.style.height = "1.1vh";
    }, 499);
    answerWrap.style.borderBottom = "1px solid black";
    questionWrap.style.borderBottom = "none";
  }
}

function openPhoneMenu() {
  let menu = document.getElementById("phonemenuopen");
  menu.style.display = "block";
  menu.animate(
    [
      { transform: "translateX(" + window.innerWidth + "px)" },
      { transform: "translateX(3%)" },
    ],
    { duration: 750 }
  );
}

function closePhoneMenu() {
  let menu = document.getElementById("phonemenuopen");
  menu.animate(
    [
      { transform: "translateX(0px)" },
      { transform: "translateX(" + window.innerWidth + "px)" },
    ],
    { duration: 750 }
  );
  setTimeout(function () {
    menu.style.display = "none";
  }, 750);
}
