import React from "react";
import style from "./postsNav.module.css";
import { BsSearch } from "react-icons/bs";

function PostsNav() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.container}>
          <input type="text" placeholder="Buscar" />
          <button>X</button>
          <button className={style.desp}>
            <BsSearch />
          </button>
          <select className={style.select}>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
            <option>123145647</option>
          </select>
        </div>
      </nav>
      <nav className={style.nav2}>
        <button className={style.button}>Antiguedad</button>
        <button className={style.button}>Sueldo</button>
        <button className={style.button}>Ubicación</button>
        <button className={style.button}>Nivel de experiencia</button>
      </nav>
    </>
  );
}

export default PostsNav;
