import './submit.css'


const Submit = ({ handleSubmit }) => {
  return (
    <form className="submit-cont" onSubmit={handleSubmit}>
      <hr />
      <button type="submit">
        <img src="/assets/images/icon-arrow.svg" alt="habeeb" />
      </button>
    </form>
  );
};

export default Submit;


