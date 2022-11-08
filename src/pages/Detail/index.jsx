


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import { useNavigation } from '@react-navigation/native';

export default function Detail (){


    const navigation = useNavigation();


 //Navega para tela home
 function handleNavigationToHome(){
    navigation.navigate('Home');
  }


  
    return(
        <View style={styles.container}>
            <Text>Tela de Detalhes</Text>

            <TouchableOpacity onPress={handleNavigationToHome}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },


});