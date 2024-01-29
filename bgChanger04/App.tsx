import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const [squareBackground, setSquareBackground] = useState("#ff55ff");
  const [circleBackground, setCircleBackground] = useState("#55ff55");
  const [rectangleBackground, setRectangleBackground] = useState("#1f44f1");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    
    const generateSingleColor = () => {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let color, squareColor, circleColor, rectangleColor;

    // Ensure that colors are distinct
    do {
        color = generateSingleColor();
        squareColor = generateSingleColor();
        circleColor = generateSingleColor();
        rectangleColor = generateSingleColor();
    } while (squareColor === color || circleColor === squareColor || rectangleColor === squareColor);

    setSquareBackground(squareColor);
    setCircleBackground(circleColor);
    setRectangleBackground(rectangleColor);
    setRandomBackground(color);
};
  
  return (
    <>
      <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={[styles.square, {backgroundColor: squareBackground}]}></View>
        <View style={[styles.circle, {backgroundColor: circleBackground}]}></View>
        <View style={[styles.rectangle, {backgroundColor: rectangleBackground}]}></View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn:{
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt:{
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  },
  square:{
    height: 135,
    width: 135,
    position: 'absolute',
    top: 130,
    left: 30 
  },
  circle:{
    height: 135,
    width: 135,
    borderRadius : 135/2,
    position: 'absolute',
    top: 130,
    right: 30 
  },
  rectangle:{
    height: 145,
    width: 220,
    position: 'absolute',
    bottom: 140 
  }  
});

export default App;
