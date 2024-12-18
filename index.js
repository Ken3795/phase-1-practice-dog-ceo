document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imgContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    // Challenge 1: Fetch and render dog images
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "A cute dog";
          img.style.width = "200px";
          img.style.margin = "10px";
          imgContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch and render dog breeds
    let breeds = []; // To store breeds for filtering
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        breeds = Object.keys(data.message);
        renderBreeds(breeds);
      });
  
    // Function to render breeds
    function renderBreeds(breeds) {
      breedList.innerHTML = ""; // Clear existing list
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        li.style.cursor = "pointer";
  
        // Challenge 3: Change font color on click
        li.addEventListener("click", () => {
          li.style.color = "blue";
        });
  
        breedList.appendChild(li);
      });
    }
  
    // Challenge 4: Filter breeds by first letter
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = breeds.filter((breed) =>
        breed.startsWith(selectedLetter)
      );
      renderBreeds(filteredBreeds);
    });
  });
  