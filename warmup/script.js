// START
const startBtn = document.getElementById("start1");
const part1Id = document.getElementById("part1");
const part2Id = document.getElementById("part2");
const part2_2Id = document.getElementById("part2-2");
const part3Id = document.getElementById("part3");
const part3_2Id = document.getElementById("part3-2");
const part4Id = document.getElementById("part4");
const part4_2Id = document.getElementById("part4-2");
const part5Id = document.getElementById("part5");
const part6Id = document.getElementById("part6");
const part7Id = document.getElementById("part7");
const part8Id = document.getElementById("part8");
const part9Id = document.getElementById("part9");

let dur15 = 15000;

startBtn.addEventListener("click", () => {
  part1Id.classList.replace("enabled", "disabled");
  part2Id.classList.replace("disabled", "enabled");
});

// ZIG ZAG EYE TRAIN 1
const path = document.getElementById("zigzagPath");
const ball = document.getElementById("ball");
const timerDisplay = document.getElementById("timer1");
const startBtn1 = document.getElementById("startBtn1");
const nextBtn1 = document.getElementById("nextBtn1");

const pathLength = path.getTotalLength();
const cycleDuration = dur15; // 15s
const totalCycles = 1;
const totalDuration = cycleDuration * totalCycles;

function startAnimation() {
  let startTime = null;
  let timeLeft1 = totalDuration / 1000;

  timerDisplay.textContent = timeLeft1;

  function animateBall(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const cycleElapsed = elapsed % cycleDuration;
    const progress = Math.min(cycleElapsed / cycleDuration, 1);
    const point = path.getPointAtLength(progress * pathLength);

    ball.setAttribute("cx", point.x);
    ball.setAttribute("cy", point.y);

    if (elapsed < totalDuration) {
      requestAnimationFrame(animateBall);
    } else {
      ball.setAttribute("cx", path.getPointAtLength(pathLength).x);
      ball.setAttribute("cy", path.getPointAtLength(pathLength).y);
      timerDisplay.textContent = "0";
    }
  }

  const countdownInterval = setInterval(() => {
    timeLeft1--;
    if (timeLeft1 >= 0) {
      timerDisplay.textContent = timeLeft1;
    }

    if (timeLeft1 <= 0) {
      clearInterval(countdownInterval);
      nextBtn1.classList.replace("disabled", "enabled");
    }
  }, 1000);

  requestAnimationFrame(animateBall);
}

startBtn1.addEventListener("click", () => {
  startBtn1.classList.replace("enabled", "disabled");
  startAnimation();
});

nextBtn1.addEventListener("click", () => {
  part2Id.classList.replace("enabled", "disabled");
  part2_2Id.classList.replace("disabled", "enabled");
});

// ZIG ZAG EYE TRAIN 1-2
const path_2 = document.getElementById("zigzagPath-2");
const ball_2 = document.getElementById("ball-2");
const timerDisplay_2 = document.getElementById("timer1-2");
const startBtn1_2 = document.getElementById("startBtn1-2");
const nextBtn1_2 = document.getElementById("nextBtn1-2");

const pathLength_2 = path_2.getTotalLength();
const cycleDuration_2 = dur15; // 15s
const totalCycles_2 = 1;
const totalDuration_2 = cycleDuration_2 * totalCycles_2;

function startAnimation_2() {
  let startTime_2 = null;
  let timeLeft1_2 = totalDuration_2 / 1000;

  timerDisplay_2.textContent = timeLeft1_2;

  function animateBall_2(timestamp_2) {
    if (!startTime_2) startTime_2 = timestamp_2;
    const elapsed_2 = timestamp_2 - startTime_2;

    const cycleElapsed_2 = elapsed_2 % cycleDuration_2;
    const progress_2 = Math.min(cycleElapsed_2 / cycleDuration_2, 1);
    const point_2 = path_2.getPointAtLength(progress_2 * pathLength_2);

    ball_2.setAttribute("cx", point_2.x);
    ball_2.setAttribute("cy", point_2.y);

    if (elapsed_2 < totalDuration_2) {
      requestAnimationFrame(animateBall_2);
    } else {
      ball_2.setAttribute("cx", path_2.getPointAtLength(pathLength_2).x);
      ball_2.setAttribute("cy", path_2.getPointAtLength(pathLength_2).y);
      timerDisplay_2.textContent = "0";
    }
  }

  const countdownInterval_2 = setInterval(() => {
    timeLeft1_2--;
    if (timeLeft1_2 >= 0) {
      timerDisplay_2.textContent = timeLeft1_2;
    }

    if (timeLeft1_2 <= 0) {
      clearInterval(countdownInterval_2);
      nextBtn1_2.classList.replace("disabled", "enabled");
    }
  }, 1000);

  requestAnimationFrame(animateBall_2);
}

