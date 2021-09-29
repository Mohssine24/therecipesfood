import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-up">
                <Link to='/privacy' className='footer-link'>
                    Privacy
                </Link>
                <Link to='/terms' className='footer-link'>
                    Terms
                </Link>
                <Link to='/contact' className='footer-link'>
                    Contact
                </Link>
                {/* <Link to='/about' className='footer-link'>
                    About
                </Link> */}
            </div>
            <div class="footer-disclaimer">
                <h4 class="disclaimer-title">Disclaimer</h4> 
                <div class="disclaimer">
                    <p>
                        <strong> <Link href="https://therecipesfood.com">THERECIPESFOOD.COM :</Link> Any information published on this website is not intended or implied to be a substitute for professional health, nutrition or diet advice. All content, including text, graphics, images and information, contained on or available through this website is for general information purposes only. Consult with your physician or seek medical attention before making any health or food related decisions.</strong>
                    </p>
                </div>
            </div>
        </footer>
    )   
}

export default Footer
