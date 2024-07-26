import "./inputs.css";

const Inputs = ({ handleDate }) => {
  return (
    <div className="input-cont">
      <Input title="DAY" placeholder="DD" handleDate={handleDate} />
      <Input title="MONTH" placeholder="MM" handleDate={handleDate} />
      <Input title="YEAR" placeholder="YYYY" handleDate={handleDate} />
    </div>
  );
};

const Input = ({ title, placeholder, handleDate }) => {
  return (
    <div>
      <p>{title}</p>
      <input
        type="number"
        placeholder={placeholder}
        onChange={(e) => handleDate(+e.target.value, title)}
      />
    </div>
  );
};

export default Inputs;

// import "./inputs.css";

// const Inputs = ({ handleDate }) => {
//   return (
//     <div className="input-cont">
//       <Input title="DAY" placeholder="DD" handleDate={handleDate} />
//       <Input title="MONTH" placeholder="MM" handleDate={handleDate} />
//       <Input title="YEAR" placeholder="YYYY" handleDate={handleDate} />
//     </div>
//   );
// };

// const Input = ({ title, placeholder, handleDate }) => {
//   return (
//     <div>
//       <p>{title}</p>
//       <input
//         type="number"
//         placeholder={placeholder}
//         onChange={(e) => handleDate(+e.target.value, title)}
//       />
//     </div>
//   );
// };

// export default Inputs;
