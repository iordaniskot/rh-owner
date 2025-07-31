import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <style>{`
        .toggle-container * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .toggle-input {
          display: none;
        }

        .toggle-label {
          cursor: pointer;
          outline: transparent;
        }

        .toggle-div {
          height: 60px;
          width: 120px;
          background-color: #357bb3;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          transition: all 300ms ease;
          box-shadow: inset 1px 2px 2px rgba(0, 0, 0, 0.8),
            inset -1px -2px 2px rgba(0, 0, 0, 0.2), 2px 2px 2px rgba(255, 255, 255, 1);
          border: 3px solid white;
        }

        .toggle-div.night {
          background-color: #1d1f2b;
          border: 3px solid black;
        }

        .backdrops {
          position: absolute;
          left: 5px;
          top: 5px;
          height: 50px;
          width: 50px;
          transition: all 300ms ease;
        }

        .backdrop {
          height: 100px;
          width: 100px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 100%;
          position: absolute;
          left: 30%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 300ms ease;
        }

        .backdrop::after,
        .backdrop::before {
          content: "";
          height: 100px;
          width: 100px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 100%;
          position: absolute;
          transition: all 300ms ease;
        }

        .backdrop::before {
          left: 15%;
        }

        .backdrop::after {
          left: 30%;
        }

        .clouds {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 50%;
          left: 0;
          transform: translate(0, -50%);
          transition: all 300ms ease;
        }

        .cloud {
          position: absolute;
          right: 5%;
          top: 50%;
          background-color: #fbfbfb;
          height: 10px;
          width: 50px;
          border-radius: 0 50px 50px 50px;
          transform: scale(-0.8, 0.8);
          animation: floatCloud 6s ease-in-out infinite;
        }

        .cloud::before {
          content: "";
          position: absolute;
          background-color: #fbfbfb;
          height: 10px;
          width: 40px;
          bottom: 9px;
          left: 0;
          border-radius: 50px 50px 0 0px;
        }

        .cloud::after {
          content: "";
          position: absolute;
          background-color: #fbfbfb;
          height: 20px;
          width: 20px;
          bottom: 9px;
          left: 5px;
          border-radius: 100%;
        }

        .cloud-1 {
          top: 45%;
          right: 22%;
          transform: scale(-0.6, 0.6);
          opacity: 0.5;
          animation: floatCloud 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .cloud-2 {
          top: 20%;
          right: 0%;
          transform: scale(-0.6, 0.6);
          opacity: 0.5;
          animation: floatCloud 7s ease-in-out infinite;
          animation-delay: 2s;
        }

        .cloud-3 {
          top: 92%;
          right: 35%;
          animation: floatCloud 9s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .cloud-4 {
          top: 85%;
          right: 10%;
          transform: scale(-1, 1);
          animation: floatCloud 6.5s ease-in-out infinite;
          animation-delay: 3s;
        }

        .cloud-5 {
          top: 60%;
          right: -18%;
          transform: rotateZ(-50deg) scale(-1, 1);
          animation: floatCloud 8.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .sun-moon {
          height: 50px;
          width: 50px;
          background-color: #f1c428;
          border-radius: 100%;
          box-shadow: inset 1px 2px 1px rgba(255, 255, 255, 0.5),
            inset -1px -2px 1px rgba(0, 0, 0, 0.5), 2px 2px 5px rgba(0, 0, 0, 0.5);
          position: absolute;
          left: 5px;
          top: 5px;
          transition: 300ms ease;
        }

        .stars {
          position: absolute;
          height: 100%;
          width: 100%;
          top: -50%;
          left: 0;
          transform: translate(0, -50%);
          transition: all 300ms ease;
        }

        .star {
          position: absolute;
          left: 10%;
          top: 50%;
          height: 3px;
          width: 3px;
          border-radius: 100%;
          background-color: #c4c9d2;
          box-shadow: 0 0 2px #fff;
          animation: twinkle 1s infinite alternate;
        }

        .star::before {
          content: "";
          position: absolute;
          left: 300%;
          top: 300%;
          height: 2px;
          width: 2px;
          border-radius: 100%;
          background-color: #c4c9d2;
          box-shadow: 0 0 2px #fff;
        }

        .star::after {
          content: "";
          position: absolute;
          left: 400%;
          bottom: 400%;
          height: 2px;
          width: 2px;
          border-radius: 100%;
          background-color: #c4c9d2;
          box-shadow: 0 0 2px #fff;
        }

        .star-2 {
          left: 40%;
          top: 10%;
          transform: rotateZ(75deg) scale(1.1);
          animation: twinkle 1s infinite alternate;
          animation-delay: 300ms, 1s;
        }

        .star-3 {
          left: 40%;
          top: 60%;
          transform: rotateZ(150deg) scale(0.8);
          animation: twinkle 1s infinite alternate;
          animation-delay: 600ms, 2s;
        }

        .crater {
          display: none;
          position: absolute;
          left: 30%;
          top: 60%;
          transform: translate(-50%, -50%);
          height: 15px;
          width: 15px;
          background-color: #949eb2;
          border-radius: 100%;
          box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.4);
        }

        .crater::before {
          content: "";
          height: 7px;
          width: 7px;
          position: absolute;
          top: -100%;
          left: 50%;
          background-color: #949eb2;
          border-radius: 100%;
          box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.4);
        }

        .crater::after {
          content: "";
          height: 10px;
          width: 10px;
          position: absolute;
          bottom: 40%;
          left: 150%;
          background-color: #949eb2;
          border-radius: 100%;
          box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.4);
        }

        .toggle-div.night {
          background-color: #1d1f2b;
          border: 3px solid black;
        }

        .toggle-input:checked ~ .clouds {
          top: 150%;
        }

        .toggle-input:checked ~ .sun-moon {
          left: calc(100% - 55px);
          background-color: #c4c9d2;
          transform: rotateZ(180deg);
        }

        .toggle-input:checked ~ .backdrops {
          left: calc(100% - 65px);
        }

        .toggle-input:checked ~ .sun-moon .crater {
          display: block;
        }

        .toggle-input:checked ~ .stars {
          top: 50%;
        }

        @keyframes twinkle {
          from {
            opacity: 1.3;

          }
          to {

            opacity: 0.5;
          }
        }

        @keyframes floatCloud {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

      `}</style>
      
      <div className="toggle-container">
        <label htmlFor="toggle" className="toggle-label">
          <div className={`toggle-div ${isDark ? 'night' : ''}`}>
            <input 
              type="checkbox" 
              id="toggle" 
              className="toggle-input"
              checked={isDark}
              onChange={toggleDarkMode}
            />
            <div className="clouds">
              <div className="cloud cloud-1"></div>
              <div className="cloud cloud-2"></div>
              <div className="cloud cloud-3"></div>
              <div className="cloud cloud-4"></div>
              <div className="cloud cloud-5"></div>
            </div>
            <div className="backdrops">
              <div className="backdrop"></div>
            </div>
            <div className="stars">
              <div className="star star-1"></div>
              <div className="star star-2"></div>
              <div className="star star-3"></div>
            </div>
            <div className="sun-moon">
              <div className="crater"></div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DarkModeToggle;
