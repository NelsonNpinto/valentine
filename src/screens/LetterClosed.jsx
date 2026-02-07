import React from 'react';
import { useNavigate } from 'react-router-dom';

const imgImage3 = "https://www.figma.com/api/mcp/asset/899d347c-f861-44f7-b555-529e9ce31992";
const imgStar4 = "https://www.figma.com/api/mcp/asset/c333e4cb-6f88-495b-8c90-51b0f76f0904";

export default function LetterClosed() {
  const navigate = useNavigate();

  return (
    <div className="screen fade-in" style={{ background: 'white', justifyContent: 'flex-start', padding: '0 5vw' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        marginTop: 'clamp(80px, 12vh, 105px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          width: '130%',
          height: 'auto',
          aspectRatio: '512/481'
        }}>
          <img src={imgStar4} alt="" style={{
            width: '100%',
            height: '100%',
            maxWidth: 'none'
          }} />
        </div>

        <div style={{
          position: 'relative',
          width: '70vw',
          maxWidth: '270px',
          aspectRatio: '270/385',
          transform: 'rotate(-3.36deg)',
          boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
          zIndex: 1
        }} />

        <button 
          onClick={() => navigate('/letter-open')}
          style={{
            position: 'absolute',
            width: '60vw',
            maxWidth: '246px',
            aspectRatio: '246/174',
            boxShadow: '0px 4px 6px 0px rgba(226,100,147,0.6), 4px 4px 10px 0px rgba(226,100,147,0.2)',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: 0,
            overflow: 'hidden',
            zIndex: 2
          }}
        >
          <img src={imgImage3} alt="" style={{
            position: 'absolute',
            width: '140%',
            height: '198.28%',
            left: '-20%',
            top: '-49.36%',
            maxWidth: 'none'
          }} />
        </button>
      </div>

      <p style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: 'clamp(18px, 5vw, 20px)',
        color: '#fad6e1',
        textAlign: 'center',
        margin: 'clamp(50px, 8vh, 70px) auto 0',
        maxWidth: '300px'
      }}>
        Tap the envelope to open
      </p>
    </div>
  );
}
