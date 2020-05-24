import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import css from '../assets/CSS'
import RadioForm from 'react-native-simple-radio-button';

const getInputType = (input, choices,props) => {
    switch (input) {
        case 'boolean':
            return (
                <View>
                    <RadioForm
                        radio_props={
                            choices.map((choices) => (
                                { label: choices.choice, value: choices.id }
                            ))
                        }
                        initial={1}
                        onPress={(value) => {  }}
                    />
                </View>
            )
            case 'integer':
                return (
                    <View>
                    <TextInput keyboardType='numeric'
                        style={css.textInputStyle}
                        placeholder="Some Text"     
                    />  
                </View>
                )

                case 'String':
                return (
                    <View>
                    <TextInput keyboardType='default'
                        style={css.textInputStyle}
                        placeholder="Some Text"     
                    />  
                </View>
                )
                
        default:
            return <View />
    }
}

export default getInputType
