import React, { useState } from "react";
import "./App.css";
import Inputs from "./inputs";
import Output from "./output";
import Submit from "./submit";

const App = () => {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const handleDate = (value, title) => {
    if (title === "DAY") {
      setBirthDay(value);
      setErrors((prev) => ({ ...prev, day: validateDay(value) }));
    } else if (title === "MONTH") {
      setBirthMonth(value);
      setErrors((prev) => ({ ...prev, month: validateMonth(value) }));
    } else if (title === "YEAR") {
      setBirthYear(value);
      setErrors((prev) => ({ ...prev, year: validateYear(value) }));
    }
  };

  const validateDay = (day) => {
    if (!day) return "Day is required";
    return day < 1 || day > 31 ? "Invalid day" : "";
  };

  const validateMonth = (month) => {
    if (!month) return "Month is required";
    return month < 1 || month > 12 ? "Invalid month" : "";
  };

  const validateYear = (year) => {
    if (!year) return "Year is required";
    const currentYear = new Date().getFullYear();
    return year > currentYear ? "Invalid year" : "";
  };

  const calculateAge = () => {
    const birthDate = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dayError = validateDay(birthDay);
    const monthError = validateMonth(birthMonth);
    const yearError = validateYear(birthYear);

    setErrors({ day: dayError, month: monthError, year: yearError });

    if (!dayError && !monthError && !yearError) {
      calculateAge();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Inputs handleDate={handleDate} errors={errors} />
        <Submit handleSubmit={handleSubmit} />
        <Output
          birthYear={age.years}
          birthMonth={age.months}
          birthDay={age.days}
        />
      </div>
    </div>
  );
};

export default App;
