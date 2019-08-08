import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, Image } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';

class ImageViewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.toogleModal = this.toogleModal.bind(this);
    };

    toogleModal = () => {
        this.setState((oldState) => {
            return {
                modalVisible: !oldState.modalVisible,
            };
        })
    };
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.toogleModal}>
                    <Image
                        source={this.props.sumber}
                        style={this.props.style}
                    />
                </TouchableHighlight>

                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={this.toogleModal}
                >
                    <ImageViewer
                        index={this.props.index}
                        imageUrls={[{ props: { source: this.props.sumber } }]}
                        onSwipeDown={this.toogleModal}
                        enableImageZoom={true}
                        enableSwipeDown={true}
                    />
                </Modal>
            </View>
        );
    };
};

export default ImageViewModal;