import React from "react";
import style from "./Feed.module.css";
import { Link } from "react-router-dom";
import {AiFillFileExcel} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'

function Feed() {
  const arreglo = [
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    },
    {
      title: "El titulo",
      name: "Nombre del grupo",
      ubicacion: "Ubicación",
      descripcion: "Descripción del grupo",
      antiguedad: "Antiguedad del grupo",
    }
  ];

  return (
    <>
      <main className={style.body}>
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

        <article className={style.card}>
          <div className={style.square}>
            <AiFillFileExcel className={style.square_icon}/>
            <Link to='/' className={style.square_title}><h3>Recepcionista Cajero</h3></Link>
            <p className={style.p}>GHL Hoteles  Medellín, Antioquia, Colombia</p>
            <p className={style.p}> <span>Hace 1 semana</span>  26 solicitudes</p>
            <div className={style.icon_container}>
              <AiFillFileExcel className={style.square_icon}/> <AiFillFileExcel className={style.square_icon}/><AiFillFileExcel className={style.square_icon}/>
              <Link to='/'><p className={style.p}>Descubre a quién ha contratado GHL Hoteles para este puesto</p></Link>
            </div>
            <div className={style.buttons_container}>
              <button className={style.square_button}>Solicitar en el Sitio Web de la Empresa <FiExternalLink /></button>
              <button className={style.square_button}>Guardar</button>
            </div>
          </div>
          <p>Importante compañia del sector hotelero requiere el cargo de Botones, Hombres con excelente presentacion personal, y actitud de servicio.</p>
          <span>mision</span>
          <ul>
            <li><h3>Nivel de antiguedad</h3><span>Sin experiencia</span></li>
            <li><h3>Tipo de Empleo</h3><span>Jornada completa</span></li>
            
          </ul>
        </article>
      </main>
    </>
  );
}

export default Feed;
