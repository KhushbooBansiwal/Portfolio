import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${idx +i}`}>
          {char}
        </span>
      ))}
    </>
  );
};

export default AnimatedLetters;
