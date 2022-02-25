import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions";
import "./AboutUs.css";

const AboutUs = () => {
  // const { list } = useSelector((state) => state.listreducer);
  // console.log(list);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(search());
  // }, []);

  return (
    <div className="background">
      <div className="box">
        <h2>Sfax El Mezyena</h2>

        <div className="boxx">
          <div className="text-container">
            <p className="ppp">
              Sfax El Mezyena (La Belle Sfax), lancée en 2011, est une
              association qui vise à rendre la ville de Sfax plus agréable à
              vivre à travers :
              <br />
              - La sensibilisation et l’éducation environnementale des citoyens
              <br />
              - Développer la citoyenneté responsable
              <br />- Le véritable changement de la qualité de vie dans la ville
              de Sfax
            </p>
          </div>

          <h2>Les Axes Stratégiques</h2>

          <div className="text-container">
            <p className="ppp">
              L’objectif principale de l’association Sfax El Mezyena est de
              former les jeunes dans plusieurs domaines et développer leurs
              compétences personnelles et techniques, à travers la participation
              dans une diversité de projets dans toutes leurs phases
              (plannification, organisation et réalisation, évaluation). Ces
              projets suivent des axes stratégiques bien déterminées : <br />{" "}
              Écologie - Éducation - Patrimoine (matériel et immatériel) -
              Projets Publiques Bloqués
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AboutUs;
