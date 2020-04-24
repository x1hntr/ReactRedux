import {StyleSheet} from 'react-native';

export  const styles = StyleSheet.create({
    container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor: '#dfe6e9'
        },
        button:{
            width: 35,
            height: 30,
            backgroundColor: '#0984e3', 
            //borderRadius:25,
            marginVertical: 10,
        },
        buttonClear:{
            width: 100,
            height: 30,
            backgroundColor: '#0984e3', 
            borderRadius:25,
            marginVertical: 10,
            paddingVertical: 0
        },
        buttonText:{
            fontSize: 20,
            fontWeight: '500',
            color: '#ffff',
            textAlign: 'center'
        },
        title:{
            fontSize: 20,
            marginHorizontal: 8,
            marginBottom: 16,
            color: 'white'
        },
    }
    )