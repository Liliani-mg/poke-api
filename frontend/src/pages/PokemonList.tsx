import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import PokemonCard from "../components/PokemonCard";
import "./pokemonList.css";
import { fetchPokemons } from "../service/api.service";
import { useHistory } from "react-router";

const PokemonList = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(localStorage.getItem("currentPage")) || 1
  );
  const [itemsPerPage] = useState<number>(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemons(currentPage, itemsPerPage);
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage]);

  const firstPage = () => {
    setCurrentPage(1);
    localStorage.setItem("currentPage", "1");
  };

  const nextPage = () => {
    const newPage = Number(currentPage) + 1;
    setCurrentPage(newPage);
    localStorage.setItem("currentPage", String(newPage));
  };

  const prevPage = () => {
    if (Number(currentPage) > 1) {
      const newPage = Number(currentPage) - 1;
      setCurrentPage(newPage);
      localStorage.setItem("currentPage", String(newPage));
    }
  };

  return (
    <IonPage className="ion-text-center">
      <IonContent>
        {pokemons.length === 0 ? (
          <div>No se encontraron resultados</div>
        ) : (
          <IonGrid>
            <IonRow>
              {pokemons.map((pokemon, index) => (
                <IonCol size="12" size-md="6" size-lg="4" key={index}>
                  <PokemonCard pokemon={pokemon} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}{" "}
      </IonContent>
      <div className="ion-text-center" style={{ marginBottom: "40px" }}>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6" size-md="2">
              <IonButton onClick={prevPage} className="custom-button">
                <IonIcon icon={chevronBack} slot="icon-only" />
              </IonButton>
            </IonCol>
            <IonCol size="6" size-md="2">
              <IonButton onClick={nextPage} className="custom-button">
                <IonIcon icon={chevronForward} slot="icon-only" />
              </IonButton>
            </IonCol>
            <IonCol size="12">
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Página {currentPage}
              </p>
            </IonCol>
            <IonCol size="12">
              <IonButton
                onClick={() => {
                  history.push("/"); // Ruta de la página de inicio
                }}
                className="custom-button"
              >
                Ir a la página de inicio
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonPage>
  );
};

export default PokemonList;
