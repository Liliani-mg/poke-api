import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import "./pokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <IonCard className="pokemon-card">
      <IonImg
        src={pokemon.image}
        alt={pokemon.name}
        style={{ width: "50%", maxWidth: "300px", margin: "0 auto" }}
      />
      <IonCardHeader className="ion-text-center">
        <IonCardTitle
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin: "10px",
          }}
        >
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
          {pokemon.abilities.map((ability, index) => (
            <span key={index}>
              {ability}
              {index !== pokemon.abilities.length - 1 && ", "}{" "}
            </span>
          ))}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default PokemonCard;
