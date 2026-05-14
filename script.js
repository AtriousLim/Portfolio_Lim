// =========================
// FILE: script.js
// =========================


// =========================
// NAVBAR SCROLL
// =========================
const navbar =
document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }

  else{

    navbar.classList.remove("scrolled");

  }

});


// =========================
// DARK MODE
// =========================
const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});


// =========================
// VISITOR COUNTER
// =========================
let visits =
localStorage.getItem("portfolioVisits");

if(visits === null){
  visits = 0;
}

visits++;

localStorage.setItem(
"portfolioVisits",
visits
);

document.getElementById(
"visitorCount"
).textContent = visits;


// =========================
// REVEAL ANIMATION
// =========================
const reveals =
document.querySelectorAll(".reveal");

window.addEventListener(
"scroll",
revealSections
);

function revealSections(){

  reveals.forEach((element) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}


// =========================
// GREETING ANIMATION
// =========================
const greetings = [

  "Hello",
  "Kamusta",
  "こんにちは",
  "안녕하세요",
  "Bonjour",
  "Hola",
  "你好",
  "Ciao",
  "Hallo",
  "Привет",
  "مرحبا",
  "नमस्ते",
  "Selamat Datang",
  "Xin Chào",
  "Olá"

];

const greetingText =
document.getElementById("greetingText");

let greetIndex = 0;
let charIndex = 0;
let deleting = false;

function animateGreeting(){

  const currentText =
  greetings[greetIndex];

  if(!deleting){

    greetingText.textContent =
    currentText.substring(0, charIndex);

    charIndex++;

    if(charIndex > currentText.length){

      deleting = true;

      setTimeout(
      animateGreeting,
      1200
      );

      return;
    }

  }

  else{

    greetingText.textContent =
    currentText.substring(0, charIndex);

    charIndex--;

    if(charIndex < 0){

      deleting = false;

      greetIndex++;

      if(greetIndex >= greetings.length){

        greetIndex = 0;

      }

    }

  }

  setTimeout(
  animateGreeting,
  deleting ? 60 : 120
  );

}

animateGreeting();


// =========================
// TYPING EFFECT
// =========================
const typingText =
document.getElementById("typingText");

const text =
"Passionate Developer • UI/UX Enthusiast • Problem Solver • Future Software Engineer";

let index = 0;

function typeEffect(){

  if(index < text.length){

    typingText.innerHTML +=
    text.charAt(index);

    index++;

    setTimeout(
    typeEffect,
    30
    );

  }

}

typeEffect();


const skills = {

  python: {

    name: "Python",
    icon: "fa-brands fa-python",

    description:
    "Python helped me improve my logical thinking, backend development skills, automation knowledge, and problem-solving abilities.",

    hours: "300+",
    level: "Intermediate"

  },

  html: {

    name: "HTML",
    icon: "fa-brands fa-html5",

    description:
    "HTML taught me how to properly structure websites using semantic elements and responsive layouts.",

    hours: "220+",
    level: "Intermediate"

  },

  css: {

    name: "CSS",
    icon: "fa-brands fa-css3-alt",

    description:
    "CSS improved my understanding of layouts, animations, responsiveness, glassmorphism, and modern UI design.",

    hours: "250+",
    level: "Intermediate"

  },

  javascript: {

    name: "JavaScript",
    icon: "fa-brands fa-js",

    description:
    "JavaScript introduced me to interactivity, DOM manipulation, animations, and dynamic website functionality.",

    hours: "180+",
    level: "Beginner"

  },

  github: {

    name: "GitHub",
    icon: "fa-brands fa-github",

    description:
    "GitHub helped me understand version control, repositories, collaboration workflows, and deployment practices.",

    hours: "120+",
    level: "Beginner"

  },

  sql: {

    name: "SQL",
    icon: "fa-solid fa-database",

    description:
    "SQL introduced me to databases, transactions, queries, and data management concepts.",

    hours: "140+",
    level: "Beginner"

  },

  react: {

    name: "React",
    icon: "fa-brands fa-react",

    description:
    "React helped me understand reusable components, dynamic interfaces, state management, and modern frontend development.",

    hours: "90+",
    level: "Beginner"

  },

  xampp: {

    name: "XAMPP",
    icon: "fa-solid fa-server",

    description:
    "XAMPP introduced me to local web hosting, Apache configuration, PHP environments, and MySQL database management.",

    hours: "80+",
    level: "Beginner"

  },

  figma: {

    name: "Figma",
    icon: "fa-brands fa-figma",

    description:
    "Figma improved my UI/UX design workflow, wireframing, layout planning, and interface prototyping skills.",

    hours: "70+",
    level: "Beginner"

  },

  linux: {

    name: "Linux",
    icon: "fa-brands fa-linux",

    description:
    "Linux helped me understand terminal commands, shell scripting, server environments, and system navigation.",

    hours: "110+",
    level: "Beginner"

  }

};



// =========================
// SKILL ROTATION
// =========================
let currentSkill = 0;

function updateSkill(){

  const skill =
  skills[currentSkill];

  document.getElementById(
  "skillName"
  ).textContent = skill.name;

  document.getElementById(
  "skillDescription"
  ).textContent = skill.description;

  document.getElementById(
  "skillHours"
  ).textContent = skill.hours;

  document.getElementById(
  "skillLevel"
  ).textContent = skill.level;

  document.getElementById(
  "skillIcon"
  ).innerHTML =
  `<i class="${skill.icon}"></i>`;

  currentSkill++;

  if(currentSkill >= skills.length){

    currentSkill = 0;

  }

}

setInterval(updateSkill, 5000);