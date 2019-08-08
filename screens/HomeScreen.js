import React from 'react';
import { Button, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/homeScreen.png')}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover'
          }}
          blurRadius={1}
        >
          <View style={[styles.main, styles.vertical]}>
            <View style={{ Top: '10%', justifyContent: 'center' }}>
              <MonoText style={{ fontSize: 40, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tutorial Python Dasar dilengkapi Kompiler</MonoText>
            </View>
            <View style={{ marginBottom: 15 }}>
              <Button title="Compiler" onPress={() => this.props.navigation.navigate('Compiler')} />
            </View>
            <View style={{ marginTop: 15 }}>
              <Button title="List Tutorial" onPress={() => this.props.navigation.navigate('BottomTab')} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  vertical: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  }
});
