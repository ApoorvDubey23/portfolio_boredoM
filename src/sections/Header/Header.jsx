import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../../common/ThemeContext';
import styles from '../Hero/HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Header() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside or on a menu item
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');

            if (
                isMenuOpen && 
                menuToggle && 
                navMenu && 
                !menuToggle.contains(event.target) && 
                !navMenu.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMenuOpen]);

    // Close menu when a nav link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo">
                    <span>Anita Rathore</span>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                    
                    {/* Social icons for mobile view */}
                    
                </nav>

                <div className="header-buttons">
                    
                    <div>
                        <img
                            src={themeIcon}
                            alt="Color mode icon"
                            onClick={toggleTheme}
                        />
                    </div>
                    <button 
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;