import React, { useState } from 'react'
import { View, ActivityIndicator, StyleSheet, AsyncStorage, Image, TextInput } from 'react-native'
import { Text, Button,  } from 'galio-framework';
import { Item, Input } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';


export function Signup(props) {
  const [username, setusername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [firstname, setfirstname] = useState({ value: '', error: '' });
  const [lastname, setlastname] = useState({ value: '', error: '' });
  const [error, seterror] = useState('');
  const [inputtext, setinputtext] = useState(true);
  const [icon, seticon] = useState('eye');

  
  const _changeIcon = () => {
    if( icon === 'eye-slash'){
      seticon('eye')
    }
    setinputtext(!inputtext)
  }


  const _onSignupPressed = () => {
    if (username.value.length > 0 && password.value.length > 0 && firstname.value.length > 0 &&
      lastname.value.length > 0) {
      <ActivityIndicator size="large" color="#0000ff" />
      fetch('https://herokuuniv.herokuapp.com/api/User/create_account/', {
        method: 'POST',
        headers: {
          Accept:
            'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
          first_name: firstname.value,
          last_name: lastname.value,
        }),
      }).then(res => res.json())
        .then(res => {
          if (res.token && res.message) {
            props.navigation.navigate('main')
          }
          else {
            setfirstname({ value: '' })
            setlastname({ value: '' })
            setusername({ value: '' })
            setPassword({ value: '' })
            seterror(res.message)
          }
        }
        )
        .catch(error => console.log(error))
    } else {
      setfirstname({ value: '' })
      setlastname({ value: '' })
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

      <TextInput
        value={firstname.value}
        style={styles.textInput}
        onChangeText={text => setfirstname({ value: text, error: '' })}
        placeholder="Prénom"
        placeholderTextColor={'#d3d0d2'} />
      <TextInput
        value={lastname.value}
        style={styles.textInput}
        onChangeText={text => setlastname({ value: text, error: '' })}
        placeholder="Nom"
        placeholderTextColor={'#d3d0d2'} />
      <TextInput
        value={username.value}
        style={styles.textInput}
        onChangeText={text => setusername({ value: text, error: '' })}
        placeholder="Email"
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



      <Button style={{ marginTop: 30 }} round size="small" color="#648cb4" onPress={_onSignupPressed}>
        S'incrire</Button>
      <Text style={styles.error}>{error}</Text>

      <Text style={{ marginTop: 60, color: '#ffffff' }}> Si vous avez déjà un compte, identifiez-vous.</Text>
      <Button
        onPress={() => props.navigation.navigate('Login')}
        style={{ marginTop: 10 }} round size="small" color="#648cb4">Login</Button>

    </View>
  );
}


export default Signup;

const styles = StyleSheet.create({
  container:
  {
    backgroundColor: '#245591',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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