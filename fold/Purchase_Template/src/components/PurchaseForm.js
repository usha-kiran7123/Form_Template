import React, { useState } from 'react';
import { Layout, Typography, Input, DatePicker, Select, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import Navbar from './Navbar';
import '../App.css';

const { Option } = Select;
const { Title } = Typography;
const { Content } = Layout;
const { TextArea } = Input;
const PurchaseForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const [rows, setRows] = useState([
    { item: '', details: '', quantity: '', rate: '', discount: '', tax: '', amount: '' },
  ]);

  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [tdsEnabled, setTdsEnabled] = useState(false);
  const [tdsAmount, setTdsAmount] = useState(0);
  const [note, setNote] = useState('');
  const [selectFile, setSelectFile] =useState(null);
  const total = subTotal - discount + tax - (tdsEnabled ? tdsAmount : 0);

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    console.log('Table Data:', rows);
    console.log('Note:', note);
    console.log('Upload File:', selectFile);
    alert('Form Submitted Sucessfully!');
  };

  const handleAddRow = () => {
    setRows([...rows, { item: '', details: '', quantity: '', rate: '', discount: '', tax: '', amount: '' }]);
  };

  const handleInputChange = (e, index, field) => {
    const newRows = [...rows];
    newRows[index][field] = e.target.value;
    setRows(newRows);
  };
  const handleSaveNote = () => {
    console.log('Saved Note:', note);
    alert('Note saved!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
     
      <Content style={{ padding: '24px' }} className="purchase-form-container">
        {/* <Title level={3}>Purchases</Title> */}
        {/* <p className="subtitle">A Bill is a document that indicates the amount you owe your vendors.</p> */}

        <form onSubmit={handleSubmit(onSubmit)} className="form-grid">
          {/* Vendor Name */}
          <div className="form-item">
            <label>Vendor Name<sup style={{color:'red', width:'40%'}}>*</sup></label>
            <Controller
              name="vendor"
              control={control}
              rules={{ required: 'Vendor is required' }}
              render={({ field }) => (
                <Select {...field} placeholder="Select vendor" className="underlined-select" bordered={false} style={{width: '40%', display: 'flex'}}>
                  <Option value="vendor1">Vendor 1</Option>
                  <Option value="vendor2">Vendor 2</Option>
                </Select>
              )}
            />
            {errors.vendor && <p className="error">{errors.vendor.message}</p>}
          </div>

          {/* Purchase Date */}
          <div className="form-item">
          <label>
  Purchase Date<sup style={{ color: 'red', width:'30%', display: 'flex'}}>*</sup>
</label>

            <Controller
              name="purchaseDate"
              control={control}
              rules={{ required: 'Purchase date is required' }}
              render={({ field }) => (
                <DatePicker {...field} format="YYYY-MM-DD" className="underlined-datepicker" bordered={false} style={{ width: '40%', display: 'flex' }} />
              )}
            />
            {errors.purchaseDate && <p className="error">{errors.purchaseDate.message}</p>}
          </div>

          {/* Order ID */}
          <div className="form-item">
          <label>
  Purchase Order#<sup style={{ color: 'red' }}>*</sup>
</label>

            <Controller
              name="orderId"
              control={control}
              rules={{ required: 'Order Id is required' }}
              render={({ field }) => (
                <Input {...field} placeholder="PO_ID" className="underlined-select" variant="borderless" style={{width: '40%', display:'flex'}}/>
              )}
            />
            {errors.orderId && <p className="error">{errors.orderId.message}</p>}
          </div>

          {/* Payment Terms */}
          <div className="form-item">
            <label>Payment Terms<sup style = {{color:'red'}}>*</sup></label>
            <Controller
              name="paymentTerms"
              control={control}
              rules={{ required: 'Payment terms are required' }}
              render={({ field }) => (
                <Select {...field} placeholder="Mode of Payment" className="underlined-select" bordered={false} style={{width: '40%', display: 'flex'}}>
                  <Option value="COD">COD</Option>
                  <Option value="PhonePay">Phone Pay</Option>
                  <Option value="GooglePay">Google Pay</Option>
                  <Option value="RazorPay">Razor Pay</Option>
                  <Option value="DebitCard">Debit Card</Option>
                </Select>
              )}
            />
            {errors.paymentTerms && <p className="error">{errors.paymentTerms.message}</p>}
          </div>

          {/* Place of Supply */}
          <div className="form-item">
            <label>Place of Supply<sup style = {{color:'red'}}>*</sup></label>
            <Controller
              name="placeOfSupply"
              control={control}
              rules={{ required: 'Place of supply is required' }}
              render={({ field }) => (
                <Select {...field} placeholder="Select place" className="underlined-select" bordered={false} style={{width: '40%', display: 'flex'}}>
                  <Option value="vijayawada">Vijayawada</Option>
                  <Option value="guntur">Guntur</Option>
                  <Option value="mangalagiri">Mangalagiri</Option>
                </Select>
              )}
            />
            {errors.placeOfSupply && <p className="error">{errors.placeOfSupply.message}</p>}
          </div>

          {/* Expected Delivery Date */}
          <div className="form-item">
            <label>Expected Delivery Date<sup style ={{color:'red'}}>*</sup></label>
            <Controller
              name="expectedDate"
              control={control}
              rules={{ required: 'Expected delivery date is required' }}
              render={({ field }) => (
                <DatePicker {...field} format="YYYY-MM-DD" className="underlined-datepicker" bordered={false} style={{ width: '40%', display: 'flex'}} />
              )}
            />
            {errors.expectedDate && <p className="error">{errors.expectedDate.message}</p>}
          </div>

          {/* Category */}
          <div className="form-item">
            <label>Category<sup style = {{color:'red'}}>*</sup></label>
            <Controller
              name="category"
              control={control}
              rules={{ required: 'Category is required' }}
              render={({ field }) => (
                <Select {...field} placeholder="Select Category" className="underlined-select" bordered={false} style={{width: '40%', display: 'flex'}}>
                  <Option value="OC">OC</Option>
                  <Option value="SC">SC</Option>
                  <Option value="BC">BC</Option>
                </Select>
              )}
            />
            {errors.category && <p className="error">{errors.category.message}</p>}
          </div>

          {/* GL Code */}
          <div className="form-item">
            <label>GL Code<sup style = {{color:'red'}}>*</sup></label>
            <Controller
              name="glCode"
              control={control}
              rules={{ required: 'GL Code is required' }}
              render={({ field }) => (
                <Input {...field} placeholder="GL Code" className="underlined-select" variant="borderless" style={{width: '40%', display: 'flex'}} />
              )}
            />
            {errors.glCode && <p className="error">{errors.glCode.message}</p>}
          </div>

          {/* Purchase Date and Time */}
          <div className="form-item">
            <label>Purchase Date & Time<sup style = {{color: 'red'}}>*</sup></label>
            <Controller
              name="purchaseDateAndTime"
              control={control}
              rules={{ required: 'Purchase date & time is required' }}
              render={({ field }) => (
                <DatePicker {...field} showTime format="YYYY-MM-DD HH:mm:ss" className="underlined-datepicker" bordered={false} style={{ width: '40%', display: 'flex' }} />
              )}
            />
            {errors.purchaseDateAndTime && <p className="error">{errors.purchaseDateAndTime.message}</p>}
          </div>

                    {/* Table Section */}
                    <div className="form-item" style={{ width: '100%', marginTop: '32px' }}>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Details</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Discount</th>
                  <th>Tax</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    {Object.keys(row).map((field) => (
  <td key={field}>
    {field === 'item' ? (
      <select
        value={row[field]}
        onChange={(e) => handleInputChange(e, index, field)}
        style={{
          width: '100%',
           padding: '4px 6px',
          border: '1px ',
          
        }}
      >
        <option value="">Select Item</option>
        <option value="Pen">Pen</option>
        <option value="Notebook">Notebook</option>
        <option value="Marker">Marker</option>
        <option value="Folder">Folder</option>
      </select>
    ) : field === 'tax' ? (
      <select
        value={row[field]}
        onChange={(e) => handleInputChange(e, index, field)}
        style={{
          width: '100%',
          padding: '4px 6px',
          border: '1px',
          borderRadius: '4px',
          
        }}
      >
        <option value="">Select Tax</option>
        <option value="5%">5%</option>
        <option value="12%">12%</option>
        <option value="18%">18%</option>
        <option value="28%">28%</option>
      </select>
    ) : (
      <input
        type="text"
        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
        value={row[field]}
        onChange={(e) => handleInputChange(e, index, field)}
        style={{
          width: '100%',
          border: 'none',
          borderBottom: '1px',
          outline: 'none',
          padding: '4px 6px',
          
        }}
      />
    )}
  </td>
))}
                  </tr>
                ))}
              </tbody>
            </table>

  <Button onClick={handleAddRow} style={{ marginTop: '10px' }}>+ Add Row</Button>
