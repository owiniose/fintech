import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const Listings = () => {
  return (
    <View style={{
        marginLeft: 24,
        marginRight: 24,
        marginTop: 16, 
    }} >
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between"
        }} >
      <Text style={{
         fontFamily: "RedHatMedium",
         fontSize: 16,
      }} >Listing</Text>

<Entypo name="sound-mix" size={20} color="black" />

      </View>
    </View>
  )
}

export default Listings

const styles = StyleSheet.create({})