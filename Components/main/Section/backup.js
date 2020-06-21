
            <View style={styles.zone}>
 

            <Text style={styles.zoneText}>Age au diagnostic:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Écrivez ici..."
                value={values.AgeAuDiagnostic}
                onChangeText={handleChange(`Comorbidite[${Comorbiditenumber}]['AgeAuDiagnostic']`)}
                placeholderTextColor={'#d3d0d2'}
                keyboardType='numeric'
            />

            {/* <Text style={styles.zoneText}>Prise de traitement Pharmaceutique:</Text>
            <RadioForm
                radio_props={  [
                    {label: 'non', value:  'non' },
                    {label:'oui' , value: 'oui' }
                  ]}
                initial={values.PriseDeTraitement}                   
                labelHorizontal={true}
                buttonColor={'#2196f3'}
                onPress={handleChange("Comorbidite['PriseDeTraitement'][0]")}
                />
                <TouchableOpacity on>
                <AntDesign name="addfile" size={24} color="black" />
                </TouchableOpacity> */}
        </View>
        <View style={styles.zone}>
            {/* <Text style={styles.zoneText}>Statut matrimonial :</Text>
            <Dropdown
                value={values.Comorbidite}
                containerStyle={styles.dropdowncontainer}
                style={styles.dropdown}
                data={Comorbidite}
                selectedItem={values.Comorbidite}
                onChangeText={handleChange("Comorbidite['Comorbidite'][1]")}
                baseColor='#ecf0f1'
            />
             */}
            <Text style={styles.zoneText}>Age au diagnostic:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Écrivez ici..."
                value={values.AgeAuDiagnostic}
                onChangeText={handleChange("Comorbidite[1]['AgeAuDiagnostic']")}
                placeholderTextColor={'#d3d0d2'}
                keyboardType='numeric'
            />

            {/* <Text style={styles.zoneText}>Prise de traitement Pharmaceutique:</Text>
            <RadioForm
                radio_props={  [
                    {label: 'non', value:  'non' },
                    {label:'oui' , value: 'oui' }
                  ]}
                initial={values.PriseDeTraitement}                   
                labelHorizontal={true}
                buttonColor={'#2196f3'}
                onPress={handleChange("Comorbidite['PriseDeTraitement'][1]")}
                />
                <TouchableOpacity on>
                <AntDesign name="addfile" size={24} color="black" />
                </TouchableOpacity> */}
        </View>