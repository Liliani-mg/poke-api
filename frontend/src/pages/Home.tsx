import { CSSProperties } from "react";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import { Link } from "react-router-dom";
import backgroundImage from "../../public/187200-tipos-pokemon-maplerose.webp";

const Home = () => {
  const backgroundStyles: CSSProperties = {
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

  const linkedInButton: CSSProperties = {
    position: "absolute",
    top: "20px",
  };

  return (
    <IonPage>
      <IonContent>
        <div style={backgroundStyles}>
          <h1>Bienvenido</h1>
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
