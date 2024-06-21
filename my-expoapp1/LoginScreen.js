import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
       <View style={styles.container}>  
      <Text style={styles.header}>Jobizz </Text>
    
       
    
      <View style={styles.welcomeContainer}>
      <Text style={styles.welcome}>Welcome Back 👋 </Text>
        <Text style={styles.jobs}>Let's log in. Apply to Jobs!</Text>
      </View>
      

      
      <TextInput
        style={styles.input}
        placeholder="Name"
      />

       <TextInput
        style={styles.input}
        placeholder="Email"
      />


      <TextInput
        style={styles.linput}
        placeholder="Log In"
        placeholderTextColor="#FFFFFF"
        backgroundColor="#1877F2"
  
        />

      
        <Text style= {styles.orContainer}>----------Or continue with----------</Text>


      <View style={styles.socialContainer}>
        <Image source={require('./assets/images/apple1.png')} style={styles.socialIcon} />
        <Image source={require('./assets/images/google1.png')} style={styles.socialIcon} />
        <Image source={require('./assets/images/facebook1.png')} style={styles.socialIcon} />
      </View>

      <View style={styles.registerContainer}>
        <Text>Haven't an account? Register</Text>
        </View>

        </View>
        );
        };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'leftalign',
    paddingHorizontal: 20,
    marginBottom:30,
  },
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 17,
    
    
  },
  welcome: {
    alignItems: 'left align',
    fontWeight:'bold',
    fontSize: 31.5,
    color:'black',
    marginBottom: 12,
    paddingHorizontal: 1,
  },


jobs:{
  alignItems:'left-align',
  marginBottom: 46,
  paddingHorizontal:2,
  fontSize:18,
  color:'ash',
},

input: {
  height: 60,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 8,
  paddingLeft: 34,
  paddingEnd:237,
  width: '100%',
  marginTop:10,
  marginBottom:8,
},


linput: {
  height: 60,
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  paddingRight:132,
  marginTop:28,
  marginBottom:40, 
  paddingHorizontal:130,
  fontSize: 16, 
  fontWeight:18,
  

},
  
    
  
  orContainer: {
    marginVertical: 20,
    textAlign: 'center',
    paddingEnd: 20,
    marginBottom:30,
    paddingStart:35,

  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
    width: '100%',
  },
  socialIcon: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  registerContainer: {
    position: 'absolute',
    bottom: 92,
    paddingStart:94,
    fontSize:13,
  
  },
  

 
});

export default LoginScreen;