startBtn1_2.addEventListener("click", () => {
  startBtn1_2.classList.replace("enabled", "disabled");
  startAnimation_2();
});

nextBtn1_2.addEventListener("click", () => {
  part2_2Id.classList.replace("enabled", "disabled");
  part3Id.classList.replace("disabled", "enabled");
});

// ZIG ZAG EYE TRAIN 2
const path2 = document.getElementById("zigzagPath2");
const ball2 = document.getElementById("ball2");
const timerDisplay2 = document.getElementById("timer2");
const startBtn2 = document.getElementById("startBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

const pathLength2 = path2.getTotalLength();
const cycleDuration2 = dur15; // 15s
const totalCycles2 = 1;
const totalDuration2 = cycleDuration2 * totalCycles2;

function startAnimation2() {
  let startTime2 = null;
  let timeLeft2 = totalDuration2 / 1000;

  timerDisplay2.textContent = timeLeft2;

  function animateBall2(timestamp2) {
    if (!startTime2) startTime2 = timestamp2;
    const elapsed2 = timestamp2 - startTime2;

    const cycleElapsed2 = elapsed2 % cycleDuration2;
    const progress2 = Math.min(cycleElapsed2 / cycleDuration2, 1);
    const point2 = path2.getPointAtLength(progress2 * pathLength2);

    ball2.setAttribute("cx", point2.x);
    ball2.setAttribute("cy", point2.y);

    if (elapsed2 < totalDuration2) {
      requestAnimationFrame(animateBall2);
    } else {
      ball2.setAttribute("cx", path2.getPointAtLength(pathLength2).x);
      ball2.setAttribute("cy", path2.getPointAtLength(pathLength2).y);
      timerDisplay2.textContent = "0";
    }
  }

  const countdownInterval2 = setInterval(() => {
    timeLeft2--;
    if (timeLeft2 >= 0) {
      timerDisplay2.textContent = timeLeft2;
    }

    if (timeLeft2 <= 0) {
      clearInterval(countdownInterval2);
      nextBtn2.classList.replace("disabled", "enabled");
    }
  }, 1000);

  requestAnimationFrame(animateBall2);
}

startBtn2.addEventListener("click", () => {
  startBtn2.classList.replace("enabled", "disabled");
  startAnimation2();
});

nextBtn2.addEventListener("click", () => {
  part3Id.classList.replace("enabled", "disabled");
  part3_2Id.classList.replace("disabled", "enabled");
});

// ZIG ZAG EYE TRAIN 2-2
const path2_2 = document.getElementById("zigzagPath2-2");
const ball2_2 = document.getElementById("ball2-2");
const timerDisplay2_2 = document.getElementById("timer2-2");
const startBtn2_2 = document.getElementById("startBtn2-2");
const nextBtn2_2 = document.getElementById("nextBtn2-2");

const pathLength2_2 = path2_2.getTotalLength();
const cycleDuration2_2 = dur15; // 15s
const totalCycles2_2 = 1;
const totalDuration2_2 = cycleDuration2_2 * totalCycles2_2;

function startAnimation2_2() {
  let startTime2_2 = null;
  let timeLeft2_2 = totalDuration2_2 / 1000;

  timerDisplay2_2.textContent = timeLeft2_2;

  function animateBall2_2(timestamp2_2) {
    if (!startTime2_2) startTime2_2 = timestamp2_2;
    const elapsed2_2 = timestamp2_2 - startTime2_2;

    const cycleElapsed2_2 = elapsed2_2 % cycleDuration2_2;
    const progress2_2 = Math.min(cycleElapsed2_2 / cycleDuration2_2, 1);
    const point2_2 = path2_2.getPointAtLength(progress2_2 * pathLength2_2);

    ball2_2.setAttribute("cx", point2_2.x);
    ball2_2.setAttribute("cy", point2_2.y);

    if (elapsed2_2 < totalDuration2_2) {
      requestAnimationFrame(animateBall2_2);
    } else {
      ball2_2.setAttribute("cx", path2_2.getPointAtLength(pathLength2_2).x);
      ball2_2.setAttribute("cy", path2_2.getPointAtLength(pathLength2_2).y);
      timerDisplay2_2.textContent = "0";
    }
  }

  const countdownInterval2_2 = setInterval(() => {
    timeLeft2_2--;
    if (timeLeft2_2 >= 0) {
      timerDisplay2_2.textContent = timeLeft2_2;
    }

    if (timeLeft2_2 <= 0) {
      clearInterval(countdownInterval2_2);
      nextBtn2_2.classList.replace("disabled", "enabled");
    }
  }, 1000);

  requestAnimationFrame(animateBall2_2);
}

startBtn2_2.addEventListener("click", () => {
  startBtn2_2.classList.replace("enabled", "disabled");
  startAnimation2_2();
});

nextBtn2_2.addEventListener("click", () => {
  part3_2Id.classList.replace("enabled", "disabled");
  part4Id.classList.replace("disabled", "enabled");
});

// ZIG ZAG EYE TRAIN 3
const timerDisplay3 = document.getElementById("timer3");
const startBtn3 = document.getElementById("startBtn3");
const nextBtn3 = document.getElementById("nextBtn3");
const balls = document.querySelectorAll(".ball2");
const activeColor = "#f3335d";
const defaultColor = "#294ef1";

let indexBall = 0;
let timeLeft3 = 12;
timerDisplay3.textContent = timeLeft3;

balls.forEach((ball) => {
  ball.setAttribute("fill", defaultColor);
});

function startAnimation3() {
  function animateBalls1() {
    if (indexBall > 0) {
      balls[indexBall - 1].setAttribute("fill", defaultColor); //reset previous
    }

    if (indexBall < balls.length) {
      balls[indexBall].setAttribute("fill", activeColor);
      indexBall++;
      setTimeout(animateBalls1, 1200);
      console.log(indexBall);
    } else {
      // reset ball when done
      balls[balls.length - 1].setAttribute("fill", defaultColor);
      indexBall = 0;
    }
  }

  const countdownInterval3 = setInterval(() => {
    timeLeft3--;
    if (timeLeft3 >= 0) {
      timerDisplay3.textContent = timeLeft3;
    }

    if (timeLeft3 <= 0) {
      clearInterval(countdownInterval3);
      nextBtn3.classList.replace("disabled", "enabled");
    }
  }, 1000);

  animateBalls1();
}

startBtn3.addEventListener("click", () => {
  startBtn3.classList.replace("enabled", "disabled");
  startAnimation3();
});

nextBtn3.addEventListener("click", () => {
  part4Id.classList.replace("enabled", "disabled");
  part4_2Id.classList.replace("disabled", "enabled");
});

// ZIG ZAG EYE TRAIN 3-2
const timerDisplay3_2 = document.getElementById("timer3-2");
const startBtn3_2 = document.getElementById("startBtn3-2");
const nextBtn3_2 = document.getElementById("nextBtn3-2");
const balls2 = document.querySelectorAll(".ball2-2");
const activeColor2 = "#f3335d";
const defaultColor2 = "#294ef1";

let indexBall2 = 0;
let timeLeft3_2 = 12;
timerDisplay3_2.textContent = timeLeft3_2;

balls2.forEach((ball2) => {
  ball2.setAttribute("fill", defaultColor2);
});

function startAnimation3_2() {
  function animateBalls2() {
    if (indexBall2 > 0) {
      balls2[indexBall2 - 1].setAttribute("fill", defaultColor2); //reset previous
    }

    if (indexBall2 < balls2.length) {
      balls2[indexBall2].setAttribute("fill", activeColor2);
      indexBall2++;
      setTimeout(animateBalls2, 1200);
    } else {
      // reset ball when done
      balls2[balls2.length - 1].setAttribute("fill", defaultColor2);
      indexBall2 = 0;
    }
  }

  const countdownInterval3_2 = setInterval(() => {
    timeLeft3_2--;
    if (timeLeft3_2 >= 0) {
      timerDisplay3_2.textContent = timeLeft3_2;
    }

    if (timeLeft3_2 <= 0) {
      clearInterval(countdownInterval3_2);
      nextBtn3_2.classList.replace("disabled", "enabled");
    }
  }, 1000);

  animateBalls2();
}

startBtn3_2.addEventListener("click", () => {
  startBtn3_2.classList.replace("enabled", "disabled");
  startAnimation3_2();
});

nextBtn3_2.addEventListener("click", () => {
  part4_2Id.classList.replace("enabled", "disabled");
  part5Id.classList.replace("disabled", "enabled");
});

// FOLLOW CIRCLE
const startBtn4 = document.getElementById("startBtn4");
const nextBtn4 = document.getElementById("nextBtn4");
const timerDisplay4 = document.getElementById("timer4");
const circle = document.getElementById("circle");

let timeLeft4 = 30;
timerDisplay4.textContent = timeLeft4;

let pos = { x: 100, y: 100 };
let target = { x: 300, y: 300 };
let speed = 3; //px/s
let animationId = null;
let timerInterval = null;

function getRandomTarget() {
  const maxX = part5Id.clientWidth - circle.offsetWidth;
  const maxY = part5Id.clientHeight - circle.offsetHeight;
  return {
    x: Math.random() * maxX,
    y: Math.random() * maxY,
  };
}

function getRandomSpeed() {
  return (3 + Math.random() * 3).toFixed(2);
}

function updatePosition() {
  const dx = target.x - pos.x;
  const dy = target.y - pos.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < speed) {
    pos.x = target.x;
    pos.y = target.y;
    target = getRandomTarget();
    speed = getRandomSpeed();
  } else {
    pos.x += (dx / dist) * speed;
    pos.y += (dy / dist) * speed;
  }

  circle.style.left = `${pos.x}px`;
  circle.style.top = `${pos.y}px`;

  animationId = requestAnimationFrame(updatePosition);
  console.log(speed);
}

