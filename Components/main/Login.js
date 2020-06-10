import React, { useState } from 'react'
import { View, StyleSheet, ActivityIndicator, Image, TextInput } from 'react-native'
import { Text, Button } from 'galio-framework'
import { Item, Input } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Loader from '../config/Loader'
export function Login(props) {
  const [username, setusername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [error, seterror] = useState('');
  const [inputtext, setinputtext] = useState(true);
  const [icon, seticon] = useState('eye');
  const [loadingstate, setloadingstate] = useState(false);

  
  const _changeIcon = () => {
    if( icon === 'eye-slash'){
      seticon('eye')
    }
    setinputtext(!inputtext)
  }


  const _onLoginPressed = ({ }) => {
    if (username.value.length > 0 && password.value.length > 0) {
      <ActivityIndicator size="large" color="#ffffff" />
      setloadingstate(true)
      fetch('https://herokuuniv.herokuapp.com/auth/', {
        method: 'POST',
        headers: {
          Accept:
            'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      }).then(res => res.json())
        .then(res => {
          if (res.token) {
            setloadingstate(false)
            props.navigation.navigate('main');
          } else {
            setusername({ value: '' })
            setPassword({ value: '' })
            setloadingstate(false)
            seterror("Le nom d'utilisateur ou le mot de passe est incorrect !")
          }
        }
        ).catch(error => console.log(error))
    } else {
      setusername({ value: '' })
      setPassword({ value: '' })
      seterror("Veuillez remplir tous les champs !")
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.para2}>Université Hassan ll de Casablanca</Text>
      {/* <Image
        style={styles.logo}
        source={require('../../asset/Logo-UHllC-White.png')}
      /> */}

        <Loader loading={loadingstate} />

      <TextInput placeholder="Email"
        style={styles.textInput}
        value={username.value}
        onChangeText={text => setusername({ value: text, error: '' })}
        placeholderTextColor={'#d3d0d2'} />


      <Item style={styles.textInput}>
        <FontAwesome active name="lock" color='#ffffff' size={18} />
        <Input
          style={{ fontSize: 15, color: '#fff', paddingLeft: 10, height: 40 }}
          placeholder='Mot de passe'
          value={password.value}
          placeholderTextColor={'#d3d0d2'}
          secureTextEntry={inputtext}
          onChangeText={text => setPassword({ value: text, error: '' })}
        />
        <FontAwesome name={icon} color='#ffffff' size={18} onPress={() => _changeIcon()} />
      </Item>



      <Text style={styles.error}>{error}</Text>

      <Button onPress={_onLoginPressed} style={{ marginTop: 10 }} round size="small" color="#648cb4">
        Login </Button>

      <Text style={{ marginTop: 110, color: '#ffffff' }}> Vous n'avez pas de compte ? </Text>

      <Button
        onPress={() => props.navigation.navigate('Signup')}
        style={{ marginTop: 10 }} round size="small" color="#648cb4">S'incrire</Button>

    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container:
  {
    backgroundColor: '#245591',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '75%',
    borderBottomColor: '#d3d0d2',
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  logo: {
    width: '40%',
    height: '12%',
    marginTop: 10,
    marginBottom: 60,
  },
  textInput: {
    height: 40,
    width: '75%',
    borderBottomColor: '#d3d0d2',
    borderBottomWidth: 1,
    marginBottom: 25,
    fontSize: 15,
    color: '#ffffff'
  },
  PassTextInput: {
    height: 40,
    width: '75%',
    fontSize: 18,
    borderBottomColor: '#d3d0d2',
    borderBottomWidth: 1,
    marginBottom: 25,
    fontSize: 15,
    color: '#ffffff'
  },
  error: {
    fontSize: 16,
    marginTop: 20,
    color: '#d3d0d2',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  para2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  }
}
);