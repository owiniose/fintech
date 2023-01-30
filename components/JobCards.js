import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const JobCards = () => {
  return (
    <View>
    <View style={styles.container} >
        
        <View style={styles.top}>
        <View style={{
            flexDirection:"row",
            paddingBottom:8,
            alignItems:"center",
        }}>  
        <FontAwesome5 name="facebook" size={30} color="blue" />
        <View style={{
            marginLeft:8
        }}>
            <Text style={{
                fontFamily: "RedHatBold",
                fontSize: 14,
                color:"#1B2932"
            }}> Senior UX/UI designer </Text>
            <Text style={{
                fontFamily: "RedHatMedium",
                fontSize: 10,
                color:"#1B2932"
            }} > Facebook</Text>
        </View>
        </View>
        <FontAwesome name="bookmark" size={30} color="#2C404E" />
        </View>


        <View style={{
            flexDirection:"row",
            alignItems:"center",
            paddingBottom:8,
            marginLeft:4
        }} >
        <FontAwesome5 name="map-marker-alt"
         size={28} color="#6A899E" />

         <Text style={{
            fontFamily: "RedHatMedium",
            fontSize: 12,
            color:"#425B6C",
            marginLeft:12
         }} > London, United Kingdom (On-Site) </Text>
        </View>

        <View style={{
            borderTopWidth:1,
            borderTopColor:"#C8E0E9",
            paddingTop:8
        }} >
        <Text style={{
             fontFamily: "RedHatMedium",
             fontSize: 12,
             color:"#5D7B90"
        }}>
            2 days ago . 12 other applicants. 3 connections
        </Text>
        </View>
        </View>


        <View style={styles.container} >
        
        <View style={styles.top}>
        <View style={{
            flexDirection:"row",
            paddingBottom:8,
            alignItems:"center",
        }}>  

<FontAwesome name="amazon" size={30} color="black" />
        <View style={{
            marginLeft:8
        }}>
            <Text style={{
                fontFamily: "RedHatBold",
                fontSize: 14,
                color:"#1B2932"
            }}> Senior UX/UI designer </Text>
            <Text style={{
                fontFamily: "RedHatMedium",
                fontSize: 10,
                color:"#1B2932"
            }} > Amazon</Text>
        </View>
        </View>
        <Feather name="bookmark" size={30} color="#2C404E" />
        </View>


        <View style={{
            flexDirection:"row",
            alignItems:"center",
            paddingBottom:8,
            marginLeft:4
        }} >
        <FontAwesome5 name="map-marker-alt"
         size={28} color="#6A899E" />

         <Text style={{
            fontFamily: "RedHatMedium",
            fontSize: 12,
            color:"#425B6C",
            marginLeft:12
         }} > London, United Kingdom (Hybrid) </Text>
        </View>

        <View style={{
            borderTopWidth:1,
            borderTopColor:"#C8E0E9",
            paddingTop:8
        }} >
        <Text style={{
             fontFamily: "RedHatMedium",
             fontSize: 12,
             color:"#5D7B90"
        }}>
            7 days ago . 140 other applicants. 8 connections
        </Text>
        </View>
        </View>
        <View style={styles.container} >
        
        <View style={styles.top}>
        <View style={{
            flexDirection:"row",
            paddingBottom:8,
            alignItems:"center",
        }}>  

    <FontAwesome5 name="stripe-s" size={24} color="black"   
        style={{
            marginLeft:5
        }}
        />

        <View style={{
            marginLeft:15
        }}>
            <Text style={{
                fontFamily: "RedHatBold",
                fontSize: 14,
                color:"#1B2932"
            }}> Head of product design </Text>
            <Text style={{
                fontFamily: "RedHatMedium",
                fontSize: 10,
                color:"#1B2932"
            }} > Amazon</Text>
        </View>
        </View>
        <Feather name="bookmark" size={30} color="#2C404E" />
        </View>


        <View style={{
            flexDirection:"row",
            alignItems:"center",
            paddingBottom:8,
            marginLeft:4
        }} >
        <FontAwesome5 name="map-marker-alt"
         size={28} color="#6A899E" />

         <Text style={{
            fontFamily: "RedHatMedium",
            fontSize: 12,
            color:"#425B6C",
            marginLeft:12
         }} > London, United Kingdom (Hybrid) </Text>
        </View>

        <View style={{
            borderTopWidth:1,
            borderTopColor:"#C8E0E9",
            paddingTop:8
        }} >
        <Text style={{
             fontFamily: "RedHatMedium",
             fontSize: 12,
             color:"#5D7B90"
        }}>
            7 days ago . 140 other applicants. 8 connections
        </Text>
        </View>
        </View>
    </View>
  )
}

export default JobCards

const styles = StyleSheet.create({
    top:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    container:{
        marginHorizontal:24,
        paddingHorizontal:16,
        paddingVertical:16,
        backgroundColor:"#EDF6F9",
        borderRadius:12,
        marginBottom:16
    }
})