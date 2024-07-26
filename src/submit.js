import './submit.css'

const Submit = ({handleSubmit}) => {
    return (
      <form className="submit-cont">
        <hr/>
        <button onClick={handleSubmit}>
          <img src="/assets/images/icon-arrow.svg" alt="habeeb" />
        </button>
      </form>
    );
}

export default Submit

// import "./submit.css";

// const Submit = ({ handleSubmit }) => {
//   return (
//     <div className="submit-cont">
//       <hr />
//       <button onClick={handleSubmit}>
//         <img src="/assets/images/icon-arrow.svg" alt="submit" />
//       </button>
//     </div>
//   );
// };

// export default Submit;
