import { htmlGenerator } from "./warmup";

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
  const dogLinks = [];
  const dogNames = Object.keys(dogs);
  
  dogNames.forEach(dogName => {
    const dogLink = document.createElement("a");
    dogLink.innerHTML = dogName;
    dogLink.href = dogs[dogName];

    const liTag = document.createElement("li");
    liTag.classList.add("dog-link");
    liTag.appendChild(dogLink);
    
    dogLinks.push(liTag);
  });
  // debugger
  return dogLinks;
};

const attachDogLinks = () => {
  const dogLinks = dogLinkCreator(dogs);
  const dropdownUl = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach(link => dropdownUl.appendChild(link));
};

attachDogLinks();

const handleEnter = () => {
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(link => link.classList.add("open"));
};

const handleLeave = () => {
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(link => link.classList.remove("open"));
};

const dropdown = document.querySelector(".drop-down-dog-nav");
// dropdown.addEventListener("mouseenter", handleEnter());
// dropdown.addEventListener("mouseleave", handleLeave());
dropdown.addEventListener("mouseenter", handleEnter);
dropdown.addEventListener("mouseleave", handleLeave);