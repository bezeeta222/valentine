import { useState, useCallback } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import PropTypes from "prop-types";

// Add keyframes animation at the top
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  @keyframes heartbeat {
    0% { transform: scale(1); }
    25% { transform: scale(1.1); }
    40% { transform: scale(1); }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  @keyframes wobble {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }
`;
document.head.appendChild(style);

const NO_BUTTON_PHRASES = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
  "Is that your final answer?",
  "You're breaking my heart ;(",
  "Plsss? :( You're breaking my heart",
];

const ValentineImages = () => (
  <>
    <img
      src={lovesvg}
      className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28 hover:scale-110 transition-transform duration-300"
      alt="Decorative love symbol"
      style={{ animation: 'float 3s ease-in-out infinite' }}
    />
    <img
      src={lovesvg2}
      className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32 hover:scale-110 transition-transform duration-300"
      alt="Decorative love symbol"
      style={{ animation: 'float 3s ease-in-out infinite reverse' }}
    />
    <img
      className="h-[230px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
      alt="Cute bear with roses"
      style={{ animation: 'heartbeat 2s ease-in-out infinite' }}
    />
  </>
);

const SuccessView = () => (
  <>
    <img
      src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
      alt="Celebrating bear kiss"
      className="animate-bounce hover:animate-none"
      style={{ animation: 'float 3s ease-in-out infinite' }}
    />
    <div 
      className="text-4xl md:text-6xl font-bold my-4 text-rose-600"
      style={{ animation: 'wobble 2s ease-in-out infinite' }}
    >
      Ok Yayyyyy!!!
    </div>
  </>
);

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = useCallback(() => {
    setNoCount(noCount + 1);
  }, [noCount]);

  const getNoButtonText = useCallback(() => {
    return NO_BUTTON_PHRASES[Math.min(noCount, NO_BUTTON_PHRASES.length - 1)];
  }, [noCount]);

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900 ">
      {yesPressed ? (
        <SuccessView />
      ) : (
        <>
          <ValentineImages />
          <h1 
            className="text-4xl md:text-6xl my-4 text-center text-rose-600 hover:scale-105 transition-transform duration-300"
            style={{ animation: 'wobble 2s ease-in-out infinite' }}
          >
            Will you be my Valentine Fatin?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
              style={{ 
                fontSize: yesButtonSize,
                animation: 'heartbeat 2s ease-in-out infinite'
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4 hover:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ animation: noCount > 0 ? 'wobble 1s ease-in-out infinite' : '' }}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      {/* <Footer githubLink="https://github.com/Xeven777/valentine" /> */}
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      // href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};

Footer.propTypes = {
  githubLink: PropTypes.string.isRequired,
};
