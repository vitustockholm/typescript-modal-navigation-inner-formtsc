import React, { ReactNode, MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Styles
import {
  Overlay,
  ModalWrapper,
  StyledModal,
  CloseButtonWrapper,
  CloseButton,
} from './Modal.style';

// Interfaces
interface IModal {
  children: ReactNode;
  onClose: () => void;
  width?: string;
  hasCloseOnOuter?: boolean;
  hasCloseOnEscape?: boolean;
}

const Modal = ({
  children,
  onClose,
  width = '700px',
  hasCloseOnOuter = true,
  hasCloseOnEscape = true,
}: IModal) => {
  // Hooks
  // -- side effects
  useEffect(() => {
    if (hasCloseOnEscape) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      });
    }
  }, [onClose]);

  // Custom funtions
  const closeOnOuter = (e: MouseEvent<HTMLDivElement>) => {
    if (hasCloseOnOuter) {
      const target = e.target as HTMLDivElement;

      if (target.dataset.id === 'modalWrapper') onClose();
      return;
    }
  };

  return ReactDOM.createPortal(
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOuter(e)} data-id='modalWrapper'>
        <StyledModal width={width}>
          <CloseButtonWrapper>
            <CloseButton onClick={onClose}>✕</CloseButton>
          </CloseButtonWrapper>
          <div>{children}</div>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('portal') as HTMLDivElement
  );
};

export default Modal;
