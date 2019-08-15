document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  
  const form = document.getElementById("rest-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const userInputField = document.getElementById("favorite-input");
    const userInput = userInputField.value;
    userInputField.value = "";
  
    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = userInput;
    ul.appendChild(li);
  });
  
  
  // adding new photos

  // --- your code here!
  const butt = document.getElementById("photo-show-button");
  butt.addEventListener("click", (e) => {
    e.preventDefault();
    const photoContainer = document.getElementById("photo-form");
    if (photoContainer.classList.contains("hidden")) {
      photoContainer.classList.remove("hidden")
    } else {
      photoContainer.classList.add("hidden")
    }
  })
  const newPhoto = document.createElement

});
