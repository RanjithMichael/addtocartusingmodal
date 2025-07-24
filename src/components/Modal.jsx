import React from 'react';

const Modal = ({ items, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cart Items</h2>
          <button onClick={onClose} className="text-red-500 font-bold">X</button>
        </div>
        {items.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-sm text-red-600 font-medium"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Modal;