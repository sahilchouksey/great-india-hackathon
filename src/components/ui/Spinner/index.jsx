import { Modal, Spinner } from "react-bootstrap";

export default function Loading(isLoading) {
  return isLoading ? (
    <div className="loading-container">
      <div
        show={isLoading}
        className="loading-container-wrapper d-flex justify-content-center align-items-center"
      >
        <Spinner
          animation="border"
          //   variant="dark"
          className="loading"
        />
      </div>
    </div>
  ) : null;
}
