import React from 'react';

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
  size?: '26px' | '22px' | '12px' | 'xs' | 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  className = '',
  size = '26px',
}) => {
  const heightClasses: Record<string, string> = {
    '26px': 'h-[18px] min-[380px]:h-[21px] sm:h-[26px]',
    '22px': 'h-[18px] min-[380px]:h-[20px] sm:h-[22px]',
    '12px': 'h-[12px]',
    xs: 'h-[12px]',
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  // Select transparent background version: dark text for white background, white text for dark background
  const logoSrc = theme === 'light' 
    ? '/spa-my-car-logo-dark.png' 
    : '/spa-my-car-logo-light.png';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="SPA MY CAR - Professional Car Care"
        className={`${heightClasses[size] || 'h-[22px] sm:h-[26px]'} w-auto object-contain transition-all duration-200`}
      />
    </div>
  );
};
