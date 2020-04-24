import {StyleSheet} from 'react-native';

export  const styles = StyleSheet.create({
    container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor: '#dfe6e9'
        },
        button:{
            width: 30,
            height: 45,
            backgroundColor: '#0984e3', 
            borderRadius:25,
            marginVertical: 10,
            paddingVertical: 12
        },
        buttonText:{
            fontSize: 16,
            fontWeight: '500',
            color: '#ffff',
            textAlign: 'center'
        },
        title:{
            fontSize: 20,
            marginBottom: 16,
            color: 'white'
        },
    }
    )