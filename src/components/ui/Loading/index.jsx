import { Modal, Spinner } from "react-bootstrap";

export default function Loading(isLoading, showText) {
  return (
    <Modal
      show={isLoading}
      backdrop="static"
      keyboard={false}
      className="loading-container-wrapper d-flex justify-content-center align-items-center"
      contentClassName="loading-container "
      centered={true}
    >
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center ">
        <Spinner
          animation="border"
          //   variant="dark"
          className="loading"
        />
        {showText && <span className="mt-3">Loading...</span>}
      </Modal.Body>
    </Modal>
  );
}
