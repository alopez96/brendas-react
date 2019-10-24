import React from 'react';

function FooterIcon ({ icon, link }) {

    const openLink = (url) => {
        window.open(url , '_blank');
    }

    return(
        <button style={{backgroundColor: 'transparent', border:'none'}} 
                onClick={()=> openLink(link)}>
            <img src={icon}/>
        </button>
    )
}

export default FooterIcon;