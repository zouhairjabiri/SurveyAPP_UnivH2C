import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import css from '../assets/CSS'
import * as Progress from 'react-native-progress';
import getInputType from './getInputType'
import { Button } from 'react-native-paper';

function card(data, length) {
    const [QuestionNumber, setQuestionNumber] = useState(1)
    const [lastquestion, setlastquestion] = useState(false)
    const [firstquestion, setfirstquestion] = useState(true)
    const result = data.filter(question => (question.id === QuestionNumber));

    const incrementQuestion = () => {
        if (QuestionNumber + 1 < length) {
            setQuestionNumber(QuestionNumber + 1)
            setfirstquestion(false)
        } else if (QuestionNumber + 1 === length) {
            setQuestionNumber(QuestionNumber + 1)
            setlastquestion(true)
        }
    }
    const decrementQuestion = () => {
        if (QuestionNumber - 1 === 1) {
            setQuestionNumber(QuestionNumber - 1)
            setfirstquestion(true)
        }else if(QuestionNumber - 1 > 1)
        {
            setQuestionNumber(QuestionNumber - 1)
            setlastquestion(false)

        }
    }
    return (
        <View>
            <View style={styles.Bar} >
            <Progress.Bar progress={QuestionNumber / length} width={300} />

            </View>
                {result.map((question, id) =>
                (
                    <View key='id'>
                        <View style={css.ch_headerContainer}>
                            <Text style={css.ch_titleText}>
                                {question.question}
                            </Text>
                        </View>
                        <View style={css.cb_bodyContainer}>
                            <Text style={css.cb_textStyle}>{question.input}</Text>
                            {getInputType(question.type, question.choices)}
                        </View>
                    </View>
                ))}
            {firstquestion  ? null :
                <Button icon="camera" style={{marginTop:10,marginBottom:10}} mode="contained" onPress={() => decrementQuestion()}>
                    Previous Question
               </Button>
            }


            {lastquestion ? null :
                <Button icon="camera" mode="contained" onPress={() => incrementQuestion()}>
                    Next Question
            </Button>
            }

        </View>
    )
}

export default card

const styles = StyleSheet.create({
    Bar:{
        marginBottom:20
    }
})