function startTimer(seconds) {
  let timeLeft4 = seconds;
  timerDisplay4.textContent = timeLeft4;

  timerInterval = setInterval(() => {
    timeLeft4--;
    timerDisplay4.textContent = timeLeft4;

    if (timeLeft4 <= 0) {
      clearInterval(timerInterval);
      cancelAnimationFrame(animationId);
      nextBtn4.classList.replace("disabled", "enabled");
    }
  }, 1000);
}

startBtn4.addEventListener("click", () => {
  startBtn4.classList.replace("enabled", "disabled");
  pos = getRandomTarget(); // start from random spot
  target = getRandomTarget();
  speed = getRandomSpeed();
  updatePosition();
  startTimer(30);
});

nextBtn4.addEventListener("click", () => {
  part5Id.classList.replace("enabled", "disabled");
  part6Id.classList.replace("disabled", "enabled");
});

// CIRCLE EYE TRAIN
const startBtn5 = document.getElementById("startBtn5");
const nextBtn5 = document.getElementById("nextBtn5");
const timerDisplay5 = document.getElementById("timer5");
const container = document.getElementById("bigassCircle");
const dotCount = 12;
const radius = 250;
const interval = 150;
const runDuration = 60000;

let timeLeft5 = runDuration / 1000;
timerDisplay5.textContent = timeLeft5;
let dots = [];

