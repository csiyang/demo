import React, {useState} from 'react'
import { 
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet, 
} from 'react-native'

function Stories(props) {


  return (
    <View style={styles.stories}>
      <TouchableHighlight>
        <Image 
        style={styles.story}
        source={{
          uri: "http://picsum.photos/100/150",
          width: 100,
          height: 150
        }} />
      </TouchableHighlight>

      <TouchableHighlight>
        <Image 
        style={styles.story}
        source={{
          uri: "http://picsum.photos/100/150",
          width: 100,
          height: 150
        }} />
      </TouchableHighlight>

      <TouchableHighlight>
        <Image 
        style={styles.story}
        source={{
          uri: "http://picsum.photos/100/150",
          width: 100,
          height: 150
        }} />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  stories: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  story: {
    borderRadius: 10,
  }
})

export default Stories