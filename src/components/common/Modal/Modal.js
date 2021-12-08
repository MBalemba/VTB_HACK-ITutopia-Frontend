import React from 'react';
import {MiddleContent, ModalContainer, ModalContent, ModalFooter, ModalHeader} from "./ModalStyle";
import MyButton from "../Buttons/MyButton";

const Modal = ({
                   active,
                   setActive,
                   children,
                   headerName='',


               }) => {
    return (
        <ModalContainer onClick={() => setActive(false)} className={active && 'active'}>


            <ModalContent className={active && 'active'} onClick={(e) => {
                e.stopPropagation()
            }}>
                <ModalHeader>
                    {headerName}
                </ModalHeader>

                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;