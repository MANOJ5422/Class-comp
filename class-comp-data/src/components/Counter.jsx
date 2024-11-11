import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          count:0,
          
        };
          
      }
    
      incrementCount = () => {
        this.setState({
          count: this.state.count + this.props.diff,
        });
        console.log(this.state.count);
      };
    
      decrementCount = () => {
        this.setState({
          count: this.state.count- this.props.diff,
        });
        console.log(this.state.count);
      };
    

    render() {
      console.log(this.props);
        return (
           <div>
            <h1> Counter App </h1>
            <p> Count: {this.state.count}</p>
              <button onClick={this.incrementCount}>
                Increment
              </button>
              <button onClick={this.decrementCount}>
                Decrement
              </button>
            </div>
          );
        }
      }



      