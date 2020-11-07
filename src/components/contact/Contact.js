import React from 'react';
import './main.css';
import calling from './icons/call.svg';
import face from './icons/facebook.svg';
import mail from './icons/mail.svg';
import Icon from './Icon';


function Contact ({ isMobile, isengl }) {

    if(isengl){
        var message = 'Call for a free quote.';
        var subhead = 'We are a family owned business located in Santa Rosa, CA. We can deliver free of charge within the area. Ask for Anabel or Isidro.';
        var text1 = 'We can deliver and pick up free of charge within the surrounding area of Santa Rosa, CA.';
        var text3 = 'When contacting us, ask for Anabel or Isidro.';
    }
    else{
        var message = 'Llamenos para un estimado gratis.';
        var subhead = 'Estamos localizados en Santa Rosa, CA y podemos entregar a ubicaciones en la area. Prengunte por Anabel o Isidro.';
        var text1 = 'Estamos localizaods en Santa Rosa';
        var text2 = 'Podemos entregrar a ubicaciones en la zona.';
        var text3 = 'Pregunte por Anabel o Isidro.';
    }

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