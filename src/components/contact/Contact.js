import React from 'react';
import './main.css';
import calling from './icons/call.svg';
import face from './icons/facebook.svg';
import mail from './icons/mail.svg';
import Icon from './Icon';


function Contact () {

    const message = 'Call for a free quote.';
    const subhead = 'We are located in Santa Rosa, CA and can deliver free of charge within the area. Ask for Anabel or Isidro.';

    const callData = {
        image: calling,
        alt: 'phone-icon',
        link: 'tel: 707-921-6530',
        text: '(707) 921-6530',
        cta: 'primary'
    }

    const faceData = {
        image: face,
        alt: 'facebook-icon',
        text: '@brendas-brincolines',
        link: 'https://www.facebook.com/pages/category/Airport/Brendas-Brincolines-Santa-Rosa-670969026572962/',
        cta: 'secondary'
    }
    
    const mailData = {
        image: mail,
        alt: 'email-icon',
        text: 'isidrocrespo@yahoo.com',
        link: 'mailto: isidrocrespo@yahoo.com',
        cta: 'secondary'
    }

    return(
        <div className='main'>
            <div className='content'>
                <p className='head'>{message}</p>
                <p className='subhead'>{subhead}</p>
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