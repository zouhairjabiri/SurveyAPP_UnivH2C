// import * as React from 'react';
// import { StyleSheet, View, TextInput , TouchableOpacity} from 'react-native';
// import { Text } from 'galio-framework'
// import { Dropdown } from 'react-native-material-dropdown';
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
// import { AntDesign } from '@expo/vector-icons'; 

// export default ({ handleChange, values }) => {
//     const [Comorbidite, setComorbidite] = React.useState([{ value: '' }]);
//     const [Medicaments, setMedicaments] = React.useState([{ value: '' }]);

//     React.useEffect(() => {
//         fetch(`https://telecovidprojet.herokuapp.com/api/Comorbidite/`, {
//             method: 'GET',
//             headers: {
//                 Accept:
//                     'application/json',
//                 'Content-Type': 'application/json',
//             }
//         }).then(res => res.json())
//             .then(res => {
//                 res.map(function (item) {
//                     setComorbidite(Comorbidite => [{ value: item.NomAntecedent }, ...Comorbidite]);
//                 });
//             }
//             )
//             .catch(error => console.log(error))
//             // fetch(`https://telecovidprojet.herokuapp.com/api/Medicaments/`, {
//             //     method: 'GET',
//             //     headers: {
//             //         Accept:
//             //             'application/json',
//             //         'Content-Type': 'application/json',
//             //     }
//             // }).then(res => res.json())
//             //     .then(res => {
//             //         res.map(function (item) {
//             //             console.log(item.NomAntecedent);
//             //             setMedicaments(Medicaments => [{ value: item.NomAntecedent }, ...Medicaments]);
//             //         });
//             //     }
//             //     )
//             //     .catch(error => console.log(error))
        
                
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={{ marginTop: 30 }} />
//             <View style={styles.zone}>
//                 <Text style={styles.zoneText}>Statut matrimonial :</Text>
//                 <Dropdown
//                     value={values.Comorbidite}
//                     containerStyle={styles.dropdowncontainer}
//                     style={styles.dropdown}
//                     data={Comorbidite}
//                     selectedItem={values.Comorbidite}
//                     onChangeText={handleChange("Comorbidite")}
//                     baseColor='#ecf0f1'
//                 />
//                 <Text style={styles.zoneText}>Age au diagnostic:</Text>
//                 <TextInput
//                     style={styles.textInput}
//                     placeholder="Écrivez ici..."
//                     value={values.AgeAuDiagnostic}
//                     onChangeText={handleChange("AgeAuDiagnostic")}
//                     placeholderTextColor={'#d3d0d2'}
//                     keyboardType='numeric'
//                 />

//                 <Text style={styles.zoneText}>Prise de traitement Pharmaceutique:</Text>
//                 <RadioForm
//                     radio_props={  [
//                         {label: 'non', value:  'non' },
//                         {label: 'oui', value: 'oui' }
//                       ]}
//                     initial={0}
//                     // onPress={(value) => { this.setState({ value: value }) }}
//                     onPress={handleChange("PriseDeTraitement : value"), handleChange("PriseDeTraitement : key") }
//                     />
//                     <TouchableOpacity>
//                     <AntDesign name="addfile" size={24} color="black" />

//                     </TouchableOpacity>
//             </View>

//             {/* <View style={styles.zone}>
//                <Text style={styles.zoneText}>Vaccination BCG: </Text>
 
//                 <OptionSwitch
// 		onChange={(value) => {

// 		}}
// 		options={[
// 			{
// 				label: 'Yes',
// 				value: false
// 			}, {
// 				label: 'No',
// 				value: true,
// 				isDefault: true,
// 			}
// 		]}
// 	/>

//             </View> */}


//             <Text>{JSON.stringify(values, null, 2)}</Text>
//         </View>

//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#273c75',
//         marginLeft: 10,
//         marginRight: 10,
//     },
//     dropdowncontainer: {
//         width: 200,
//         alignSelf: "center",
//         marginTop: -15,
//         marginBottom: 15,
//     },
//     dropdown: {
//         color: '#ecf0f1',
//     },
//     zone: {
//         borderWidth: 1,
//         borderRadius: 20,
//         borderColor: '#ecf0f1',
//         marginTop: 7,
//         marginBottom: 7,
//     },
//     zoneText: {
//         fontSize: 16,
//         fontWeight: "bold",
//         alignSelf: "flex-start",
//         marginTop: 5,
//         marginBottom: 5,
//         marginLeft: 25,
//         color: '#ecf0f1',
//     },
//     datepicker: {
//         width: 250,
//         marginTop: 15,
//         marginBottom: 15,
//     },
//     textInput: {
//         width: 200,
//         height: 40,
//         fontSize: 16,
//         color: '#ecf0f1',
//         alignSelf: "center",
//         marginTop: 5,
//         marginBottom: 30,
//         borderBottomWidth: 0.5,
//         borderBottomColor: '#d3d0d2',
//     },
// });
