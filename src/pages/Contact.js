import React from 'react'
import '../styles/Contact.css'
import IceCreamBowl from '../assets/iceCreamBowl.jpg'

function Contact(){
    return(
        <div className="contact"> 
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${IceCreamBowl})`}}
            >
            </div>
            <div className="rightSide">
                <h1>Contact Us For a Free Sample!</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" placeholder="full name" type="text"/>
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder="email address" type="email"/>
                    <label htmlFor="message">Delivery Instructions</label>
                    <textarea name="message" rows="6" placeholder="write any delivery instructions here" required></textarea>
                    <button type="submit">Place Order</button>
                </form>
            </div>
        </div>
    )
}

export default Contact