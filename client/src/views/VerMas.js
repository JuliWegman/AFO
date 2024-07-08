import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Logo from "../componentes/logo.js";
import area from "../logo/area.png";
import ambientes from "../logo/ambientes.png";
import sillas from "../logo/escritorio.png";
import '../css/VerMas.css'

function VerMas({oficina}) {
    return(
        <div className='VerMas'>
            <div className='Datos'>
                <div className='Area'>
                    <Logo img = {area}/>
                    <h4>{oficina.tamaño}m²</h4>
                </div>
                <div className='Ambientes'>
                    <Logo img ={ambientes}/>
                    <h4>{oficina.ambientes} Ambientes</h4>
                </div>
                <div className='Escritorio'>
                    <Logo img = {sillas}/>
                    <h4>{oficina.sillas} Escritorios</h4>
                </div>
            </div>
        </div>
    )
}