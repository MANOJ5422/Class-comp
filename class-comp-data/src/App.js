import React from "react";
import { useState } from "react";
import { Counter } from "./components/Counter";




  class App extends React.Component {

    constructor(props) {
      super(props);
    //   this.state = {
    //     userId: 1,
    //     showForm: true,
    //     checked:false,
        
    //   };
     }
   

  render() {
    return (
      <div>
       
         
     
       <Counter  diff={1} />
        
    

   
      </div>
    );
  }
  }
export default App;