import React, { Component } from "react";
import styled from "styled-components";

const Dashboard = styled.div`
margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Options = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border: 1px solid red;
`;

const SingleOption = styled.div`
  margin: 0.5rem;
  border: 1px solid black;
  width: 5rem;
`;

const Inputs = styled.div`
border: 1px solid green;
width: 20rem;
button {
    background: none;
    border: 1px solid black;
    margin: 0.5rem;
    padding: 0.25rem;
}

`

class CoinFlip extends Component {
  state = {
    options: [
      { name: "vue", chosen: 0 },
      { name: "react", chosen: 0 },
      { name: "angular", chosen: 0 }
    ],
    userInput: "",
    generatedChoice: "",
    coinFlip: 1
  };

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  handleAddOption() {
    let updatedOptions = [
      ...this.state.options,
      { name: this.state.userInput, chosen: 0 }
    ];
    this.setState({
      options: updatedOptions,
      userInput: ""
    });
  }

  choose() {
    let optionsList = this.state.options;
    let length = optionsList.length;
    let i = 0;
    while (i < this.state.coinFlip) {
      let index = Math.floor(Math.random() * length);
      this.setState({
        generatedChoice: optionsList[index].name
      });

      optionsList[index].chosen += 1;
      i++;
    }
  }

  rest(){
      this.setState({
          options: [],
          userInput: "",
          generatedChoice: "",
          coinFlip: 1
      })
  }

  render() {
    const mappedOptions = this.state.options.map(option => {
      return (
        <SingleOption key={option.name}>
          <p>{option.chosen}</p>
          <p>{option.name}</p>
        </SingleOption>
      );
    });

    return (
      <Dashboard>
        <h1>coin flip</h1>
        <Options>{mappedOptions}</Options>
        <Inputs>
            <div className="options">
            <input
                value={this.state.userInput}
                onChange={e => this.handleChange("userInput", e.target.value)}
            />
            <button onClick={() => this.handleAddOption()}> add option</button>
            </div>
            <p>
            flip coin{" "}
            <input
                type="number"
                value={this.state.coinFlip}
                onChange={e => this.handleChange("coinFlip", e.target.value)}
                style={{ width: "2.5rem" }}
            />{" "}
            {this.state.coinFlip > 1 ? "times" : "time"}
            </p>
            <button onClick={() => this.choose()}>flip that coin!</button>
            <button onClick={() => this.rest()}> reset</button>
            {/* <h1>{this.state.generatedChoice}</h1> */}
        </Inputs>
      </Dashboard>
    );
  }
}

export default CoinFlip;
