import React, { useState } from 'react';

const ItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    itemId: '',
    quantity: '',
    branch_id: '',
    unit: '',
    variant: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Item ID:</label>
        <input type="number" name="itemId" value={formData.itemId} onChange={handleChange} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
      </div>
      <div>
        <label>Branch ID:</label>
        <input type="number" name="branch_id" value={formData.branch_id} onChange={handleChange} />
      </div>
      <div>
        <label>Unit:</label>
        <input type="text" name="unit" value={formData.unit} onChange={handleChange} />
      </div>
      <div>
        <label>Variant:</label>
        <input type="text" name="variant" value={formData.variant} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
