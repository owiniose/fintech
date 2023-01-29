import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const JobCards = () => {
  return (
    <View>
        
        <View style={styles.top} >
        <FontAwesome5 name="facebook" size={24} color="" />
        <View>
            <Text> Senior UX/UI designer </Text>
            <Text> Facebook</Text>
        </View>
        <FontAwesome name="bookmark" size={24} color="black" />
        </View>


        <View>

        </View>

        <View>

        </View>

    </View>
  )
}

export default JobCards

const styles = StyleSheet.create({
    top:{
        flexDirection:"row",
        
    }
})