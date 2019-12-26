import React from 'react';
import calling from './../contact/icons/call.svg';
import Icon from './../contact/Icon';


function ContactInfo() {

    const callData = {
        image: calling,
        alt: 'phone-icon',
        link: 'tel: 707-921-6530',
        text: '(707) 921-6530',
        cta: 'primary'
    }

    return (
        <div>
            <Icon data={callData}/>
        </div>
    )
}

export default ContactInfo;