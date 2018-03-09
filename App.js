import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textColor}>1Open up </Text>
        <Text>Changes </Text>
        <Text >Shake </Text>

         < TouchableHighlight onPress= {click}>
            <Text>Button</Text>
        < /TouchableHighlight>

      </View>
    );
  }
}

const click = () => {
    console.log('点击登录按钮');
    Alert.alert('title',
        'message',
        [{text:'以后再说',onPress: ()=>console.log('Ask me later pressed')}])
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'column',
      // flexDirection:'column-r',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',

  },
    textColor: {
        color:'blue',
        fontSize:30,
        backgroundColor:'yellow',
        textDecorationLine:'underline',
    },
    buttonStyle:{
      marginTop:40,
    },
});

// const flexStyle = StyleSheet.create({
//     textColor: {
//         // flex: 1,
//         color:'blue',
//     },
// });
