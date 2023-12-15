import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import "./pokemonCard.css";
/**
 * @typedef {Object} Pokemon
 * @property {string} image
 * @property {string} name
 * @property {number} height
 * @property {number} weight
 * @property {number} experience
 * @property {string[]} abilities
 */

/**
 * @param {{ pokemon: Pokemon }} props
 * @returns {JSX.Element}
 */
const PokemonCard: React.FC<{ pokemon: any }> = ({ pokemon }) => {
  return (
    <IonCard className="pokemon-card">
      <IonImg
        src={pokemon.image}
        alt={pokemon.name}
        className="pokemon-image" // Nueva clase para la imagen
      />
      <IonCardHeader className="ion-text-center">
        <IonCardTitle style={{ color: "black" }} className="pokemon-name">
          {" "}
          {/* Nueva clase para el nombre */}
          {pokemon.name}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          <strong>Altura:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Experiencia:</strong> {pokemon.experience}
        </p>
        <p>
          <strong>Habilidades:</strong>{" "}
          {pokemon.abilities.map((ability: string | number, index: number) => (
            <span key={`${ability}-${index}`} className="ability">
              {" "}
              {/* Añade una clave única y una nueva clase */}
              {ability}
              {index !== pokemon.abilities.length - 1 && ", "}
            </span>
          ))}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default PokemonCard;
