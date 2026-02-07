import React from 'react';
import { useNavigate } from 'react-router-dom';

const imgImage1 = "https://www.figma.com/api/mcp/asset/5485a2e8-f038-49b6-894f-08c08c46909f";
const imgFrame12 = "https://www.figma.com/api/mcp/asset/b84f1952-cf06-4836-93d3-21764e4338a1";
const imgFrame10 = "https://www.figma.com/api/mcp/asset/d5d9d782-2a0b-44aa-b661-678e8d3686d6";
const imgVector6 = "https://www.figma.com/api/mcp/asset/27b01df0-0c46-4c0f-bf62-2e610e8490dc";

export default function MessageNo() {
  const navigate = useNavigate();

  return (
    <div className="screen" style={{ background: 'white', justifyContent: 'flex-start', padding: '0 5vw' }}>
      <button 
        onClick={() => navigate('/question')}
        style={{
          position: 'absolute',
          left: 'clamp(15px, 5vw, 25px)',
          top: 'clamp(30px, 5vh, 45px)',
          fontFamily: "'Fredoka One', cursive",
          fontSize: 'clamp(28px, 8vw, 32px)',
          color: '#fad6e1',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          zIndex: 10
        }}
      >
        &lt;
      </button>

      <p style={{
        marginTop: 'clamp(80px, 12vh, 105px)',
        fontFamily: "'Fredoka One', cursive",
        fontSize: 'clamp(20px, 5vw, 24px)',
        color: '#fad6e1',
        textAlign: 'center',
        margin: 'clamp(80px, 12vh, 105px) auto 0',
        maxWidth: '300px'
      }}>
        How dare you say NO!
      </p>

      <div style={{
        width: '70vw',
        maxWidth: '280px',
        aspectRatio: '1',
        border: '5px solid #ef86a5',
        borderRadius: '30px',
        overflow: 'hidden',
        marginTop: 'clamp(25px, 4vh, 35px)'
      }}>
        <img src={imgImage1} alt="" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }} />
      </div>

      <p style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: 'clamp(18px, 4.5vw, 20px)',
        color: '#fad6e1',
        textAlign: 'center',
        margin: 'clamp(25px, 4vh, 35px) 0 0',
        maxWidth: '300px'
      }}>
        Say yes if you love me
      </p>

      <button 
        onClick={() => navigate('/spin-wheel')}
        style={{
          background: '#ff2f6f',
          height: 'clamp(50px, 7vh, 60px)',
          width: '100%',
          maxWidth: '280px',
          borderRadius: '16px',
          boxShadow: '0px 14.533px 29.067px 0px rgba(51,9,22,0.2), inset 0px -6.685px 6.685px 0px #dc2960, inset 0px 6.685px 6.685px 0px #ff347b',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Fredoka One', cursive",
          fontSize: 'clamp(16px, 4vw, 18px)',
          color: 'white',
          marginTop: 'clamp(20px, 3vh, 26px)'
        }}
      >
        Yes
      </button>

    </div>
  );
}
