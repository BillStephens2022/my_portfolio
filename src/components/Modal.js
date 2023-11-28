function Modal({ showModal, closeModal, imageUrl }) {
    return (
      showModal && (
        <div className="modal" style={{ display: showModal ? 'flex' : 'none' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={imageUrl} alt="project pic" />
          </div>
        </div>
      )
    );
  }
  
  export default Modal;