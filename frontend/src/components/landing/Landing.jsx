import React, {useEffect, useState} from "react";
import style from "./landing.module.css";
import inte from '../../assets/inte.webp'
import {IoPersonCircleSharp} from 'react-icons/io5'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGoogleCircle, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from "react-router-dom";

function Landing() {
  const testimonios = [{
    title: 'lorem',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.',
    person: 'lorem ipsum'
  },{
    title: 'lorem',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.',
    person: 'lorem ipsum'
  },{
    title: 'lorem',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.',
    person: 'lorem ipsum'
  },{
    title: 'lorem',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.',
    person: 'lorem ipsum'
  }]

  const [view, setView] = useState(style.out)
  useEffect(()=>{
    const sight = event => {
      if(window.scrollY > window.innerHeight*0.70){
        setView(style.in)
      }
    }
    window.addEventListener('scroll', sight)
    return ()=>{ window.removeEventListener('scroll', sight)}
  },[])

  return (
    <>
      <article className={style.article}>
        <header className={style.head}>
          <h1 className={style.title}>MUSIC</h1>
        </header>
      </article>

      <main className={style.body}>
        <section className={`${style.hacer} ${view}`}>
          <img src={inte} className={style.inte} alt=""/>
          <div className={style.card_des}>
            <h4>Que Hacemos?</h4>
            <p>Somos una aplicacion en busqueda de dar a conocer los artistas emergentes o sin experiencia laboral y exponerlos al mercado musical para que tengan mas oportunidades laborales</p>
          </div>
        </section>

        <section className={`${style.hacer} ${view}`}>
          <div className={style.card_pq}>
            <h4>Porque?</h4>
            <p>En el quindio y en Colombia en general hay muchos musicos prodigiosos y talentosos los cuales no han tenido la oportunidad de brillar o darse a conocer ya que no cuentan con los medios necesarios para lograrlo</p>
          </div>
          <img src={inte} className={style.inte} alt=""/>
        </section>
      </main>

      <article className={style.testimonios}>
        {
          testimonios.map((testimonio, index)=>{
            return <div className={style.testi} key={index}>
              <div className={style.icon}>
                <IoPersonCircleSharp className={style.i_user}/>
              </div>
              <div className={style.info}>
                <h4>{testimonio.title}</h4>
                <div>
                  <p className={style.card_descri}>{testimonio.description}</p>
                  <ul className={style.social_n}>
                    <Link to=''><BsFacebook className={style.min_icon}/></Link>
                    <Link to=''><AiFillGoogleCircle className={style.min_icon}/></Link>
                    <Link to=''><AiOutlineInstagram className={style.min_icon}/></Link>
                  </ul>
                </div>
                <p className={style.p2}>{testimonio.person}</p>
              </div>
            </div>
          })
        }
      </article>
    </>
  );
}

export default Landing;
