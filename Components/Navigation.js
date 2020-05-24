import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import final from './main/final'
import surveyQuestions from './main/surveyQuestions'
import intro from './main/intro'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="intro" component={intro} />
                <Stack.Screen name="surveyQuestions" component={surveyQuestions} />
                <Stack.Screen name="final" component={final} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default MyStack