import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../service/api.service";
import { IonPage, IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import PokemonCard from "./pokemonCard";
import "./pokemonList.css";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || 1
  );
  const [itemsPerPage, setItemsPerPage] = useState(9);

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
    localStorage.setItem("currentPage", 1);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + 1;
      localStorage.setItem("currentPage", newPage);
      return newPage;
    });
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1;
        localStorage.setItem("currentPage", newPage);
        return newPage;
      });
    }
  };

  return (
    <IonPage className="ion-text-center">
      <IonGrid>
        <IonRow>
          {pokemons.map((pokemon, index) => (
            <IonCol size="12" size-md="6" size-lg="4" key={index}>
              <PokemonCard pokemon={pokemon} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <IonButton style={{ margin: "30px" }} onClick={firstPage}>
          Ir a página 1
        </IonButton>
        <IonButton style={{ margin: "30px" }} onClick={prevPage}>
          Previous
        </IonButton>
        <label
          style={{
            fontSize: "19px",
            fontWeight: "bold",
            margin: "80px",
          }}
        >
          {currentPage}
        </label>
        <IonButton style={{ margin: "30px" }} onClick={nextPage}>
          Next
        </IonButton>
        <Link to="/">
          <IonButton
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "999",
            }}
          >
            Ir al Home
          </IonButton>
        </Link>
      </div>
    </IonPage>
  );
};

export default PokemonList;
