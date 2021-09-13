import React from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  Button, 
  Alert,
} from 'react-native';

function Buttons(props) {
  return (
    <View style={styles.buttons}>
      <Button 
        title="Press for alert"
        color= 'white'
        onPress= {() => 
          Alert.alert('Hey,', 'would you like a compliment?', [
            {text: 'Hit Me', onPress: () => Alert.alert('', 'You\'re awesome!!!')},
            {text: 'Not Today', onPress: () => Alert.alert('', 'That\'s cool too I guess...')}
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#54f21f',
    width: '100%',
    height: 60
  }
})

export default Buttons;