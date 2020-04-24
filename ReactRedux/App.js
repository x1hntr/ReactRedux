import React, {Fragment, Component} from 'react'
import {View, Text, TouchableOpacity, setState} from 'react-native'

import {styles} from './src/styles/sty.js';

class App extends Component{
 constructor(props){
   super(props);
   this.state = { 
     count: 0 
    };
 }
  
  decrementCount = () => {

    this.setState({count: this.state.count -1})
  }
  incrementCount = () => {
  
    this.setState({count: this.state.count +1})
  }
  clearCount = () => {
   
    this.setState({count: 0 })
  }
render(){
  return(
    
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.button}
        onPress={this.incrementCount}>
          <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>
      <Text style={styles.title}>
            {this.state.count}
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={this.decrementCount}>
          <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.buttonClear}
        onPress={this.clearCount}>
          <Text style={styles.buttonText}> CLEAR </Text>
      </TouchableOpacity>
    </View>
  );
}
}export default App;