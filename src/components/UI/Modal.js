import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal display_block">
      <section className="modal_main">
        <p>{props.errorMessage}</p>
        <button onClick={props.handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
