// import { useState } from "react";
import "./output.css";
const Output = (birthYear, birthMonth, birthDay) => {
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
      <h1>{title}</h1>
    </div>
  );
};

export default Output;

// import { useEffect, useState } from "react";
// import "./output.css";

// const Output = ({ day, month, year, triggerCalculation }) => {
//   const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

//   useEffect(() => {
//     const isValidDate = (day, month, year) => {
//       const date = new Date(year, month - 1, day);
//       return (
//         date.getFullYear() === year &&
//         date.getMonth() === month - 1 &&
//         date.getDate() === day
//       );
//     };

//     const calculateAge = (birthDay, birthMonth, birthYear) => {
//       if (!isValidDate(birthDay, birthMonth, birthYear)) {
//         return { years: "--", months: "--", days: "--" };
//       }

//       const currentDate = new Date();
//       const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

//       let years = currentDate.getFullYear() - birthDate.getFullYear();
//       let months = currentDate.getMonth() - birthDate.getMonth();
//       let days = currentDate.getDate() - birthDate.getDate();

//       if (days < 0) {
//         months -= 1;
//         days += new Date(
//           currentDate.getFullYear(),
//           currentDate.getMonth(),
//           0
//         ).getDate();
//       }

//       if (months < 0) {
//         years -= 1;
//         months += 12;
//       }

//       return { years, months, days };
//     };

//     setAge(calculateAge(day, month, year));
//   }, [day, month, year, triggerCalculation]);

//   return (
//     <div className="output-cont">
//       <OutputContent title="years" value={age.years} />
//       <OutputContent title="months" value={age.months} />
//       <OutputContent title="days" value={age.days} />
//     </div>
//   );
// };

// const OutputContent = ({ title, value }) => {
//   return (
//     <div className="content">
//       <h1>{value}</h1>
//       <h1>{title}</h1>
//     </div>
//   );
// };

// export default Output;
