import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NhtNavBar from './components/NhtNavBar';

export default function NhtApp() {
  return (
    <BrowserRouter>
      <div className='container border my-3 p-3'>
        <h1 className='text-center'>Nguyễn Hữu Tuyên - Mini Project</h1>
    
      </div>
      <NhtNavBar/>      
    </BrowserRouter>
  );
}