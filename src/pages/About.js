import React from 'react'
import '../styles/About.css'
import IceCreamSprinkles from '../assets/iceCreamSprinkles.jpg'

function Home(){
    return(
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${IceCreamSprinkles})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>
                    We are a highly skilled group of delicious dairy dessert masters
                    who make high quality ice cream, frozen yogourt, cakes, and more
                    which you can prepare to enjoy by visiting this page; it has been
                    carefully crafted to make your stomach growl and your mouth water,
                    but in no way can it satisfy your hunger. The only way to quench
                    your desire now is to visit our ice cream parlor!
                </p>
            </div>
        </div>
    )
}

export default Home