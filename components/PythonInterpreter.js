import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AutoResizeHeightWebView from 'react-native-autoreheight-webview';

class PythonInterpreter extends Component {
    static defaultProps = {
        type: 0,
    };
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        };
    }
    render() {
        return (
            <View style={styles.webview}>
                <AutoResizeHeightWebView
                    ref={e => this.webv = e}
                    defaultHeight={200}
                    needAutoResetHeight={false}
                    style={{ backgroundColor: 'white', width: 330 }}
                    source={this.props.url}
                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.state.showMore ? this.webv.resetSmallHeight() : this.webv.resetHeight();
                    this.setState({
                        showMore: !this.state.showMore
                    })
                }}>
                    <Text>
                        {this.state.showMore ? <Text>Kecilkan &#9746;</Text> : <Text>Besarkan &#9744;</Text>}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'powderblue',
        marginTop: -50,
        padding: 10,
        opacity: 0.8,
    },
    webview: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    }
});

export default PythonInterpreter;