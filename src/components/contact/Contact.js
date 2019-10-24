import React from 'react';
import './main.css';
import calling from './icons/call.svg';
import face from './icons/facebook.svg';
import mail from './icons/mail.svg';
import Icon from './Icon';


function Contact ({isMobile}) {

    const message = 'Call for a free quote.';
    const subhead = 'We are located in Santa Rosa, CA and can deliver free of charge within the area. Ask for Anabel or Isidro.';
    const text1 = 'We are located in Santa Rosa';
    const text2 = 'We can drive free of charge within the area.';
    const text3 = 'When contacting us, ask for Anabel or Isidro.';

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

    if(!isMobile){
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
    else{
        return(
            <div className='mmain'>
                <div className='mcontent'>
                    <p className='mhead'>{message}</p>
                        <ul className='msubhead'>
                            <li style={{marginBottom:'1em'}}>{text1}</li>
                            <li style={{marginBottom:'1em'}}>{text2}</li>
                            <li style={{marginBottom:'2em'}}>{text3}</li>
                        </ul>
                    <div>
                        <Icon data={callData}/>
                        <Icon data={faceData}/>
                        <Icon data={mailData}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;