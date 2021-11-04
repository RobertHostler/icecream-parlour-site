import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/iceCream.jpg'
import '../styles/Home.css'

function Home(){
    return(
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1> Ingrid's Ice Cream </h1>
                <p> The Coolest Confectionary In Town </p>
                <Link to="/menu">
                    <button> Shop Now </button>
                </Link>
            </div>
        </div>
    )
}

export default Home