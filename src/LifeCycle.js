import React, { Component } from 'react';
// import ChildComponent from './ChildComponent';

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Toto',
      step: 1,
    };

    console.log(`Etape : ${this.state.step} Je suis dans le constructor`);
  }

  componentDidMount() {
    console.log(
      `Etape : ${this.state.step} Je suis dans le componentDidMount!`
    );
    this.setState({ name: this.props.name, step: this.state.step + 1 });
    console.log(
      `Etape : ${this.state.step} : setState() a changé le state dans componentDidMount !`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `Etape ${this.state.step} : Je suis dans le componentDidUpdate()`
    );

    console.log(prevState, this.state);
  }

  componentWillUnmount() {
    console.log(`Je suis dans componentWillUnmount()`);
  }

  render() {
    console.log(`Etape : ${this.state.step} Je suis dans le render`);
    return (
      <div className="main">
        {console.log(`Etape : ${this.state.step} : Mise à jour du DOM `)}
        <p> Chargement : {this.state.step} </p>
        <p>Name: {this.state.name}</p>
        {/* <ChildComponent /> */}
      </div>
    );
  }
}

export default LifeCycle;
