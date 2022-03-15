import React, { Component } from 'react';    
import PersonCard from './PersonCard';
    
class App extends Component {
    render() {
        return <div>
          <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
          <PersonCard firstName={"Jhon"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
          <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
          <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
        </div>;
    }
}
    
export default App;
