import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-material-dropdown';
import { Fontisto } from '@expo/vector-icons';
import {SEXECHOICES, 
    STATUTCHOICES,
    NIVEAUETUDECHOICES,
    ACTIVITECHOICES,
    MILIEUCHOICES, REVENUCHOICES
    
    
 }from '../../config/Choices'


export default function Section1() {
    // this variables For systemes
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    // this variables for My Forms
    const [sexe, setsexe] = useState('');
    const [dateaniv, setdateaniv] = useState('');
    const [Statutmatrimonial, setStatutmatrimonial] = useState('');
    const [autreStatutmatrimonial, setautreStatutmatrimonial] = useState('');
    const [NbEnfants, setNbEnfants] = useState('');
    const [niveauetude, setniveauetude] = useState('');
    
    const [Activite, setActivite] = useState('');
    const [ActiviteSiActive, setActiviteSiActive] = useState('');
    const [AutreActivite, setAutreActivite] = useState('');
    const [revenu, setrevenu] = useState('');
    const [Quartier, setQuartier] = useState('');
    const [Ville, setVille] = useState('');
    const [MilieuDeResidence, setMilieuDeResidence] = useState('');
    const [Poids, setPoids] = useState('');
    const [Taille, setTaille] = useState('');
 
    
    const onChange = (event, selectedDate) => {
        setShow(false)
        const currentDate = selectedDate || date;
        const currentDatee = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
        setdateaniv(currentDatee)

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
                            <TextInput style={styles.textInput} value={dateaniv} placeholder="Selection la date"/>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Sexe :</Text>
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={SEXECHOICES}
                    selectedItem={sexe}
                    baseColor='#ecf0f1'
                />
            </View>
            <View style={styles.zone}>
                <Text style={styles.zoneText}>Statut matrimonial :</Text>
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={STATUTCHOICES}
                    selectedItem={sexe}
                    onChangeText={value => setStatutmatrimonial(value)}
                    baseColor='#ecf0f1'
                />

                {Statutmatrimonial == 'Non précisée' ?
                    <TextInput placeholder="Précisez..."
                        style={styles.textInput}
                        value={autreStatutmatrimonial}
                        onChangeText={text => setautreStatutmatrimonial(text)}
                        placeholderTextColor={'#d3d0d2'}

                    />
                    : null
                }
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Nombre d’enfants :</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Écrivez ici..."
                    value={NbEnfants}
                    onChangeText={value => setNbEnfants(value)}
                    placeholderTextColor={'#d3d0d2'}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Niveau d’étude :</Text>
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={NIVEAUETUDECHOICES}
                    selectedItem={niveauetude}
                    baseColor='#ecf0f1'
                    onChangeText={value => setniveauetude(value)}
                />
            </View>
            <View style={styles.zone}>
                <Text style={styles.zoneText}>Activité : </Text>
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={ACTIVITECHOICES}
                    selectedItem={Activite}
                    baseColor='#ecf0f1'
                    onChangeText={value => setActivite(value)}
                />
                    {Activite == 'Actif' ?
                    <TextInput placeholder="poste de travail occupé"
                        style={styles.textInput}
                        value={ActiviteSiActive}
                        onChangeText={text => setActiviteSiActive(text)}
                        placeholderTextColor={'#d3d0d2'}

                    />
                    : null
                }
                    {Activite == 'Autre, préciser' ?
                    <TextInput placeholder="Précisez..."
                        style={styles.textInput}
                        value={AutreActivite}
                        onChangeText={text => setAutreActivite(text)}
                        placeholderTextColor={'#d3d0d2'}

                    />
                    : null
                }
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Revenu mensuel du ménage :</Text>
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={REVENUCHOICES}
                    selectedItem={revenu}
                    baseColor='#ecf0f1'
                    onChangeText={value => setrevenu(value)}
                />
            </View>
            <View style={styles.zone}>
                <Text style={styles.zoneText}>Adresse actuelle :</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Quartier"
                    value={Quartier}
                    onChangeText={value => setQuartier(value)}
                    placeholderTextColor={'#d3d0d2'}
                    
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Ville"
                    value={Ville}
                    onChangeText={value => setVille(value)}
                    placeholderTextColor={'#d3d0d2'}
                />
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Milieu de résidence :</Text>
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={MILIEUCHOICES}
                    selectedItem={MilieuDeResidence}
                    baseColor='#ecf0f1'
                />
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Mesures Physiques :</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Poids"
                    value={Poids}
                    onChangeText={value => setPoids(value)}
                    placeholderTextColor={'#d3d0d2'}
                    
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Taille"
                    value={Taille}
                    onChangeText={value => setTaille(value)}
                    placeholderTextColor={'#d3d0d2'}
                />
            </View>

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
