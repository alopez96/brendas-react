import React from 'react';
import './footer.css';
import FooterIcon from './FooterIcon';
import fb from './icons/facebook.svg';
import mail from './icons/mail.svg';
import call from './icons/call.svg';

function Footer () {

    return(
        <div className='footer'>
            <div className='footer-content'>
                <p>Brenda's Jumpies</p>
                <div className='footer-list'>
                   <div> <FooterIcon icon={fb}/> </div>
                   <div> <FooterIcon icon={mail}/> </div>
                   <div> <FooterIcon icon={call}/> </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;