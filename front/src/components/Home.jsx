import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/187200-tipos-pokemon-maplerose.webp";
import { IonButton } from "@ionic/react";

const backgroundStyles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  color: "#0a090a",
  textShadow: "2px 2px 4px white",
  position: "relative",
};

const linkedInButton = {
  position: "absolute",
  top: "20px",
};

function Home() {
  return (
    <div style={backgroundStyles}>
      <h1>Bienvenido </h1>
      <p>Descubre el mundo de los Pokémon</p>
      <Link to="/pokemon-list">
        <IonButton>Ver Pokémon</IonButton>
      </Link>
      <IonButton color="dark" style={linkedInButton}>
        <a
          href="https://www.linkedin.com/in/irupe-meza-gaidtov/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", textDecoration: "none" }}
        >
          Visita mi LinkedIn
        </a>
      </IonButton>
    </div>
  );
}

export default Home;
