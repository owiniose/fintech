import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View style={{
      marginLeft: 24,
      marginTop: 16,
      marginBottom:8,
    }}>
      <Text style={{
        fontFamily: "RedHatMedium",
        fontSize: 16,
      }}>Categories</Text>

      <View style={{
        flexDirection:"row",
      }} >
      <View style={{
        backgroundColor:"#FFE8D2",
        marginVertical:16,
        borderRadius:15,
        marginRight: 16,
        paddingRight: 16
        }} >
        <View style={{
          paddingTop:16,
          paddingBottom:4,
          marginLeft:16,
          flexDirection: "row",
          justifyContent: 'space-between'
        }} >
          <Text style={{
            fontFamily:"RedHatMedium",
            fontSize: 16,
          }}>
            Product Designer</Text>
            <AntDesign name="CodeSandbox" size={16} color="black" />
        </View>
        <Text style={{
          marginLeft:16,
          marginBottom:8,
          fontFamily:"RedHatMedium",
            fontSize: 12,
        }} >Facebook, Airbnb, Spotify + 72 more</Text>
        <View style={{
          flexDirection: "row",
          alignItems:"center",
          marginLeft:16,
          marginBottom:12,
         justifyContent:"space-between"
        }} >
          <View style={{
            flexDirection:"row"
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
        <AntDesign name="arrowright" size={24} color="black" 
          style={{
            position:"relative",
          }}
        />
        </View>
      </View>
      <View style={{
        backgroundColor:"#DAE2FE",
        marginVertical:16,
        borderRadius:15,
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
            UI/UX Design</Text>
          <Image/>
        </View>
        <Text style={{
          marginLeft:16,
          marginBottom:8
        }} >Stripe, Webflow, Wordpress + 18 more</Text>
        <View style={{
          flexDirection: "row",
          alignItems:"center",
          marginLeft:16,
          marginBottom:12,
        }} >
        <Text style={{
          
          fontFamily:"RedHatMedium",
          fontSize:24,
        }} >95 </Text>
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
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

})