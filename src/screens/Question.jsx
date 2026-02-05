import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const img10ValentineDay = "https://www.figma.com/api/mcp/asset/03c22d11-d090-4f20-8c9d-4a7dde6a2396";
const imgStar3 = "https://www.figma.com/api/mcp/asset/a8c68a16-1288-4aaf-bc02-07fa47b03c2f";

export default function Question() {
  const navigate = useNavigate();
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noAttempts, setNoAttempts] = useState(0);

  const handleYesClick = () => {
    navigate('/message-yes');
  };

  const handleNoClick = () => {
    const newAttempts = noAttempts + 1;
    setNoAttempts(newAttempts);

    if (newAttempts >= 3) {
      navigate('/message-no');
      return;
    }

    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    
    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px) scale(${1 - newAttempts * 0.15})`,
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
    });
  };

  return (
    <div className="screen fade-in" style={{ background: 'white', justifyContent: 'flex-start', padding: '0 5vw' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        marginTop: '15vh',
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
        marginTop: '8vh',
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
          Will you be my valentine Preeti Potdar?
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
            className="no-button"
            style={{
              background: '#3e000c',
              height: 'clamp(45px, 6vh, 48px)',
              borderRadius: '16px',
              boxShadow: '0px 14.533px 20px 0px rgba(12,0,2,0.2), inset 0px -6.976px 6.976px 0px #35000a, inset 0px 6.976px 6.976px 0px #45000d',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              fontFamily: "'Fredoka One', cursive",
              fontSize: 'clamp(16px, 4vw, 18px)',
              color: 'white',
              ...noButtonStyle
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
