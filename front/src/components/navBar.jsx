import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import "./navBar.css";

const Navbar = () => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle className="animated-text">P o k é m on</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
