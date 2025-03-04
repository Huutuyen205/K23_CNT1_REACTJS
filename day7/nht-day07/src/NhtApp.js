import React, { Component } from 'react';
import NhtLoginControl from './components/NhtLoginControl';
import NhtRenderList from './components/NhtRenderList';
import NhtRenderListStudent from './components/NhtRenderlistStudent';
import NhtListComp from './components/NhtListComp';


class NhtApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>nguyen huu tuyen</h1>
          <hr/>
          <NhtLoginControl />

          <NhtRenderList />

     <NhtRenderListStudent/>
     <NhtListComp/>
      </div>
    );
  }
}

export default NhtApp;