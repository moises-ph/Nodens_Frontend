import style from "./footer.module.css";
import React from "react";
import {Link} from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGoogleCircle, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <>
      <footer>
        <div className={style.body}>
          <h3>NODENS</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit recusandae accusantium ab nulla.
            <br />
            Quis vel illum sint mollitia dolorem architecto dolores <br />
            quae voluptatem accusamus, reiciendis earum hic ea impedit
            exercitationem!
          </p>
          <div className={style.list}>
            <ul className={style.icons}>
              <li>
                <Link to=''><BsFacebook className={style.facebook}/></Link>
              </li>
              <li>
                <Link to=''><AiFillGoogleCircle className={style.google}/></Link>
              </li>
              <li>
                <Link to=''><AiOutlineInstagram className={style.instagram}/></Link>
              </li>
              <li>
                <Link to=''><AiFillGithub className={style.github}/></Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
