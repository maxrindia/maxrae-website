import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '28px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: isHovered ? '#00bba7' : '#ffffff',
        border: `1.5px solid ${isHovered ? '#00bba7' : '#080607'}`,
        color: isHovered ? '#ffffff' : '#080607',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'none',
        transition: 'all 0.2s ease',
        zIndex: 9999,
        padding: 0
      }}
    >
      <ChevronUp size={20} strokeWidth={2.4} />
    </button>
  );
}
