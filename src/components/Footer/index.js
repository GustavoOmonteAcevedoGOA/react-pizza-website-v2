import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Instragram" rel="noopener">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="noopener">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter" rel="noopener">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Linkedin" rel="noopener">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
