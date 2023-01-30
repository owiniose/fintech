import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Menu = () => {
  return (
    <View style={{
        position:"absolute",
        alignItems:"center",
        bottom:-50,
  }}>
      <View style={{
          flex:1,
          flexDirection:'row',
          width: "100%",
          paddingTop:10,
          justifyContent:'space-evenly',
          backgroundColor:"white",
          opacity:1,
          marginRight:70,
          alignItems:"baseline"

}}>

  <View style={styles.navMenu}>
  <AntDesign name="home" size={24} color="#5C849E" />
  <Text style={styles.text}    >Home</Text>


  </View>
  <View style={styles.navMenu} >
  <Ionicons name="md-briefcase" size={24} color="#2C404E" />    
  <Text
  style={{
    fontFamily:'RedHatMedium',
         fontSize:12,
         color:"#2C404E",
  }}
  >Jobs</Text>
  </View>

  <View style={styles.navMenu} >
  <Ionicons name="chatbubbles-outline" size={24} color="#5C849E" />
  <View style={styles.tabBadge} />
  <Text
  style={styles.text}    
  >Messages</Text>
  </View>

  <View style={styles.navMenu} >
  <Ionicons name="person-circle-outline" size={28} color="#5C849E" />         
  <Text
      style={styles.text}    
  >Profile</Text>

  </View>
       
      </View>
      
  </View>
  )
}

export default Menu

const styles = StyleSheet.create({
      navMenu:{
        alignItems:'center',

      },
      text:{
        fontFamily:'RedHatMedium',
         fontSize:12,
         color:"#5C849E",
      },
      tabBadge: {
        position: 'absolute',
        top: 1,
        right: 8,
        backgroundColor: '#f46c6c',
        borderRadius: 15,
        zIndex: 2,
        height:9,
        width:9,
      }
})