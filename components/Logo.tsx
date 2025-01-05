import React from 'react';

interface LogoProps {
  textSize: string;
  logoSize: string;
}

export const Logo: React.FC<LogoProps> = ({textSize, logoSize}) => (
  <div className="flex items-center space-x-2">
    <svg width={logoSize} height={logoSize} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" fill="#020B3F"/>
      <path d="M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8Z" fill="white"/>
      <path d="M20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11Z" fill="#020B3F"/>
      <path d="M23 17.5C23 16.6716 23.6716 16 24.5 16H28.5C29.3284 16 30 16.6716 30 17.5V21.5C30 22.3284 29.3284 23 28.5 23H24.5C23.6716 23 23 22.3284 23 21.5V17.5Z" fill="#34A853"/>
      <path d="M10 26.5C10 25.6716 10.6716 25 11.5 25H15.5C16.3284 25 17 25.6716 17 26.5V30.5C17 31.3284 16.3284 32 15.5 32H11.5C10.6716 32 10 31.3284 10 30.5V26.5Z" fill="#FBBC05"/>
    </svg>
    <span className={`text-${textSize} font-extrabold bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] bg-clip-text text-transparent drop-shadow-lg`}>Web Dock</span>
  </div>
);
