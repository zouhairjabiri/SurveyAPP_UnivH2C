import React from 'react'
import { View, Text, Button } from 'react-native'

function intro({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to intro... again"
          onPress={() => navigation.navigate('intro')}
        />
      </View>
    );
  }
export default intro
