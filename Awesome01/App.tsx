import React from 'react'

import {
  View,
  Text,
  Button,
  Alert,
  SafeAreaView
} from 'react-native'

function App(){
  return(
    <SafeAreaView>
    <View>
      <Text>Hello World !</Text>
      <Text>Hello World !</Text>
      <Text>Hello World !</Text>
      <Text>Hello World !</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    </SafeAreaView>
  )
}

export default App;