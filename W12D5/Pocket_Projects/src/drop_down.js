
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogLis = [];
  Object.keys(dogs).forEach(dog => {
    let aTag = document.createElement("a")
    aTag.innerHTML = dog;
    aTag.setAttribute("href", dogs[dog]);
    let newLi = document.createElement("li");
    newLi.classList.add("dog-link");
    newLi.classList.add("hidden")
    newLi.appendChild(aTag);
    dogLis.push(newLi);
  })
  return dogLis;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");
  // ul.classList.add("hidden")
  dogLinks.forEach(dog => {
    ul.appendChild(dog);
  
  })
}



function handleEnter() {
  let links = document.querySelectorAll(".dog-link");
  links.forEach(link => {
    link.classList.remove("hidden")
   
  })
  // let ul = document.querySelector("drop-down-dog-list");
  // ul.classList.remove("hidden")
} 

function handleLeave() {
  let links = document.querySelectorAll(".dog-link");
  links.forEach(link => {
    link.classList.add("hidden")

  })
  // let ul = document.querySelector("drop-down-dog-list");
  // ul.classList.add("hidden")
}

attachDogLinks();

let nav = document.querySelector(".drop-down-dog-nav");
nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave);

