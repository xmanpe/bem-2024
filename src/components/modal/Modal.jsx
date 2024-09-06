import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import './Modal.scss';

// import components
import Button from "../cta/Button";

const Modal = ({ isOpen, onClose, title, message, buttonText }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div 
                className="modal-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                duration: 0.5, 
                ease: [0.6, -0.05, 0.01, 0.99]
                }}
            >
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                {message && <p dangerouslySetInnerHTML={{ __html: message }} />}
                <Button variant="primary" section="" onClick={onClose}>
                    {buttonText || 'OK'}
                </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;