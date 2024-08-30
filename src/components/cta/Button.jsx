import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.scss';

const Button = ({ variant = 'primary', children, to, onClick, section }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        } else if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <button 
            className={`button ${variant}`} 
            onClick={handleClick}
        >
        {children}
        </button>
    );
};

export default Button;