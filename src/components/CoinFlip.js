import React, { Component } from "react";

class CoinFlip extends Component {
  state = {
    options: [],
    userInput: ''
  };

  handleChange(prop, val){
      this.setState({
          [prop] : val
      })
  }

  handleAddOption(){
      let updatedOptions = [...this.state.options, this.state.userInput]
      this.setState({
          options: updatedOptions
      })
  }

  render() {

    const mappedOptions = this.state.options.map( (option, index) => {
        return (
            <div key={option} >
                <p>{option}</p>
            </div>
        )
    })
    return (
      <>
        <h1>coin flip</h1>
        {mappedOptions}
        <div className="options">
          <input onChange={(e) => this.handleChange('userInput', e.target.value)} />
          <button onClick={() => this.handleAddOption()}> add option</button>
        </div>
      </>
    );
  }
}

export default CoinFlip;
