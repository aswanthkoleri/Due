import React from "react";
import Modal from 'react-modal';


const OpenModal=(props)=>(
    <Modal
    isOpen={!!props.optionSelected}
    contentLabel="Selected Option" 
    className="modal"
    
    >
    
    <h3 className="modal__title">Selected option</h3> 
    <p className="modal__body">{props.optionSelected}</p>
    <button onClick={props.closeModal}> close </button> 
    </Modal>  
);

export default OpenModal;