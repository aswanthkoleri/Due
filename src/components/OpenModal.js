import React from "react";
import Modal from 'react-modal';


const OpenModal=(props)=>(
    <Modal
    isOpen={!!props.optionSelected}
    contentLabel="Selected Option" 
    >
    <h3>Selected option</h3> 
    <p>{props.optionSelected}</p>
    <button onClick={props.closeModal}> close </button> 
    </Modal>  
);

export default OpenModal;