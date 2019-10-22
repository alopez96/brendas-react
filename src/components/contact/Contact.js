import React from 'react';
import './main.css';
import calling from './icons/call.svg';
import face from './icons/facebook.svg';
import mail from './icons/mail.svg';
import Icon from './Icon';


function Contact () {

    const message = 'Call for a free quote.';

    const callData = {
        image: calling,
        alt: 'phone-icon',
        link: 'tel: 707-555-555',
        text: '555-555-555'
    }

    const faceData = {
        image: face,
        alt: 'facebook-icon',
        text: '@brendas-brincolines',
        link: 'https://github.com/alopez96'
    }
    
    const mailData = {
        image: mail,
        alt: 'email-icon',
        text: 'isidrocrespo@yahoo.com',
        link: 'mailto: isidrocrespo@yahoo.com'
    }

    return(
        <div className='main'>
            <div className='content'>
                <p>{message}</p>
                <div>
                    <Icon data={callData}/>
                    <Icon data={faceData}/>
                    <Icon data={mailData}/>
                </div>
            </div>
        </div>
    )
}

export default Contact;