for (let i = 0; i < dotCount; i++) {
  const angle = ((2 * Math.PI) / dotCount) * i;
  const x = radius * Math.cos(angle) + 275 - 28; // centerX - radius + offset
  const y = radius * Math.sin(angle) + 275 - 28; // centerY - radius + offset

  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  container.appendChild(dot);
  dots.push(dot);
}

let indexC = 0;
let animationInterval = null;
let timeoutHandle = null;

function startCycle() {
  function circleAnimation() {
    animationInterval = setInterval(() => {
      const prev = (indexC - 1 + dotCount) % dotCount;
      dots[prev].style.opacity = 1;

      dots[indexC].style.opacity = 0;

      indexC = (indexC + 1) % dotCount;
    }, interval);

    timeoutHandle = setTimeout(() => {
      clearInterval(animationInterval);
      dots.forEach((dot) => (dot.style.opacity = 1));
    }, runDuration);
  }

  const countdownInterval5 = setInterval(() => {
    timeLeft5--;
    if (timeLeft5 >= 0) {
      timerDisplay5.textContent = timeLeft5;
    }

    if (timeLeft5 <= 0) {
      clearInterval(countdownInterval5);
      nextBtn5.classList.replace("disabled", "enabled");
    }
  }, 1000);

  circleAnimation();
}

