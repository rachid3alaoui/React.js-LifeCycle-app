import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log(`Je suis dans le constructor Enfant`);
  }

  componentDidMount() {
    console.log(`Je suis dans le componentDidMount de l'enfant`);
  }

  render() {
    console.log(`Je suis dans le render de l'enfant`);
    return (
      <div>
        {console.log(`Mise à jour du DOM de l'enfant`)}
        Hello world from child Component{' '}
      </div>
    );
  }
}

export default ChildComponent;
