import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

function Title(props) {
  return (
    <View>
      <Text style={styles.title}>Demo!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 10
  }
})

export default Title