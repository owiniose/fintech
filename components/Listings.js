import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const Listings = () => {
  return (
    <View style={{
        marginLeft: 24,
        marginRight: 24,
        marginVertical: 16, 
    }} >
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingVertical:8,
            marginBottom:12,
            alignItems:"center"
        }} >
      <Text style={{
         fontFamily: "RedHatMedium",
         fontSize: 16,
      }} >Listing</Text>

    <Entypo name="sound-mix" size={16} color="black" style={{
        padding:10,
        backgroundColor:"#EDF6f9",
        borderRadius:15
    }} />

      </View>
    <View
        style={{
            flexDirection:"row",
        }}
    >
        <Text style={styles.header} >New</Text>
        <Text style={styles.header_} > Remote</Text>
        <Text style={styles.header_} >Best Rated Company </Text>
        <Text style={styles.header_} >Newly Added Company </Text>
    </View>


    </View>
  )
}

export default Listings

const styles = StyleSheet.create({
    header:{
        fontFamily: "RedHatMedium",
        fontSize: 12,
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:"#2C404E",
        marginRight:12,
        borderRadius:10,
        color:"white"
    },
    header_:{
        fontFamily: "RedHatMedium",
        fontSize: 12,
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:"#EDF6f9",
        marginRight:12,
        borderRadius:10,
        color:"#2C404E"
    }
})