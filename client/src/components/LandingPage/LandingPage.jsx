import React from "react";
import {Link} from 'react-router-dom';
import '../LandingPage/LandingPage.css';
import image from '../../assets/img/uwu.svg';
import image2 from '../../assets/img/logo.jpg';

export default function LandingPage(){
    return(
        <div className="dad-lan">
            <img src={image2} alt="logo" className="logo" />
            <div className='landing'>
                <div className="navs" >
                    <h1 className="titul"> Countries </h1> 
                    <img src={image} alt="logo" className="image" />
                </div>
                
                <h2 className="subtitulo">Descubre todos los países del mundo y las actividades en las que puedes aventurarte</h2>
                <h4 className="descripcion">Countrie App es una aplicación destinada a mostrarte información de diferentes partes del mundo</h4>
                <div className="btn">
                    <Link to ='/home'><button><span>Ver mas</span></button></Link>
                </div>
            </div>
        </div>

    )}