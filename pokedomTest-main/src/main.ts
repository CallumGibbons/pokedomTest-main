import { Pokemon } from "./data/types";
import { pokemonArray } from "./data/pokemon";
import "./styles/style.scss";

const capitaliseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const makePokemonCard = (pokemonArray: Pokemon) => {
  const capitalizedPokemonName = capitaliseFirstLetter(pokemonArray.name);
  return `<div class="card">
                        <img
                            class="card__image"  
                            src="${pokemonArray.sprite}"
                        />
                        <div class="card__content">
                        <h2 class="card__heading">
                        ${capitalizedPokemonName}
                        </h2>
                        <p class="card__text">
                        ${capitalizedPokemonName} (#${pokemonArray.id}) is a 
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
