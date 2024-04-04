import { Pokemon } from "./data/types";
import { pokemonArray } from "./data/pokemon";
import "./styles/style.scss";

//this takes each string in a given array and converts the first letter of each item to capital
const capitaliseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};



//created function for the making of each card, taking information from the imported pokemonArray
//And making the necessary html for each, applying the corresponding stylings from the styles.scss document
const makePokemonCard = (pokemonArray: Pokemon) => {
  //used the above capitaliseFirstLetter to take the names from the array and create a new capitalisedPokemonName function.
  const capitalisedPokemonName = capitaliseFirstLetter(pokemonArray.name);
  return `<div class="card">
                        <img
                            class="card__image"  
                            src="${pokemonArray.sprite}"
                        />
                        <div class="card__content">
                        <h2 class="card__heading">
                        ${capitalisedPokemonName}
                        </h2>
                        <p class="card__text">
                        ${capitalisedPokemonName} (#${pokemonArray.id}) is a 
                        ${pokemonArray.types.join(" & ")} type pokemon.</p>
            </div>`;
};

const container = document.querySelector<HTMLElement>(".card-container");

if (!container) {
  throw new Error("Issue with selector");
}
pokemonArray.forEach((Pokemon) => {
  container.innerHTML += makePokemonCard(Pokemon);
});

