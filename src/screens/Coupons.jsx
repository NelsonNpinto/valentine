import React from 'react';
import { useNavigate } from 'react-router-dom';

const imgSubtract = "https://www.figma.com/api/mcp/asset/407632f1-7bc7-4f5a-8ade-0b71e9ededc3";
const imgVector1 = "https://www.figma.com/api/mcp/asset/5d842803-f087-4720-9725-9ea42a8e79e9";
const imgHearts = "https://www.figma.com/api/mcp/asset/10c4e6b8-6395-45ae-96cd-0a715a4b6bf3";
const imgHearts1 = "https://www.figma.com/api/mcp/asset/3d4c06da-bcaa-4257-86b2-3a3f8c2411ac";
const imgHearts2 = "https://www.figma.com/api/mcp/asset/4545ce51-42ca-44b8-ba63-0d7c6cc92b23";
const imgHearts3 = "https://www.figma.com/api/mcp/asset/537079c8-5af1-4191-8008-edcef64ae236";

const Coupon = ({ title, hearts }) => (
  <div style={{
    position: 'relative',
    width: '85vw',
    maxWidth: '342px',
    aspectRatio: '342/104'
  }}>
    <img src={imgSubtract} alt="" style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    }} />
    
    <div style={{
      position: 'absolute',
      left: '36%',
      top: '8%',
      width: '0',
      height: '82%'
    }}>
      <img src={imgVector1} alt="" style={{
        position: 'absolute',
        left: '-1px',
        width: '2px',
        height: '100%'
      }} />
    </div>

    <div style={{
      position: 'absolute',
      left: '10%',
      top: '19%',
      width: '18%',
      aspectRatio: '1',
      overflow: 'hidden'
    }}>
      <img src={hearts} alt="" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }} />
    </div>

    <p style={{
      position: 'absolute',
      left: '41%',
      top: '25%',
      fontFamily: "'Poppins', sans-serif",
      fontSize: 'clamp(14px, 4vw, 16px)',
      fontWeight: 500,
      color: '#4d4d4d',
      margin: 0
    }}>
      {title}
    </p>

    <p style={{
      position: 'absolute',
      left: '41%',
      top: '78%',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 'clamp(9px, 2.5vw, 10px)',
      fontWeight: 500,
      color: 'rgba(0,0,0,0.3)',
      margin: 0
    }}>
      Valid until 31 February 2025
    </p>
  </div>
);

export default function Coupons({ wonCoupons }) {
  const navigate = useNavigate();

  const couponData = {
    'Free CUDDLES': { hearts: imgHearts, title: 'Free cuddles' },
    'Free KISSES': { hearts: imgHearts1, title: 'Free kisses' },
    'Free HUGS': { hearts: imgHearts2, title: 'Free hugs' }
  };

  return (
    <div className="screen fade-in" style={{ background: 'white', justifyContent: 'flex-start', padding: '0 5vw', overflow: 'auto' }}>
      <p style={{
        marginTop: 'clamp(40px, 6vh, 52px)',
        fontFamily: "'Fredoka One', cursive",
        fontSize: 'clamp(20px, 5vw, 24px)',
        color: '#fad6e1',
        margin: 'clamp(40px, 6vh, 52px) 0 0',
        textAlign: 'center'
      }}>
        My Coupons
      </p>

      <div style={{
        marginTop: 'clamp(25px, 4vh, 35px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(20px, 3vh, 24px)',
        alignItems: 'center',
        width: '100%'
      }}>
        {wonCoupons.map((coupon, index) => {
          const data = couponData[coupon];
          return data ? (
            <Coupon key={index} title={data.title} hearts={data.hearts} />
          ) : null;
        })}
      </div>

      <div style={{
        marginTop: 'clamp(30px, 5vh, 45px)',
        marginBottom: 'clamp(20px, 3vh, 26px)',
        background: 'white',
        padding: 'clamp(15px, 4vw, 20px)',
        borderRadius: '30px',
        boxShadow: '4px -4px 4px 0px rgba(255,167,193,0.5), 0px 4px 4px 0px rgba(255,167,193,0.6)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        maxWidth: '400px',
        alignItems: 'center'
      }}>
        <div style={{
          width: 'clamp(50px, 15vw, 60px)',
          height: 'clamp(50px, 15vw, 60px)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <img src={imgHearts3} alt="" style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
        </div>

        <p style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 'clamp(24px, 6vw, 28px)',
          color: '#fad6e1',
          margin: 0,
          textAlign: 'center'
        }}>
          You've got a letter!
        </p>

        <button 
          onClick={() => navigate('/letter-closed')}
          className="button-hover"
          style={{
            background: '#ff2f6f',
            height: 'clamp(50px, 7vh, 60px)',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '16px',
            boxShadow: '0px 14.533px 29.067px 0px rgba(51,9,22,0.2), inset 0px -6.685px 6.685px 0px #dc2960, inset 0px 6.685px 6.685px 0px #ff347b',
            border: 'none',
            cursor: 'pointer',
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
