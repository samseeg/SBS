import React from 'react';

const CartModal = ({ show, onHide }) => {
    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart</h5>
                        <button type="button" className="btn-close" onClick={onHide}></button>
                    </div>
                    <div className="modal-body">Your cart is empty</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onHide}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
