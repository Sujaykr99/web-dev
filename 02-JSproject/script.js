const searchinput = document.querySelector("#searchinput");
const searchbtn = document.querySelector("#searchbutton");
const cards = document.querySelector("#cards");

searchbtn.addEventListener("click", function () {
  let movie = searchinput.value;

  cards.innerHTML = "";

  console.log(`https://api.tvmaze.com/search/shows?q=${movie}`);
  fetch(`https://api.tvmaze.com/search/shows?q=${movie}`)
    .then((raw) => raw.json())
    .then((data) => {
        
         let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        
      if (data.length === 0) {
       
        const message = document.createElement("p");
        message.textContent = " LOL ...not found ";
        cards.append(message);
      } else {
        data.forEach((items) => {
        

          const card = document.createElement("div");

          const image = document.createElement("img");
          image.src = items.show.image.medium;
          image.alt = items.show.name;

          const moviename = document.createElement("h2");
          moviename.textContent = items.show.name;

          const rating = document.createElement("p");
          rating.textContent = items.show.rating.average;

          card.append(image);
          card.append(moviename);
          card.append(rating);

          cards.append(card);

          //fav
          const fav = document.createElement("input");

          fav.type = "checkbox";
          
          

          fav.checked = favorites.includes(items.show.id) ;

           card.append(fav);

          fav.addEventListener("change", function () {
            

            if (fav.checked === true) {
                 if (!favorites.includes(items.show.id)) {
                 favorites.push(items.show.id);
                    }
            } else {
              favorites = favorites.filter((id) => id !== items.show.id);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
          });
        });
      }
    });
});
