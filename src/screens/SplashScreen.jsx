import React, { useEffect } from 'react';

const img06LoveLock = "https://www.figma.com/api/mcp/asset/fd038488-d079-4096-be00-2f0ed9a942ef";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/9d903619-6af5-46c9-84ce-6921d6305dcf";
const img = "https://www.figma.com/api/mcp/asset/9a12ee3f-5e56-4e31-9357-dc2e4229fd53";

export default function SplashScreen({ navigate }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/question');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="screen" style={{ background: 'white', justifyContent: 'space-between', padding: '0' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        marginTop: 'clamp(180px, 25vh, 220px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={imgFrame1} 
            alt="" 
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: 'none'
            }}
          />
        </div>
        <div style={{
          position: 'relative',
          width: '55vw',
          maxWidth: '225px',
          aspectRatio: '1',
          overflow: 'hidden',
          borderRadius: '50%',
          zIndex: 1
        }}>
          <img 
            src={img06LoveLock} 
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
        width: 'clamp(40px, 12vw, 48px)',
        height: 'clamp(40px, 12vw, 48px)',
        marginBottom: 'clamp(100px, 15vh, 130px)',
        alignSelf: 'center'
      }}>
        <img 
          src={img} 
          alt="" 
          style={{
            display: 'block',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
}
