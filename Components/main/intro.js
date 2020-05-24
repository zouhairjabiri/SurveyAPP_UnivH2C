import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements';

function intro({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/img/header.png')} style={styles.header}>

        <Image source={require('../assets/img/vector1.png')} style={styles.image} />
        <Text style={styles.title}>Bienvenu dans La ...... </Text>

        <Button
          title="GO Survey Now"
          onPress={() => navigation.navigate('surveyQuestions')}
          linearGradientProps={{
            colors: ['#ff2f2f','#f42222'],
          }}
        />
      </ImageBackground>

    </View>

  );
}
export default intro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 120,
    width: 400,
    height: 360
  },
  title: {
    fontSize: 20,
    marginBottom: 30
  },
  header: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
