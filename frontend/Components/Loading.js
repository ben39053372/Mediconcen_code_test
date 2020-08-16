import React from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator animating={true} style={{flex: 1}} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    height: '100%', 
    justifyContent: 'center',
    backgroundColor: '#0001',
    
  }
})