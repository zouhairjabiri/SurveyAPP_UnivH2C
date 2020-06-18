import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text } from 'galio-framework'

export default ({handleChange, values}) => {


    return (
                <View style={styles.container}>
                    <View style={{ marginTop: 30 }} />
        
                    <View style={styles.zone}>
                        <Text style={styles.zoneText}>Chi haja</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="cuba"
                            value={values.cuba}
                            onChangeText={handleChange("cuba")}
                            placeholderTextColor={'#d3d0d2'}

                        />

                        <TextInput
                            style={styles.textInput}
                            placeholder="Mlawi"
                            value={values.Mlawi}
                            onChangeText={handleChange("Mlawi")}
                            placeholderTextColor={'#d3d0d2'}
                        />
                    </View>
                <Text>{JSON.stringify(values, null, 2)}</Text>
                </View>
         
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#273c75',
        marginLeft: 10,
        marginRight: 10,
    },
    dropdowncontainer: {
        width: 200,
        alignSelf: "center",
        marginTop: -15,
        marginBottom: 15,
    },
    dropdown: {
        color: '#ecf0f1',
    },
    zone: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ecf0f1',
        marginTop: 7,
        marginBottom: 7,
    },
    zoneText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 25,
        color: '#ecf0f1',
    },
    datepicker: {
        width: 250,
        marginTop: 15,
        marginBottom: 15,
    },
    textInput: {
        width: 200,
        height: 40,
        fontSize: 16,
        color: '#ecf0f1',
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d3d0d2',
    },
});