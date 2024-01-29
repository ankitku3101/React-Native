import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.headingText}>About Me</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
            source={
                require('F:\\PROJECTS\\Android\\styler02\\assets\\images\\abc.jpeg')
            }
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hey! its me Ankit</Text>
            <Text style={styles.cardLabel}>I'm from Jamshedpur</Text>
            <Text style={styles.cardDescription}>B.Tech. in CSE undergraduate, keen on developing solutions to real world problems.</Text>
            <Text style={styles.cardFooter}>Apart from these I'm interested in film making and content creation.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        padding: 8,
        alignItems: 'center'
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      alignItems: 'flex-start',
      paddingHorizontal: 8,

    },
    card:{
      width: 360,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16
    },
    cardElevated:{
      backgroundColor: '#FFFFFF',
      elevation: 4,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    cardImage:{
        height: 180,
        width: 360,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
      },
    cardBody:{
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12
    },
    cardTitle:{
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4
    },
    cardLabel:{
      color: '#000000',
      fontSize: 14,
      marginBottom: 6
    },
    cardDescription:{
      color: '#242B2E',
      fontSize: 12,
      marginBottom: 12,
      marginTop: 6,
      flexShrink: 1
    },
    cardFooter:{
      color: '#242B2E',
      fontSize: 12
    }
})