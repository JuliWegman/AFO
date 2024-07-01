import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../css/VerMas.css'

function VerMas({oficina}) {
    return(
        <div className='VerMas'>
            <div className='Datos'>
                <div className='Area'>
                    <Area img = {area}/>
                    <h4>{oficina.tamaño}m²</h4>
                </div>
                <div className='Ambientes'>
                    <Ambientes img ={ambientes}/>
                    <h4>{oficina.ambientes} Ambientes</h4>
                </div>
                <div className='Escritorio'>
                    <Sillas img = {sillas}/>
                    <h4>{oficina.sillas} Escritorios</h4>
                </div>
            </div>
        </div>
    )
}