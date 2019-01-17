import React from 'react';
import styled, { css } from 'styled-components';

const Header = styled.h1`
  color: blue;
`;

class Styled extends React.Component {
  state = {
    color: 'blue'
  };

  updateColor = ev => {
    ev.preventDefault();
    this.setState({ color: ev.target.className });
  };

  render() {
    return (
      <div>
        <Header color={this.state.color}>
          This is a {this.state.color} header
        </Header>
        <button onClick={this.updateColor} className="blue">
          Blue
        </button>
        <button onClick={this.updateColor} className="green">
          Green
        </button>
        <button onClick={this.updateColor} className="red">
          Red
        </button>
        <button onClick={this.updateColor} className="yellow">
          Yellow
        </button>
      </div>
    );
  }
}

export default Styled;
