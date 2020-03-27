import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 2 }
    ]
  };

  handleReset = () => {
    // const counters = [...this.state.counter];
    // counters.forEach(count => (count.value = 0));
    let counters = [];
    if (this.state.counter.length > 0) {
      counters = this.state.counter.map(c => {
        c.value = 0;
        return c;
      });
    } else {
      counters = [
        { id: 1, value: 0 },
        { id: 2, value: 3 },
        { id: 3, value: 0 },
        { id: 4, value: 2 }
      ];
    }

    this.setState({ counter: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counter.filter(c => c.id !== counterId);
    this.setState({ counter: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counter.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={this.state.counter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
