import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PythonInterpreter from '../components/PythonInterpreter';

class CompilerScreen extends Component {
    static navigationOptions = {
        title: 'Python Compiler',
    };
    render() {
        return (
            <View style={styles.container}>
                <PythonInterpreter url={{ uri: 'https://www.jdoodle.com/embed/v0/1iWL' }} />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        paddingVertical: 15,
    },
});

export default CompilerScreen;