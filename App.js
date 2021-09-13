import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  SafeAreaView,
  StyleSheet,
  View, 
  ScrollView,
} from 'react-native';

import Title from './app/components/Title'
import Stories from './app/components/Stories'
import Card from './app/components/Card'
import List from './app/components/List'
import Buttons from './app/components/Buttons'

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.bar} />
      
      <SafeAreaView>
        <ScrollView>
          <Title />
          <Stories />
          <Card />
          <List />
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>

      <Buttons />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bar: {
    width: '100%',
    height: 40,
    backgroundColor: 'dodgerblue',
    position: 'absolute',
    top: 0
  }
})