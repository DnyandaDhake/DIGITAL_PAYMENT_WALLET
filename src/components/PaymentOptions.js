import React from 'react';
import { FaMobile, FaMoneyBill, FaGift, FaBus, FaShoppingCart, FaCreditCard } from 'react-icons/fa';

const PaymentOptions = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Quick Actions</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6 mb-3">
            <button className="btn btn-outline-primary btn-block">
              <FaMobile /> Recharge
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn btn-outline-primary btn-block">
              <FaMoneyBill /> Transfer
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn btn-outline-primary btn-block">
              <FaGift /> Offers
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn btn-outline-primary btn-block">
              <FaBus /> Bus Tickets
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn btn-outline-primary btn-block">
              <FaShoppingCart /> Shopping
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn btn-outline-primary btn-block">
              <FaCreditCard /> Bill Payments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;