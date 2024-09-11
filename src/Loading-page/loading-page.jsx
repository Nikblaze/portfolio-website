import './loading-page.css';


const message = 'Hi, I am Nikhil!';
const words = message.split(' ');

function LoadingPage() {
  return (
    <>
      <div className="loading-screen">
        <div className="typing-container">
          <div className="typing-text">
            {words.map((word, index) => (
              <span key={index} className={`word word-${index}`} style={{ '--i': index }}>
                {word}
              </span>
            ))}
          </div>
        </div>
        <div className="particles"></div>
        <div className="circle-expansion"></div>
      </div>
    </>
  );
}
export default LoadingPage;
