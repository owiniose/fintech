import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={{
      marginLeft: 24,
      marginTop: 16,
      marginBottom:8
    }}>
      <Text style={{
        fontFamily: "RedHatMedium",
        fontSize: 16
      }}>Categories</Text>

      <View style={{
        backgroundColor:"#FFE8D2",
        marginVertical:16,
        borderRadius:15
      }} >
        <View style={{
          paddingTop:16,
          paddingBottom:4,
          marginLeft:16
        }} >
          <Text style={{
            fontFamily:"RedHatMedium",
            fontSize: 16,
          }}>
            Product Designer</Text>
          <Image/>
        </View>
        <Text style={{
          marginLeft:16,
          marginBottom:8
        }} >Facebook, Airbnb, Spotify + 72 more</Text>
        <View style={{
          flexDirection: "row",
          alignItems:"center",
          marginLeft:16,
          marginBottom:12,
        }} >
        <Text style={{
          
          fontFamily:"RedHatMedium",
          fontSize:24,
        }} >152 </Text>
        <Text style={{
          fontFamily:"RedHatMedium",
          fontSize:12,
          alignSelf:"flex-end",
          paddingBottom:3
        }} >
          positions
        </Text>
        </View>
      </View>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

})