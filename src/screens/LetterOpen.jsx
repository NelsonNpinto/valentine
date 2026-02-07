import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assests/nelsons/nelson1.jpeg';
import photo2 from '../assests/nelsons/nelson2.jpeg';
import photo3 from '../assests/nelsons/nelson3.jpeg';

const imgPhotoStrip = "https://www.figma.com/api/mcp/asset/6783fd3e-1102-431a-8217-5ec302c11b05";
const imgImage4 = "https://www.figma.com/api/mcp/asset/31d542dd-323e-4e2b-a3a8-1ffaae2c20b5";
const imgImage2 = "https://www.figma.com/api/mcp/asset/f14e4f6f-5717-4d4f-aa94-213a0488b894";

export default function LetterOpen({ resetState }) {
  const navigate = useNavigate();

  const handleBackToStart = () => {
    if (resetState) {
      resetState();
    }
    navigate('/question');
  };

  return (
    <div className="screen fade-in" style={{ background: 'white', justifyContent: 'flex-start', padding: '0', overflow: 'auto' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '5vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          left: 'clamp(10px, 3vw, 15px)',
          top: 'clamp(380px, 50vh, 450px)',
          width: 'clamp(280px, 85vw, 352px)',
          height: 'auto',
          aspectRatio: '352/250',
          transform: 'rotate(4.02deg)',
          zIndex: 1
        }}>
          <img src={imgImage4} alt="" style={{
            position: 'absolute',
            width: '125.17%',
            height: '176.35%',
            left: '-12.59%',
            top: '-38.42%',
            maxWidth: 'none'
          }} />
        </div>

        <div style={{
          position: 'relative',
          width: 'clamp(310px, 85vw, 360px)',
          maxWidth: '360px',
          aspectRatio: '270/385',
          transform: 'rotate(-3.36deg)',
          boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
          marginTop: 'clamp(70px, 10vh, 100px)',
          zIndex: 2
        }}>
          <img src={imgImage2} alt="" style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
        </div>

        <div style={{
          position: 'absolute',
          right: 'clamp(8px, 3vw, 18px)',
          top: 'clamp(260px, 36vh, 320px)',
          width: 'clamp(180px, 50vw, 220px)',
          maxWidth: '220px',
          aspectRatio: '168.569/333.511',
          transform: 'rotate(13.41deg)',
          zIndex: 3
        }}>
          <div style={{
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '4vw 2vw 1vw',
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25), 0px 1.463px 7.803px 0px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vw',
            alignItems: 'center',
            position: 'relative'
          }}>
            <img src={imgPhotoStrip} alt="" style={{
              position: 'absolute',
              width: '185.47%',
              height: '100%',
              left: '-55.58%',
              top: '-0.04%',
              maxWidth: 'none'
            }} />
            
            <div style={{
              background: 'white',
              width: 'clamp(70px, 19vw, 90px)',
              maxWidth: '90px',
              aspectRatio: '68.273/78.026',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1
            }}>
              <img src={photo1} alt="" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            
            <div style={{
              width: 'clamp(70px, 19vw, 90px)',
              maxWidth: '90px',
              aspectRatio: '68.273/78.026',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1
            }}>
              <img src={photo2} alt="" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            
            <div style={{
              width: 'clamp(70px, 19vw, 90px)',
              maxWidth: '90px',
              aspectRatio: '68.273/78.026',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1
            }}>
              <img src={photo3} alt="" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            
            <p style={{
              fontFamily: "'Italianno', cursive",
              fontSize: 'clamp(10px, 3vw, 12.849px)',
              color: 'black',
              textAlign: 'center',
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
            </p>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          left: 'clamp(30px, 12vw, 50px)',
          top: 'clamp(150px, 22vh, 190px)',
          width: 'clamp(190px, 55vw, 223px)',
          maxWidth: '223px',
          transform: 'rotate(-2.98deg)',
          zIndex: 3
        }}>
          <p style={{
            fontFamily: "'Handlee', cursive",
            fontSize: 'clamp(8px, 2.5vw, 10px)',
            lineHeight: '1.3',
            color: 'black',
            margin: 0
          }}>
          
          <br /><br />
          I love you so much, more than words can ever explain. I feel incredibly lucky to have you in my life, and I don't take that for granted even for a second. You make my world more meaningful just by being in it.
          <br /><br />
          I want to be with you and make everyday special to you—by loving you better, choosing you every time, and proving through my actions how much you mean to me.
          <br /><br />
          You are my, my comfort, my happiness, and my heart. I'm so grateful for you, always.
          <br /><br />
          And i will always choose you above anyone, youre the most most beautiful girl in this world, you are so perfect and you carry yourself perfectly.
          <br /><br />
          I am lucky to have a girl like you in my life.
          <br /><br />
          I love you ♥️😘
          </p>
        </div>

        <button 
          onClick={handleBackToStart}
          className="button-hover"
          style={{
            position: 'absolute',
            right: 'clamp(15px, 5vw, 25px)',
            bottom: 'clamp(50px, 8vh, 70px)',
            background: '#ff2f6f',
            height: 'clamp(50px, 7vh, 60px)',
            width: 'clamp(120px, 35vw, 143px)',
            borderRadius: '16px',
            boxShadow: '0px 14.533px 29.067px 0px rgba(51,9,22,0.2), inset 0px -6.685px 6.685px 0px #dc2960, inset 0px 6.685px 6.685px 0px #ff347b',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(16px, 4vw, 18px)',
            color: 'white',
            zIndex: 4
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
