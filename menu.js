const hamburger = document.querySelector(".mobile");
const mobilemenu = document.querySelector(".mobilemenu");

const bar = document.querySelector(".bar");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobilemenu.classList.toggle("active");
  bar.style.color = "#fff";
});
document.querySelectorAll(".menuitem").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobilemenu.classList.remove("active");
  })
);

function createDiv() {
  const div = document.createElement("div");
  return div;
}

const projects = [
  {
    id: 1,
    mobileImage: "Images/mobileprojects/project1Img.svg",
    desktopImage: "Images/desktop/image1.svg",
    title: "Tonic",
    Specs: ["Canopy", "Back EndDev", "2015"],
    statement:
      "A daily selection of privately personalised reads; no accounts or sign-ups required",
    languages: ["HTML", "CSS", "javaScript"],
    linkToLiveVersion: "https://mj-e-boc.github.io/",
    SpecsImg: "./Images/icons/CounterDot.svg",
    linkToSource: "#",
  },

  {
    id: 2,
    mobileImage: "Images/mobileprojects/project2Img.svg",
    desktopImage: "Images/desktop/image2.svg",
    title: "Multi-Post",
    Specs: ["Canopy", "Back EndDev", "2015"],
    statement:
      "A daily selection of privately personalised reads; no accounts or sign-ups required",
    languages: ["HTML", "CSS", "javaScript"],
    linkToLiveVersion: "https://mj-e-boc.github.io/",
    SpecsImg: "./Images/icons/CounterDot.svg",
    linkToSource: "#",
  },

  {
    id: 3,
    mobileImage: "Images/mobileprojects/project3Img.svg",
    desktopImage: "Images/desktop/image3.svg",
    title: "Tonic",
    Specs: ["Canopy", "Back EndDev", "2015"],
    statement:
      "A daily selection of privately personalised reads; no accounts or sign-ups required",
    languages: ["HTML", "CSS", "javaScript"],
    linkToLiveVersion: "#",
    SpecsImg: "Images/icons/CounterDot.svg",
    linkToSource: "#",
  },

  {
    id: 4,
    mobileImage: "Images/mobileprojects/project4Img.svg",
    desktopImage: "Images/desktop/image4.svg",
    title: "Tonic",
    Specs: ["Canopy", "Back EndDev", "2015"],
    statement:
      "A daily selection of privately personalised reads; no accounts or sign-ups required",
    languages: ["HTML", "CSS", "javaScript"],
    linkToLiveVersion: "https://mj-e-boc.github.io/",
    SpecsImg: "./Images/icons/CounterDot.svg",
    linkToSource: "#",
  },
];

// const modalDiv = createDiv();
// modalDiv.className = "modal";
// modalDiv.innerHTML = projects.map((item) => {
//   const {
//     mobileImage,
//     desktopImag,
//     title,
//     Specs,
//     statement,
//     languages,
//     linkToLiveVersion,
//     SpecsImg,
//     linkToSource,
//   } = item;

//   const [html, css, js] = languages;

//   return `<div class="project1">
//           <div class="projImg">
//             <img class="mobileimg" src=${mobileImage} alt="project1img" />
//             <img class="desktop1img" src=${desktopImag} alt="desktop1image">
//           </div>
//           <div class="proj1text">

//             <h3>${title}</h3>
//             <ul class="a">
//               <li>CANOPY</li>
//               <li>
//                 <img src="./Images/icons/CounterDot.svg" alt="counterimg" />
//               </li>
//               <li>Back EndDev</li>
//               <li>
//                 <img src="./Images/icons/CounterDot.svg" alt="counterimg" />
//               </li>
//               <li>2015</li>
//             </ul>
//             <p>
//                 A daily selection of privately personalized reads; no accounts or sign-ups required.
//             </p>
//             <ul class="b">
//                 <li>${html}</li>
//                 <li>${css}</li>
//                 <li>${js}</li>
//             </ul>
//             <button data-modal-target='modal1'type="button">
//                 See project
//             </button>

//           </div>

//         </div>`;
// });

// const cont = document.querySelector(".projectsContainer");

// cont.appendChild(modalDiv);
