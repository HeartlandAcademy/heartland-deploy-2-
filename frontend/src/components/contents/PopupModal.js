import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { listModal } from "../../actions/modalActions";
import { useSelector, useDispatch } from "react-redux";

export default function PopupModal(props) {
  const addedModal = useSelector((state) => state.addedModal);
  const { loading, modal } = addedModal;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listModal());
  }, [dispatch]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      {loading ? (
        <h4>Loading.....</h4>
      ) : (
        <Modal.Body>
          {modal && modal.length === 0 ? (
            ""
          ) : (
            <img
              className="d-block w-100"
              src={modal && modal[0].image}
              alt="Second slide"
            />
          )}
        </Modal.Body>
      )}
    </Modal>
  );
}
