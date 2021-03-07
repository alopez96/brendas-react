import React from 'react';
import FooterIcon from './FooterIcon';
import fb from './icons/facebook.svg';
import mail from './icons/mail.svg';
import call from './icons/call.svg';

function Footer () {

    const fbLink = 'https://www.facebook.com/pages/category/Airport/Brendas-Brincolines-Santa-Rosa-670969026572962/';
    const emailLink = 'mailto: isidrocrespo@yahoo.com';
    const callLink = 'tel: 707-921-6530';

    return(
        <div className='footer'>
            <div className=''>
                <p>Brenda's Jumpies</p>
                <div className='footer-list'>
                   <div> <FooterIcon icon={fb} link={fbLink}/> </div>
                   <div> <FooterIcon icon={mail} link={emailLink}/> </div>
                   <div> <FooterIcon icon={call} link={callLink}/> </div>
                </div>
                <p style={arturoText}>Developed by 
                    <a href='https://arturocreates.com' className="arturo-link"
                    target="_blank"> Arturo Lopez</a>
                    </p>
            </div>
        </div>
    )
}

const arturoText = {
    fontSize: "14px",
    textAlign: "center"
};

export default Footer;