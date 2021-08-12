import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin'

export default class App extends React.Component {
  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '651672416127-ml0l2jon29e91dse3bvqcrjrhd0djgpa.apps.googleusercontent.com',
      offlineAccess:true,
    });
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      //console.log("before");
      
      //const userInfo =  
      GoogleSignin.signIn().then((data)=>{
        console.log("data",data);
        
      }).catch((error)=>{
        console.log("error",error);
        
      });
      //console.log("after");
      
      //console.log(userInfo);
      
    } catch (error) {
      console.log(error.message);

    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
