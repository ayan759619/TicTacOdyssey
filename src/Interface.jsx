import { useEffect, useRef, useState } from 'react';
import useGame from './stores/useGame.jsx';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import VANTA_CLOUDS from 'vanta/dist/vanta.clouds.min';

export default function Interface() {
  const startButton = useRef();
  const [status, start, setIsTouch] = useGame((state) => [
    state.status,
    state.start,
    state.setIsTouch,
  ]);
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    let cloudsEffect = null;

    if (showBackground) {
      cloudsEffect = VANTA_CLOUDS({
        el: ".interface",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x8f69d9,
        cloudColor: 0xc3c0e8,
        cloudShadowColor: 0x182c50,
        sunGlareColor: 0xff9000,
        speed: 2.20
      });
    }

    return () => {
      if (cloudsEffect) {
        cloudsEffect.destroy();
      }
    };
  }, [showBackground]);

  const onStartClick = (event, data) => {
    start();
    startButton.current.blur();
    setShowBackground(false);
  };

  const onTouchStart = () => {
    setIsTouch(true);
  };

  return (
    <div className={`interface ${showBackground ? 'vanta-clouds' : ''}`}>
      {/* Intro / outro */}
      <div
        className={`screen intro ${
          status === 'intro' || status === 'outro' ? 'is-visible' : ''
        }`}
      >
  <h1 className="title">Tic Tac Odyssey</h1>
            <h1 className="sub-title">A <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank">R3F </a> game by <a href="https://github.com/ayan759619" target="_blank">Ayan Karmakar</a> </h1>
            {/* for Tic-Tac Lovers */}
            <h1>    
                <div className="description">
                <div className="side is-left">
                        Interested in learning how to create this type of experience?
                        <br />
                        Reach Me Out...
                        <br /><br />
                        You Liked it 💜🦄🫧✨
                        <br />
                        Reach Out Now...
                 </div>

                <div className="side is-right">
                    <div className="sub-title">
                        <a href="https://github.com/ayan759619" target="_blank">
                            <FaGithub /> 
                        </a>
                        </div>
                        <div className="sub-title">
                        <a href="https://www.linkedin.com/in/ayan759619/" target="_blank">
                            <FaLinkedin /> 
                        </a>
                       
                        </div>
                        <div className="sub-title">
                        <a href="https://twitter.com/Ayan759619" target="_blank">
                            <FaTwitter /> 
                        </a>
                        </div>
                        <div className="sub-title">
                        <a href="mailto:ayan759619@gmail.com" target="_blank">
                            <FaEnvelope />
                        </a>
                        </div>
                    </div>
                </div>
            </h1> 
            <button
          ref={startButton}
          className="start-button"
          onTouchStart={onTouchStart}
          onClick={onStartClick}
        >
                <div className="video">
                    <video src="./videos/button-preview.mp4" muted autoPlay loop />
                </div>
                { status === 'intro' && (
                    <div className="label"><span className="letter neg-2">s</span><span className="letter neg-1">t</span>a<span className="letter pos-1">r</span><span className="letter pos-2">t</span></div>
                ) }
                { status === 'outro' && (
                    <div className="label"><span className="letter neg-3">r</span><span className="letter neg-2">e</span><span className="letter neg-1">s</span><span className="letter">t</span><span className="letter pos-1">a</span><span className="letter pos-2">r</span><span className="letter pos-3">t</span></div>
                ) }
                
            </button>

            { status === 'outro' && (
              <div className="reward-section">
              <br/>
              <br/>
              <h3>Congratulations on reaching this milestone! 🎉</h3>
  
  <br/>
      <h2>
      <p>As a token of appreciation, check out the rewards:</p>
   
      <a href="https://github.com/ayan759619/TicTacOdyssey"> SOURCE CODE of this project   <FaGithub /></a>
      </h2>
      <br/>
      <p>If you enjoyed the game, please consider leaving a ⭐️ star on this GitHub project!  Your support means a lot!</p>
    </div>
                ) }
      </div>
    </div>
  );
}
