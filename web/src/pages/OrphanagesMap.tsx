import React from 'react'
import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanages-map.css'

import { Link } from 'react-router-dom'
import mapMarkerItem from '../images/map-marker.svg'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerItem} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Fortaleza</strong>
                    <strong>Ceará</strong>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
            </Link>
            
        </div>
    )
}

export default OrphanagesMap;