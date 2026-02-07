import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const img10ValentineDay = "https://www.figma.com/api/mcp/asset/03c22d11-d090-4f20-8c9d-4a7dde6a2396";
const imgStar3 = "https://www.figma.com/api/mcp/asset/a8c68a16-1288-4aaf-bc02-07fa47b03c2f";

export default function Question() {
  const navigate = useNavigate();
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noAttempts, setNoAttempts] = useState(0);
  const [noButtonText, setNoButtonText] = useState('No');
  const [isHovering, setIsHovering] = useState(false);

  const playfulTexts = [
    'No',
    'Are you sure? 🤔',
    'Really? 😢',
    'Think again! 💭',
    'Please? 🥺',
    'One more chance? 💕'
  ];

  const handleYesClick = () => {
    navigate('/message-yes');
  };

  const handleNoHover = () => {
    if (noAttempts === 0) {
      // Keep movement within safe boundaries (max 80px in any direction)
      const randomX = Math.random() * 160 - 80;
      const randomY = Math.random() * 100 - 50;
      const randomRotate = Math.random() * 30 - 15;
      
      setNoButtonStyle({
        transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(0.9)`,
        transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      });
      setIsHovering(true);
    }
  };

  const handleNoClick = () => {
    const newAttempts = noAttempts + 1;
    setNoAttempts(newAttempts);

    if (newAttempts >= 5) {
      navigate('/message-no');
      return;
    }

    // Constrain movement to stay within screen boundaries
    // Reduce range based on attempt number to keep it visible
    const maxMove = Math.max(60, 120 - newAttempts * 15);
    const randomX = Math.random() * (maxMove * 2) - maxMove;
    const randomY = Math.random() * (maxMove * 1.5) - (maxMove * 0.75);
    const randomRotate = Math.random() * 360;
    const scale = Math.max(0.6, 1 - newAttempts * 0.1);
    
    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${scale})`,
      transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    setNoButtonText(playfulTexts[Math.min(newAttempts, playfulTexts.length - 1)]);
    setIsHovering(false);
  };

  return (
    <div className="screen fade-in" style={{ background: 'white', justifyContent: 'flex-start', padding: '0 5vw' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        marginTop: 'clamp(100px, 15vh, 130px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={imgStar3} 
            alt="" 
            style={{
              width: '180%',
              height: 'auto',
              maxWidth: 'none'
            }}
          />
        </div>
        <div style={{
          position: 'relative',
          width: '70vw',
          maxWidth: '285px',
          aspectRatio: '1',
          overflow: 'hidden',
          borderRadius: '50%',
          zIndex: 1
        }}>
          <img 
            src={img10ValentineDay} 
            alt="" 
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      
      <div style={{
        width: '100%',
        maxWidth: '400px',
        marginTop: 'clamp(50px, 8vh, 70px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(20px, 4vh, 30px)',
        padding: '0 20px'
      }}>
        <p style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 'clamp(20px, 5vw, 24px)',
          color: '#fad6e1',
          margin: 0,
          lineHeight: '1.3',
          textAlign: 'center'
        }}>
          Will you be my valentine Sneha Kuriakose?
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%'
        }}>
          <button 
            onClick={handleYesClick}
            className="button-hover"
            style={{
              background: '#ff2f6f',
              height: 'clamp(50px, 7vh, 60px)',
              borderRadius: '16px',
              boxShadow: '0px 14.533px 29.067px 0px rgba(51,9,22,0.2), inset 0px -6.685px 6.685px 0px #dc2960, inset 0px 6.685px 6.685px 0px #ff347b',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              fontFamily: "'Fredoka One', cursive",
              fontSize: 'clamp(16px, 4vw, 18px)',
              color: 'white'
            }}
          >
            Yes
          </button>
          
          <button 
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="no-button"
            style={{
              background: isHovering ? '#5a0012' : '#3e000c',
              height: 'clamp(45px, 6vh, 48px)',
              borderRadius: '16px',
              boxShadow: '0px 14.533px 20px 0px rgba(12,0,2,0.2), inset 0px -6.976px 6.976px 0px #35000a, inset 0px 6.976px 6.976px 0px #45000d',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              fontFamily: "'Fredoka One', cursive",
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              color: 'white',
              position: 'relative',
              ...noButtonStyle
            }}
          >
            {noButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
