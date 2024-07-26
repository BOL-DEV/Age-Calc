import { useState } from "react";
import "./App.css";
import Inputs from "./inputs";
import Submit from "./submit";
import Output from "./output";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDate = (value, date) => {
    date === "DAY" && setDay(value);
    date === "MONTH" && setMonth(value);
    date === "YEAR" && setYear(value);
  };

  const date = new Date();
  const curYear = date.getFullYear();
  const curMonth = date.getMonth() + 1;
  const curDay = +date.toDateString().slice(8, 10);

  let birthDay;
  let birthMonth;
  let birthYear;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(curYear);
    // console.log(curMonth);
    // console.log(curDay);

    // console.log(year);
    // console.log(month);
    // console.log(day);

    if (day === "" && month === "" && year === "") return;
    birthYear = curYear - year;
    birthMonth = curMonth - month;
    birthDay = curDay - day;

    // console.log(birthYear);
    // console.log(birthMonth);
    // console.log(birthDay);
  };

  return (
    <div className="App">
      <div className="container">
        <Inputs handleDate={handleDate} />
        <Submit handleSubmit={handleSubmit} />
        <Output
          birthYear={birthYear}
          birthMonth={birthMonth}
          birthDay={birthDay}
        />
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import Inputs from "./inputs";
// import Submit from "./submit";
// import Output from "./output";

// function App() {
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");
//   const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

//   const handleDate = (value, date) => {
//     if (date === "DAY") setDay(value);
//     if (date === "MONTH") setMonth(value);
//     if (date === "YEAR") setYear(value);
//   };

//   const handleSubmit = () => {
//     const isValidDate = (day, month, year) => {
//       const date = new Date(year, month - 1, day);
//       return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
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
//         days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
//       }

//       if (months < 0) {
//         years -= 1;
//         months += 12;
//       }

//       return { years, months, days };
//     };

//     setAge(calculateAge(day, month, year));
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <Inputs day={day} month={month} year={year} handleDate={handleDate} />
//         <Submit handleSubmit={handleSubmit} />
//         <Output age={age} />
//       </div>
//     </div>
//   );
// }

// export default App;
