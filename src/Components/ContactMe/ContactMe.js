import React from 'react';
import Socials from '../../Resources/Socials';
import uuid from 'uuid';
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';
import './ContactMe.css';

function ContactMe() {
    const onClickSocial = (Social) => {
        ReactGA.event({
            category: 'Social',
            action: `Visited ${Social.name}`
        })
    }

    return (
        <div id="ContactMe">
            <Fade bottom delay={200} distance={"60%"}>
                <div id="ContactMe-Title">
                    <h1>Contact Me</h1>
                </div>
            </Fade>
            <div id="ContactMe-Card">
                <div id="ContactMe-Card-Top">
                    <Fade bottom delay={200} cascade>
                        <div id="ContactMe-Card-Top-Left">
                            <h1>Bhushan Kolhe</h1>
                            <h3>E-mail me at,</h3>
                            <h2>kolhe.bhushan.bk@gmail.com</h2>
                        </div>
                    </Fade>
                    <div id="ContactMe-Card-Top-Right">
                        <div id="ContactMe-SocialIcons-Container">
                            <Fade bottom delay={800} cascade>
                                <div id="ContactMe-SocialIcons-Grid">
                                    {
                                    Socials.map( Element => {
                                        const icon = `./img/${Element.icon}`
                                        return (
                                            <a onClick={() => { onClickSocial(Element) }} key={uuid.v4()} target="_blank" href={Element.link}>
                                                <img src={icon} alt="Social Icon"></img>
                                            </a>
                                        )
                                    }) 
                                    }
                                    
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div id="ContactMe-Card-Bottom">
                    <Fade delay={1200} cascade>
                        <a target="_blank" href="https://github.com/chocoholic-me/Portfolio-v2">
                            <h4>
                                Designed and Built by &copy;Bhushan Kolhe
                            </h4>
                        </a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
