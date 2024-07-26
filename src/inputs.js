import React from "react";
import "./inputs.css"

const Inputs = ({ handleDate, errors }) => {
  return (
    <form className="input-cont">
      <Input
        title="DAY"
        placeholder="DD"
        handleDate={handleDate}
        error={errors.day}
      />
      <Input
        title="MONTH"
        placeholder="MM"
        handleDate={handleDate}
        error={errors.month}
      />
      <Input
        title="YEAR"
        placeholder="YYYY"
        handleDate={handleDate}
        error={errors.year}
      />
    </form>
  );
};

const Input = ({ title, placeholder, handleDate, error }) => {
  return (
    <div>
      <p>{title}</p>
      <input
        type="number"
        placeholder={placeholder}
        onChange={(e) => handleDate(+e.target.value, title)}
        required
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Inputs;
