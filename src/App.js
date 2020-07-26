import React from 'react';
import LifeCycle from './LifeCycle';
import './App.css';

class App extends React.Component {
  state = {
    display: true,
  };

  effacerOuAfficher = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    const showComponent = this.state.display ? (
      <LifeCycle name="Toto2" />
    ) : (
      <div></div>
    );
    return (
      <div className="App">
        {showComponent}
        <button onClick={this.effacerOuAfficher}>Cliquer ici !</button>
      </div>
    );
  }
}

export default App;
