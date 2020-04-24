import React, {Fragment, Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import { connect } from 'react-redux'
import { counterIncrement, counterDecrement } from './actions/counterActions'



import {styles} from './styles/sty';


class App extends Component{
 constructor(props){
   super(props);
   this.state = { 
     count: 0 
    };
 }
  
  decrementCount = () => {

    this.setState({ count: this.state.count - 1 })
  }
  incrementCount = () => {
  
    this.setState({ count: this.state.count + 1 })
  }
  clearCount = () => {
   
    this.setState({ count: 0 })
  }
render(){
  console.log(this.props);
  return(
    
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.button}
        onPress={this.props.counterIncrement}>
          <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>
      <Text style={styles.title}>
            {this.state.count}
        </Text>
        <Text style={styles.title}>
            {this.props.count}
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={this.props.counterDecrement}>
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
}
mapStateToProps = (state) =>{
  return{
    count: state
  }
}
export default connect(mapStateToProps, {counterIncrement, counterDecrement})(App);