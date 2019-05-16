import React, { Component } from "react";
import styled from "styled-components";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Questrial', sans-serif;
  h1{
      color: #FF7200;
      font-size: 5rem;
      margin: 0;
  }
`;

const Options = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const SingleOption = styled.div`
  margin: 0.5rem;
  padding: 0.25rem;
  border: 1px solid #FF7200;
  width: 5rem;
  height: 5rem;
  animation: createBox .5s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p {
      margin: 0;
  }


  @keyframes createBox {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

`;

const Inputs = styled.div`
  width: 20rem;
  button {
    background: none;
    border: 1px solid black;
    margin: 0.5rem;
    height: 2rem;
    padding-top: 0;
    padding-bottom: 0;
  }

  button:hover {
      border: 1px solid #FF7200;
      color: #FF7200
  }

  button:active{
      border: none;
      background: black ;
      color: #E6E6E6;
  }

  button:focus {
      outline: none;
  }

  input{
      background: none;
      outline: none;
      border: 1px solid black;
      padding: 0;
      padding-left: 0.25rem;
      font-family: 'Questrial', sans-serif;
      height: 2rem;
      font-size: 1rem;
      color:#FF7200
  }
`;

class CoinFlip extends Component {
  state = {
    options: [],
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

  rest() {
    this.setState({
      options: [],
      userInput: "",
      generatedChoice: "",
      coinFlip: 1
    });
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
