// =========================
// FILE: script.js
// =========================


// Navbar
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


// Visitor Counter
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


// Reveal Animation
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


// Greetings
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


// Typing Effect
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


// Skills
const skills = [

  {
    name:"Python",
    icon:"fa-brands fa-python",

    description:
    "Python introduced me to programming logic, automation, backend development, and problem-solving concepts.",

    hours:"50+",
    level:"Beginner"
  },

  {
    name:"HTML",
    icon:"fa-brands fa-html5",

    description:
    "HTML taught me how to structure responsive and modern websites properly.",

    hours:"45+",
    level:"Beginner"
  },

  {
    name:"CSS",
    icon:"fa-brands fa-css3-alt",

    description:
    "CSS helped me understand layouts, animations, responsiveness, and modern UI design.",

    hours:"55+",
    level:"Beginner"
  },

  {
    name:"JavaScript",
    icon:"fa-brands fa-js",

    description:
    "JavaScript introduced me to website interactivity and DOM manipulation.",

    hours:"40+",
    level:"Beginner"
  },

  {
    name:"GitHub",
    icon:"fa-brands fa-github",

    description:
    "GitHub helped me understand repositories, version control, and collaboration.",

    hours:"45+",
    level:"Beginner"
  },

  {
    name:"SQL",
    icon:"fa-solid fa-database",

    description:
    "SQL introduced me to databases, queries, and data management concepts.",

    hours:"50+",
    level:"Beginner"
  },

  {
    name:"NetBeans",
    icon:"fa-solid fa-code-branch",

    description:
    "NetBeans helped me understand Java development and project management.",

    hours:"45+",
    level:"Beginner"
  },

  {
    name:"Eclipse",
    icon:"fa-solid fa-laptop",

    description:
    "Eclipse improved my understanding of Java programming workflows.",

    hours:"40+",
    level:"Beginner"
  }

];


// Skill Rotation
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