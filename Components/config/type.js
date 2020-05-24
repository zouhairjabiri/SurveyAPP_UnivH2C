import React from 'react'
import { View, Text, TextInput, Alert } from 'react-native'

function type() {
    const getInputType = (type, id, choices) => {
        switch (type) {
            case 'boolean':
                     return (
                   <View>
                       
                   </View>
                )
            case 'integer':
                return (
                    <View>
                        <TextInput
                            placeholder="Hi go ahead"                          
                        />
                        <Button/>
                    </View>
                )
            default:
                return <View />
        }
    }

    
    return (
        <View>
            {getInputType(type, id, onPress)}
        </View>
    )
}

export default type
