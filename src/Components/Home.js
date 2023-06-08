import React from "react";
import "./Home.css";
//import yasmine.jpeg from "./yasmine.jpeg";
import yasmine from "./yasmine.jpeg";

function Home() {
  return (
    <div className="container-fluid home-background text-white text-center py-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 text-center">
          <img src={yasmine} className="rounded-circle profile-image mb-4" alt="Yasmine" />
          <h2>Yasmine Merzougui</h2>
          <p className="lead">Developpeur</p>
        </div>
        <div className="col-md-8">
          <div className="card bg-dark text-white mt-5 p-4">
            <h1 className="card-title">Bienvenue dans mon portfolio</h1>
            <p className="card-text lead">
              
            Bonjour,Je me présente Yasmine Merzougui, je suis étudiante en DEC programmation informatique, je suis actuellement à ma dernière session. J'ai toujours été passionnée par l'informatique et je compte vraiment avoir mon diplôme pour trouver un emploi dans mon domaine de prédilection et peut-être fonder ma propre entreprise à l'avenir.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
