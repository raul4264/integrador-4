// ModalWrapper.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/cartSlice";

const ModalWrapper = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalType, product } = useSelector(
    (state) => state.cart
  );

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleConfirm = () => {
    // Lógica específica según el tipo de modal
    // Puedes despachar acciones adicionales o realizar acciones específicas aquí

    // Cerrar el modal
    dispatch(closeModal());
  };

  const renderModalContent = () => {
    switch (modalType) {
      case "confirmarAgregar":
        return (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Agregar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¿Estás seguro de que deseas agregar {product.nombre} al carrito?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleConfirm}>
                Confirmar
              </Button>
            </Modal.Footer>
          </>
        );

      /*   case 'confirmarEliminar':
        return (
          // Similar a confirmarAgregar, adaptar según tus necesidades
        ); */

      case "confirmarCompra":
        return (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¿Estás seguro de que deseas finalizar la compra?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleConfirm}>
                Confirmar Compra
              </Button>
            </Modal.Footer>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Modal show={isModalOpen} onHide={handleClose}>
      {renderModalContent()}
    </Modal>
  );
};

export default ModalWrapper;
