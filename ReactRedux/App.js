import React, {Fragment, Component} from 'react'
import {View, Text, TouchableOpacity, setState} from 'react-native'

import {styles} from './src/styles/sty.js';

class App extends Component{
 
  state = { count: 0 };
  
  decrementCount = () => {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }
render(){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => {}}>
          <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>

      <Text style={styles.title}>
            {count} 
        </Text>

      <TouchableOpacity style={styles.button}
        onPress={() => {}}>
          <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
}export default App;