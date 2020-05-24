import React from 'react'
import { View, Text, Button, StyleSheet,Image } from 'react-native'

function intro({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/vector1.png')} style={styles.image} />
      <Text style={styles.title}>Bienvenu dans La ...... </Text>
      <Button
        title="GO Survey Now"
        onPress={() => navigation.navigate('surveyQuestions')}/>
    </View>
  );
}
export default intro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width:400,
    height:360
  },
  title: {
   fontSize:20,
   marginBottom:30
  }

})
