import React from "react";
import style from "./Feed.module.css";
import { Link } from "react-router-dom";

function Feed() {
  const arreglo = [
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
  ];

  return (
    <>
      <main>
        <article className={style.arreglo}>
          {arreglo.map((arreglo, index) => {
            return (
              <div className={style.tarjet} key={index}>
                <div className={style.info}>
                  <h2>{arreglo.title}</h2>
                  <h4>{arreglo.name}</h4>
                  <h4>{arreglo.ubicacion}</h4>
                  <h4>{arreglo.descripcion}</h4>
                  <h4>{arreglo.antiguedad}</h4>

                </div>
              </div>
            );
          })}
        </article>
      </main>
    </>
  );
}

export default Feed;
