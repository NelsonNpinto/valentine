import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const imgEllipse7 = "https://www.figma.com/api/mcp/asset/efbf01f2-2a2a-4eb0-a71a-64ce3085d559";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/c5c75443-9696-4ce7-b3ab-0f22d89f46ee";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/349cc864-04fe-4d00-a3d8-b6887bc38a99";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/2441759c-f2dc-4150-ab92-2938e2e7331b";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/562a2632-1506-41df-a7c3-4d905ed441f1";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/14f2e0e2-cab6-4d53-bd03-f4fc5f7fb7c0";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/e3579bdb-69fc-4297-b0d5-225df8ca8bd9";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/6756ab9d-0142-4fd3-ada2-d7f732711363";
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/8223b8f9-c2d0-4962-a9fa-97e5f9e9cdc8";
const img07LoveGift = "https://www.figma.com/api/mcp/asset/02efab97-230b-4ccd-8e73-59e3400157b8";

export default function SpinWheel({ spinsLeft, setSpinsLeft, wonCoupons, setWonCoupons }) {
  const navigate = useNavigate();
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentPrize, setCurrentPrize] = useState('');
  const isLastSpinRef = useRef(false);

  const prizes = ['Free HUGS', 'Free KISSES', 'Free CUDDLES'];

  const handleSpin = () => {
    if (spinning || spinsLeft <= 0) return;

    setSpinning(true);
    
    // Fixed sequence: 1st spin = HUGS, 2nd spin = CUDDLES, 3rd spin = KISSES
    const prizeSequence = ['Free HUGS', 'Free CUDDLES', 'Free KISSES'];
    const currentSpinNumber = 3 - spinsLeft;
    const prizeToWin = prizeSequence[currentSpinNumber];
    
    // Fixed rotation positions for each spin (independent of prize)
    // Spin 1: 2070°, Spin 2: 1950°, Spin 3: 1830°
    const rotationsBySpinNumber = [
      1800 + 270,   // Spin 1 rotation
      1800 + 150,   // Spin 2 rotation
      1800 + 30     // Spin 3 rotation
    ];
    
    setRotation(rotationsBySpinNumber[currentSpinNumber]);
    
    // Check if this will be the last spin
    const newSpinsLeft = spinsLeft - 1;
    isLastSpinRef.current = newSpinsLeft === 0;

    // After animation delay, show the prize
    setTimeout(() => {
      setSpinning(false);
      
      setCurrentPrize(prizeToWin);
      setShowModal(true);
      setWonCoupons([...wonCoupons, prizeToWin]);
      
      // Decrement spins
      setSpinsLeft(newSpinsLeft);
    }, 2000);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Navigate to coupons if this was the last spin
    if (isLastSpinRef.current) {
      navigate('/coupons');
    }
  };

  const getSpinMessage = () => {
    if (spinsLeft === 3) return "You've got 3 times to spin! Trust your gut!";
    if (spinsLeft === 2) return "You've got 2 times left to spin!";
    return "You've got 1 time left to spin! Let's go!";
  };

  return (
    <div className="screen" style={{ background: '#fad6e1' }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '103px',
        transform: 'translateX(-50%)',
        fontFamily: "'Fredoka One', cursive",
        fontSize: '28px',
        color: 'white',
        textAlign: 'center',
        whiteSpace: 'nowrap'
      }}>
        <p style={{ margin: 0 }}>Spin the wheel and</p>
        <p style={{ margin: 0 }}> win coupons!</p>
      </div>

      <p style={{
        position: 'absolute',
        left: '50%',
        top: '191px',
        transform: 'translateX(-50%)',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '12px',
        fontWeight: 600,
        color: '#ea4986',
        textAlign: 'center',
        width: '279px',
        margin: 0
      }}>
        {getSpinMessage()}
      </p>

      <div style={{
        position: 'absolute',
        left: '53px',
        top: '228px',
        width: '283px',
        height: '283px',
        background: '#ea4986',
        borderRadius: '141.5px',
        padding: '8px',
        boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25), 0px 15px 30px 0px rgba(200,53,98,0.29)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '267px',
          height: '267px',
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? 'transform 2s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
        }}>
          <div style={{
            position: 'absolute',
            left: '-15px',
            top: '-15px',
            width: '297px',
            height: '297px'
          }}>
            <img src={imgEllipse7} alt="" style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }} />
          </div>

          <div style={{
            position: 'absolute',
            left: '16px',
            top: '16px',
            width: '251px',
            height: '251px'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '50%',
              left: '50%',
              right: '0',
              top: '2.45%'
            }}>
              <img src={imgEllipse2} alt="" style={{
                width: '100%',
                height: '100%',
                display: 'block'
              }} />
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '216.39px',
            top: '51.29px',
            width: '62.227px',
            height: '78.273px',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ transform: 'rotate(55.38deg)' }}>
              <p style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '16px',
                color: !spinning && currentPrize === 'Free HUGS' ? 'white' : '#ea4986',
                textAlign: 'center',
                margin: 0,
                textShadow: !spinning && currentPrize === 'Free HUGS' ? '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' : 'none',
                transition: 'all 0.3s ease'
              }}>Free HUGS</p>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '16px',
            top: '16px',
            width: '251px',
            height: '251px'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '50%',
              left: '9.62%',
              right: '34.43%',
              top: '0'
            }}>
              <img src={imgEllipse3} alt="" style={{
                width: '100%',
                height: '100%',
                display: 'block'
              }} />
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '116.19px',
            top: '33px',
            width: '92.382px',
            height: '46.467px',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ transform: 'rotate(-18.2deg)' }}>
              <p style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '16px',
                color: !spinning && currentPrize === 'Free KISSES' ? 'white' : '#ea4986',
                textAlign: 'center',
                margin: 0,
                textShadow: !spinning && currentPrize === 'Free KISSES' ? '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' : 'none',
                transition: 'all 0.3s ease'
              }}>Free KISSES</p>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '16px',
            top: '16px',
            width: '251px',
            height: '251px'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '20.65%',
              left: '0',
              right: '50%',
              top: '20.57%'
            }}>
              <img src={imgEllipse4} alt="" style={{
                width: '100%',
                height: '100%',
                display: 'block'
              }} />
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '16px',
            top: '16px',
            width: '251px',
            height: '251px'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '9.57%',
              right: '34.52%',
              top: '50%'
            }}>
              <img src={imgEllipse5} alt="" style={{
                width: '100%',
                height: '100%',
                display: 'block'
              }} />
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '114.35px',
            top: '203.25px',
            width: '81.706px',
            height: '57.3px',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ transform: 'rotate(-163.64deg)' }}>
              <div style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '16px',
                color: !spinning && currentPrize === 'Free CUDDLES' ? 'white' : '#ea4986',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                textShadow: !spinning && currentPrize === 'Free CUDDLES' ? '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' : 'none',
                transition: 'all 0.3s ease'
              }}>
                <p style={{ margin: 0 }}>Free </p>
                <p style={{ margin: 0 }}>CUDDLES</p>
              </div>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '141.5px',
            top: '141.1px',
            width: '125.5px',
            height: '119.63px'
          }}>
            <img src={imgEllipse6} alt="" style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }} />
          </div>

          <div style={{
            position: 'absolute',
            left: '124px',
            top: '121px',
            width: '36px',
            height: '36px'
          }}>
            <img src={imgEllipse8} alt="" style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }} />
          </div>

          <div style={{
            position: 'absolute',
            left: '124px',
            top: '124px',
            width: '36px',
            height: '36px'
          }}>
            <div style={{
              position: 'absolute',
              left: '-4px',
              top: '0',
              right: '-4px',
              bottom: '-8px'
            }}>
              <img src={imgEllipse9} alt="" style={{
                width: '100%',
                height: '100%',
                display: 'block'
              }} />
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          left: '124px',
          top: '-17px',
          width: '36.058px',
          height: '50.042px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            transform: 'rotate(179.93deg)',
            width: '36px',
            height: '50px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '25%',
              left: '9.46%',
              right: '9.46%',
              top: '6.42%'
            }}>
              <img src={imgFrame1} alt="" style={{
                width: '100%',
                height: '100%',
                display: 'block'
              }} />
            </div>
          </div>
        </div>

      </div>

      <button 
        onClick={handleSpin}
        disabled={spinning || spinsLeft <= 0}
        className="button-hover"
        style={{
          position: 'absolute',
          left: '43px',
          top: '568px',
          width: '299px',
          height: '48px',
          background: spinning || spinsLeft <= 0 ? 'rgba(107,107,107,0.5)' : '#ff2f6f',
          borderRadius: '16px',
          boxShadow: '0px 14.533px 20px 0px rgba(200,53,98,0.18), inset 0px -6.685px 6.685px 0px #dc2960, inset 0px 6.685px 6.685px 0px #ff347b',
          border: 'none',
          cursor: spinning || spinsLeft <= 0 ? 'not-allowed' : 'pointer'
        }}
      >
        <p style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: '18px',
          color: 'white',
          margin: 0,
          textAlign: 'center'
        }}>
          {spinning ? 'Spinning...' : 'Spin'}
        </p>
      </button>

      {showModal && (
        <>
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backdropFilter: 'blur(5px)',
            background: 'rgba(109,109,109,0.4)',
            width: '410px',
            height: '844px'
          }} />

          <div className="scale-in" style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(50% - 8px)',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            alignItems: 'center'
          }}>
            <div style={{
              width: '201px',
              height: '130px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={img07LoveGift} alt="" style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'center',
              width: '279px'
            }}>
              <p style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '28px',
                color: '#fad6e1',
                margin: 0
              }}>
                Congratulations!
              </p>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: '#ea4986',
                textAlign: 'center',
                margin: 0
              }}>
                You won {currentPrize.toLowerCase()}!
              </p>
            </div>

            <button 
              onClick={handleModalClose}
              className="button-hover"
              style={{
                background: '#ff2f6f',
                height: '60px',
                width: '279px',
                borderRadius: '16px',
                boxShadow: '0px 14.533px 29.067px 0px rgba(51,9,22,0.2), inset 0px -6.685px 6.685px 0px #dc2960, inset 0px 6.685px 6.685px 0px #ff347b',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <p style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '18px',
                color: 'white',
                margin: 0,
                textAlign: 'center'
              }}>
                {isLastSpinRef.current ? 'Continue' : 'Spin Again'}
              </p>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
