import * as React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Text } from 'galio-framework'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';

export default ({handleChange, values, setFieldValue}) => {
    // this variables For systemes
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);
    const [mode, setMode] = React.useState('date');


    const onChange = (event, selectedDate) => {
        setShow(false)
        const currentDate = selectedDate || date;
        const currentDatee = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
        handleChange(currentDatee)
        setFieldValue('currentDatee',currentDatee)

    };

    return (
             <View style={styles.container}>
            <View style={{ marginTop: 30 }} />
            <View style={styles.zone}>
                  <Text style={styles.zoneText}>Date de naissance :</Text>
                  <View style={{ alignItems: "center" }}>
                      <TouchableOpacity onPress={() => { setShow(true) }}>
                          <Fontisto name="date" size={24} color="black" />
                      </TouchableOpacity >
                      {show ? <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          onChange={onChange}
                      /> : null}
  
  
  
                      <TouchableOpacity onPress={() => { setShow(true) }}>
                          <View pointerEvents="none" >
                              <TextInput style={styles.textInput} value={values.currentDatee} placeholder="Selection la date"/>
                          </View>
                      </TouchableOpacity>
  
                  </View>
              </View>
                    <View style={styles.zone}>
                        <Text style={styles.zoneText}>Adresse actuelle :</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Quartier"
                            value={values.Quartier}
                            onChangeText={handleChange("Quartier")}
                            placeholderTextColor={'#d3d0d2'}

                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ville"
                            value={values.Ville}
                            onChangeText={handleChange("Ville")}
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
