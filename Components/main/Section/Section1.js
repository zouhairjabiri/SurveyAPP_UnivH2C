import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import Divider from 'react-native-divider';


export default function Section1() {
    const [date, setDate] = useState(new Date());
    const [dateaniv, setdateaniv] = useState('');
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [sexe, setsexe] = useState('');

    const [Statutmatrimonial, setStatutmatrimonial] = useState('');
    const [autreStatutmatrimonial, setautreStatutmatrimonial] = useState('');

    const onChange = (event, selectedDate) => {
        setShow(false)
        const currentDate = selectedDate || date;
        const currentDatee = currentDate.toDateString();
        setdateaniv(currentDatee)
    };


    return (
        <View style={{ alignItems: 'center' }}>

            <Divider>Date de naissance</Divider>
            <Button onPress={() => {setShow(true)}} title="selectioner la date" />
            {show ? <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                // is24Hour={true}
                onChange={onChange}
            /> : null}

            <Text>{dateaniv}</Text>
            <Divider>Sexe</Divider>

            <Picker
                selectedValue={sexe}
                style={{ height: 100, width: 160 }}
                onValueChange={(itemValue, itemIndex) =>
                    setsexe(itemValue)
                }>
                <Picker.Item label="Femme" value="Femme" />
                <Picker.Item label="Homme" value="Homme" />
            </Picker>

            <Divider>Statut matrimonial</Divider>
            <Picker
                selectedValue={Statutmatrimonial}
                style={{ height: 100, width: 160 }}
                onValueChange={(itemValue, itemIndex) =>
                    setStatutmatrimonial(itemValue)
                }>
                <Picker.Item label="Célibataire" value="Célibataire" />
                <Picker.Item label="Marié" value="Marié" />
                <Picker.Item label="Divorcé(e)" value="Divorcé(e)" />
                <Picker.Item label="Veuf(ve)" value="Veuf(ve)" />
                <Picker.Item label="Non précisée" value="non" />
            </Picker>

            {Statutmatrimonial == 'non' ?
              <TextInput placeholder="specifier ..."
              style={styles.textInput}
              value={autreStatutmatrimonial}
              onChangeText={text => setautreStatutmatrimonial(text)}
              placeholderTextColor={'#d3d0d2'} 
              
              />
              : null
            }


<Divider>Nombre d’enfants</Divider>
<TextInput placeholder="specifier ..."
              style={styles.textInput}
              value={autreStatutmatrimonial}
              onChangeText={text => setautreStatutmatrimonial(text)}
              placeholderTextColor={'#d3d0d2'} 
              keyboardType='numeric'
              />









        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '75%',
        borderBottomColor: '#d3d0d2',
        borderBottomWidth: 1,
        marginBottom: 25,
        fontSize: 15,
        color: '#ffffff'
      },

});
