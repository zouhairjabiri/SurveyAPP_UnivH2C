import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import card from '../config/card'
import { QUESTION } from '../config/questionApi'

function surveyQuestions({ navigation }) {
    const data = QUESTION
    const length =  data.length
    return (
        <View style={styles.container}>
            {card(data , length)}
            </View>
    );
}
export default surveyQuestions
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff5959",
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        marginTop:30

    }



})
