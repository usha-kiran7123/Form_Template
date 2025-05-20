/* App.js */
import React from 'react';
import 'antd/dist/reset.css';
import Navbar from './components/Navbar';
import PurchaseForm from './components/PurchaseForm';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <PurchaseForm />
    </div>
  );
}
export default App;