startBtn5.addEventListener("click", () => {
  startBtn5.classList.replace("enabled", "disabled");
  startCycle();
});

nextBtn5.addEventListener("click", () => {
  part6Id.classList.replace("enabled", "disabled");
  part7Id.classList.replace("disabled", "enabled");
});

// BREATHE IN OUT
const startBtn6 = document.getElementById("startBtn6");
const nextBtn6 = document.getElementById("nextBtn6");
const timerDisplay6 = document.getElementById("timer6");

function startTimer1(seconds) {
  let timeLeft6 = seconds;
  timerDisplay6.textContent = timeLeft6;

  timerInterval1 = setInterval(() => {
    timeLeft6--;
    timerDisplay6.textContent = timeLeft6;

    if (timeLeft6 <= 0) {
      nextBtn6.classList.replace("disabled", "enabled");
      clearInterval(timerInterval1);
    }
  }, 1000);
}

startBtn6.addEventListener("click", () => {
  startBtn6.classList.replace("enabled", "disabled");
  startTimer1(15);
});

nextBtn6.addEventListener("click", () => {
  part7Id.classList.replace("enabled", "disabled");
  part8Id.classList.replace("disabled", "enabled");
});

// HOLD BREATH
const startBtn7 = document.getElementById("startBtn7");
const nextBtn7 = document.getElementById("nextBtn7");
const timerDisplay7 = document.getElementById("timer7");

function startTimer2(seconds) {
  let timeLeft7 = seconds;
  timerDisplay7.textContent = 10;

  timerInterval2 = setInterval(() => {
    timeLeft7--;
    timerDisplay7.textContent = timeLeft7;

    if (timeLeft7 <= 0) {
      nextBtn7.classList.replace("disabled", "enabled");
      clearInterval(timerInterval2);
    }
  }, 1000);
}

startBtn7.addEventListener("click", () => {
  startBtn7.classList.replace("enabled", "disabled");
  startTimer2(10);
});

nextBtn7.addEventListener("click", () => {
  part8Id.classList.replace("enabled", "disabled");
  part9Id.classList.replace("disabled", "enabled");
});

// HOLD BREATH
const startBtn8 = document.getElementById("startBtn8");
const nextBtn8 = document.getElementById("nextBtn8");
const timerDisplay8 = document.getElementById("timer8");

function startTimer3(seconds) {
  let timeLeft8 = seconds;
  timerDisplay8.textContent = 30;

  timerInterval3 = setInterval(() => {
    timeLeft8--;
    timerDisplay8.textContent = timeLeft8;

    if (timeLeft8 <= 0) {
      nextBtn8.classList.replace("disabled", "enabled");
      clearInterval(timerInterval3);
    }
  }, 1000);
}

startBtn8.addEventListener("click", () => {
  startBtn8.classList.replace("enabled", "disabled");
  startTimer3(30);
});
