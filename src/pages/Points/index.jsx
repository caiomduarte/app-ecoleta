

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Points (){

    const navigation = useNavigation();
 //Navega para tela de detalhes
 function handleNavigationToDetail(){
    navigation.navigate('Detail');
  }



    return(
        <View style={styles.container}>
            <Text>Tela de Points</Text>

            <TouchableOpacity onPress={handleNavigationToDetail}>
                <Text>Abrir tela de detalhes</Text>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },


});