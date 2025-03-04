import React, { Component } from 'react';
import NhtLoginComp from './NhtLoginComp';
import NhtLogoutComp from './NhtLogoutComp';

class NhtLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    NhtHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let NhtElement = isLoggedIn?<NhtLoginComp /> : <NhtLogoutComp />
        return (
            <div className='alert alert-danger'>
                {NhtElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.NhtHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NhtLoginControl;