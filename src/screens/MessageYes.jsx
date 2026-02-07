import React from 'react';
import { useNavigate } from 'react-router-dom';

const img10ValentineDay = "https://www.figma.com/api/mcp/asset/cab2ed66-210c-4330-b922-506442e051a2";
const imgStar3 = "https://www.figma.com/api/mcp/asset/deb4eba9-2f1a-42b2-ba14-1010bcdc094a";

export default function MessageYes() {
  const navigate = useNavigate();

  return (
    <div className="screen" style={{ background: 'white', justifyContent: 'flex-start', padding: '0 5vw' }}>
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
          <img src={imgStar3} alt="" style={{
            width: '180%',
            height: 'auto',
            maxWidth: 'none'
          }} />
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
          <img src={img10ValentineDay} alt="" style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
        </div>
      </div>

      <div style={{
        position: 'fixed',
        inset: 0,
        backdropFilter: 'blur(5px)',
        background: 'rgba(109,109,109,0.4)',
        zIndex: 2
      }} />

      <div className="scale-in" style={{
        position: 'relative',
        zIndex: 3,
        marginTop: 'clamp(30px, 5vh, 45px)',
        background: 'white',
        padding: 'clamp(20px, 5vw, 30px)',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(20px, 4vh, 30px)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          alignItems: 'center'
        }}>
          <p style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(24px, 6vw, 28px)',
            color: '#fad6e1',
            margin: 0
          }}>
            Congratulations!
          </p>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(11px, 3vw, 12px)',
            color: '#ea4986',
            textAlign: 'center',
            margin: 0,
            fontWeight: 600
          }}>
            You literally made the right choice - <span style={{ color: 'rgba(240,139,169,0.94)', fontWeight: 500 }}>since the day you chose me actually hahahahahaha.</span>
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/spin-wheel')}
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
      </div>
    </div>
  );
}
