import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native'

function ListItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.pic}/>
      <View style={styles.line}/>
      <View style={styles.line}/>
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 60,
  },
  line: {
    flex: 1,
    backgroundColor: '#c9c9c9',
    width: '63%',
    marginLeft: 15,
    marginBottom: 20,
    height: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  pic: {
    flex: 3,
    backgroundColor: '#c9c9c9',
    width: '90%',
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
    height: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    flex: 1,
    width: 75,
    height: 75,
    borderRadius: 5,
    backgroundColor: '#c9c9c9',
    bottom: 20,
    right: 20,
    position: 'absolute',
  }
})

export default ListItem;