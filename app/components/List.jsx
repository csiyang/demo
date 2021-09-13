import React from 'react';
import { StyleSheet, View } from 'react-native'

import ListItem from './ListItem'

function List(props) {
  return (
    <View style={styles.list}>
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default List;