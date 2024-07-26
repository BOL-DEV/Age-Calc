import "./output.css";


const Output = ({ birthYear, birthMonth, birthDay }) => {
  return (
    <div className="output-cont">
      <OutputContent title="years" results={birthYear} />
      <OutputContent title="months" results={birthMonth} />
      <OutputContent title="days" results={birthDay} />
    </div>
  );
};

const OutputContent = ({ title, results }) => {
  return (
    <div className="content">
      <h1>{results}</h1>
      <h1>{ title}</h1>
    </div>
  );
};

export default Output;


