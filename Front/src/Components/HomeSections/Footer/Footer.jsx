import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-left'>
                    <h2 className='footer-title'>Acerca de nosotros</h2>
                    <ul>
                        <li><a className='footer-link' href='#' target='_blank'>¿Quiénes somos?</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Nuestros valores</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Política de privacidad</a></li>
                    </ul>
                </div>

                <div className='footer-center'>
                    <h2 className='footer-title'>Asistencia</h2>
                    <ul>
                        <li><a className='footer-link' href='#' target='_blank'>¿Necesitas ayuda?</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Contacto</a></li>
                    </ul>
                </div>

                <div className='footer-right'>
                    <h2 className='footer-title'>Síguenos</h2>
                    <ul>
                        <li><a className='footer-link' href='#' target='_blank'>Linkedin</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>X</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Instagram</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Facebook</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer-bottom'>
                <hr className='footer-line' />
                <p className='footer-text'>2024 SkillTrade</p>
            </div>
        </footer>
    );
};



export default Footer