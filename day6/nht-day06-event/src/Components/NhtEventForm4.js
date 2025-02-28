import React, { Component } from "react";

class NhtEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NhtSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    NhtHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.NhtSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            NhtSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    NhtHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.NhtSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.NhtSelectCheckBox.includes("Apple")}
              onChange={this.NhtHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.NhtSelectCheckBox.includes("Banana")}
              onChange={this.NhtHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.NhtSelectCheckBox.includes("Orange")}
              onChange={this.NhtHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.NhtHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NhtEventForm4;