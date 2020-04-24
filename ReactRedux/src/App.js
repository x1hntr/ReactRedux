import React, {Fragment, Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, setState} from 'react-native'

import { connect } from 'react-redux'
import { counterIncrement, counterDecrement, counterClear, counterSet} from './actions/counterActions'



import {styles} from './styles/sty';


class App extends Component{
 constructor(props){
   super(props);
   this.state = { 
     count: 0 
    };

    this.onChangeText = this.onChangeText.bind(this);
 }

  onChangeText(number){
    const count = parseInt(number);
    this.props.counterSet(count);
  }
   
render(){
  console.log(this.props);
  console.log(this.state.count);

  return(
    
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.button}
        onPress={this.props.counterIncrement}>
          <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>

      <TextInput style={styles.input}
        placeholder='#'
        onChangeText={this.onChangeText}
        value={this.props.count.toString()}
        />
        
        <Text style={styles.title}>
            {this.props.count}
        </Text>
        
        <TouchableOpacity style={styles.button}
        onPress={this.props.counterDecrement}>
          <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.buttonClear}
        onPress={this.props.counterClear}>
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
export default connect(mapStateToProps, {counterIncrement, counterDecrement, counterClear, counterSet})(App);