</div>

          {/* Summary Section */}
<div style={{ 
  marginTop: '24px', 
  padding: '16px', 
  borderRadius: '8px',
  width: '50%',
  marginLeft: 'auto',
  backgroundColor: '#f9f9f9',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  boxShadow: '0 0 8px rgba(0,0,0,0.1)'
}}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>Sub total</span>
    <span>₹ {subTotal.toFixed(2)}</span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>Total Discount</span>
    <span className="text-red-500">(-) ₹ {discount.toFixed(2)}</span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>Total Tax</span>
    <span className="text-green-600">(+) ₹ {tax.toFixed(2)}</span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>TDS</span>
    <label className="switch">
      <input
        type="checkbox"
        checked={tdsEnabled}
        onChange={(e) => setTdsEnabled(e.target.checked)}
      />
      <span className="slider round"></span>
    </label>
    <span className="text-red-600">(-) ₹ {tdsEnabled ? tdsAmount.toFixed(2) : "0.00"}</span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
    <span>Total</span>
    <span>₹ {total.toFixed(2)}</span>
  </div>
</div>

{/* Notes Section */}
<div className="form-item" style={{ marginTop: '24px', width: '100%' }}>
            <label>Notes</label>
            <TextArea
              rows={4}
              placeholder="Write any notes here..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
{/* === File Upload === */}
<div style={{ marginTop: '24px', width: '38%' }}>
  <label htmlFor="invoice-upload"><b>Attach a file(s) to the bill</b> (Material/Delivery Recipt/Purchase Order)</label><br />

  <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
    {/* Readonly Text Input */}
    <input
      type="text"
      readOnly
      value={selectFile ? selectFile.name : ''}
      placeholder="Choose a file"
      style={{
        flex: 1,
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px 0 0 4px',
        fontSize: '14px',
        backgroundColor: '#fff',
      }}
    />

    {/* Custom Browse Button */}
    <label htmlFor="invoice-upload" style={{
      backgroundColor: '#1890ff',
      color: 'white',
      padding: '8px 16px',
      cursor: 'pointer',
      borderRadius: '0 4px 4px 0',
      fontSize: '14px',
      border: '1px solid #1890ff',
      borderLeft: 'none'
    }}>
      Browse
    </label>

    {/* Hidden File Input */}
    <input
      id="invoice-upload"
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={(e) => setSelectFile(e.target.files[0])}
      style={{ display: 'none' }}
    />
  </div>
</div>
<div className="inline-button-group">
  <Button  onClick={() => alert('Cancelled')} style={{ width: '120px' }}>
    Cancel
  </Button>
  <Button type="primary" onClick={() => alert('Saved')} style={{ width: '120px' }} >
    Save
  </Button>
  <Button type="primary" onClick={() => alert('Saved and Continued')} style={{ width: '120px' }}>
    Save & Continue
  </Button>
</div>

  
        </form>
      </Content>
    </Layout>
  );
};


export default PurchaseForm;
