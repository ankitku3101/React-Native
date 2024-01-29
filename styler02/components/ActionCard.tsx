import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
    <View style={styles.cardContainer}>
      <Text style={styles.headingText}>Some more Links</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Check out my Socials
            </Text>
        </View>
        <Image
            source={
                require('F:\\PROJECTS\\Android\\styler02\\assets\\images\\abc2.jpg')
            }
        style={styles.cardImage}    
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Click below to know more about me by visiting my LinkedIn and Instagram profiles. Make sure to connect and follow.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/in/ankit-kumar-25aa53134')}
            >
            <Text style={styles.socialLinks}>LinkedIn</Text>
            </TouchableOpacity>    
            <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/ankit31jan')}
            >
            <Text style={styles.socialLinks}>Instagram</Text>
            </TouchableOpacity>
        </View>
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        alignItems: 'center'
    },
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        width: 360,
        height: 350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard:{
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer:{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage:{
        height: 150,
        width: 350
    },
    bodyContainer:{
        padding: 10
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks:{
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 5
    }
})