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

      <View>
        <View>
          <Text>Product Designer</Text>
          <Image/>
        </View>
        <Text>Facebook, Airbnb, Spotify, 72 more</Text>
        <Text>152 </Text>
      </View>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

})