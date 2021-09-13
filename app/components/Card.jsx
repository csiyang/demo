import React, {useState} from 'react';
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'



function Card(props) {
  const [color, setColor] = useState('tomato')


  function handlePress() {
    if (color === 'tomato') {
      setColor('orange')
    } else {
      setColor('tomato')
    }
  }

  return (
    <TouchableHighlight 
      style={{
        margin: 20,
        height: 100,
        width: '90%',
        borderRadius: 5,
        backgroundColor: color
      }}
      onPress={handlePress}>
        <Text 
          style={{
            textAlign: 'center',
            color: 'white'
          }}>
            Tap me!
        </Text>
    </TouchableHighlight>
  )
}


export default Card;