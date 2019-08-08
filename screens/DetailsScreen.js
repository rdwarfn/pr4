import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, Image, FlatList, Modal, TouchableWithoutFeedback, StyleSheet, WebView } from 'react-native';
import { ListItem, Text, Left, Body, Right, Thumbnail } from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';
import AutoResizeHeightWebView from 'react-native-autoreheight-webview';

import SejarahPython from '../components/tutorials/SejarahPython';
import MengapaPython from '../components/tutorials/MengapaPython';
import PenggunaPython from '../components/tutorials/PenggunaPython';
import InstalasiPython from '../components/tutorials/InstalasiPython';
import ProgramPertama from '../components/tutorials/ProgramPertama';
import MemulaiProgram from '../components/tutorials/MemulaiProgram';
import KataKunciDanPengenal from '../components/tutorials/KataKunciDanPengenal';
import SintaksDasar from '../components/tutorials/SintaksDasar';
import Operator from '../components/tutorials/Operator';

import VariableDanTypeData from '../components/tutorials/VariableDanTypeData';


let Dimensions = require('Dimensions');
let { width, height } = Dimensions.get('window');

class DetailsScreen extends Component {
    static defaultProps = {
        type: 0
    };
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            modalUrl: '',
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setTimer();
    };

    componentWillUnmount() {
        this.clearTimer();
    };

    setTimer = () => {
        this.timerHandle = setTimeout(() => {
            this.setState({ isLoading: false });
            this.timerHandle = 0;
        }, 1000);
    };

    clearTimer = () => {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    };

    openModal = (url) => {
        this.setState((state) => {
            return {
                modalVisible: true,
                modalUrl: url,
            }
        });
    };

    render() {
        const Id = this.props.navigation.getParam('Id', null);
        const Title = this.props.navigation.getParam('Title', null);
        const Content = this.props.navigation.getParam('Content', null);
        const Lists = this.props.navigation.getParam('Lists', null);
        const Photo = this.props.navigation.getParam('Photo', null);
        const ContentExtra = this.props.navigation.getParam('ContentExtra', null);

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text style={Photo != undefined ? styles.header : styles.undefined}>
                        {Id}. {Title}
                    </Text>
                </View>

                {/* {
                    Photo != undefined ?
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableWithoutFeedback onPress={() => this.openModal(Photo[0].url)}>
                                    <Image source={{ uri: Photo[0].url }} style={{ width: Photo[0].width, height: Photo[0].height }} />
                                </TouchableWithoutFeedback>
                            </View>
                            <View>
                                <Modurll
                                    urlisible={this.state.modalVisible}
                                    transparent={true}
                                    onRequestClose={() => this.setState({ modalVisible: false })}
                                >
                                    <ImageViewer
                                        imageUrls={[{ url: this.state.modalUrl }]}
                                        onSwipeDown={() => this.setState({ modalVisible: false })}
                                        enableImageZoom={true}
                                        enableSwipeDown={true}
                                    />
                                </Modal>
                            </View>
                        </View>
                        :
                        null
                }

                <View>
                    <Text>{Content}</Text>
                </View>

                {
                    Id === "5" ?
                        <CompilerApi />
                        :
                        null
                }

                {
                    Lists != undefined ?
                        Lists[0].photo === undefined ?
                            <View>
                                <FlatList
                                    data={Lists}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <ListItem itemDivider={item.divider ? item.divider : false} >
                                            <Text>{item.id}. {item.content}</Text>
                                        </ListItem>
                                    )}
                                />
                            </View>
                            :
                            <View>
                                <View>
                                    <FlatList
                                        data={Lists}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => (
                                            <ListItem thumbnail onPress={() => this.openModal(item.photo)}>
                                                <Left>
                                                    <Thumbnail square source={{ uri: item.photo }} />
                                                </Left>
                                                <Body>
                                                    <Text note>{item.content}</Text>
                                                </Body>
                                            </ListItem>
                                        )}
                                    />
                                </View>
                                <View>
                                    <Modal
                                        visible={this.state.modalVisible}
                                        transparent={true}
                                        onRequestClose={() => this.setState({ modalVisible: false })}
                                    >
                                        <ImageViewer
                                            imageUrls={[{ url: this.state.modalUrl }]}
                                            onSwipeDown={() => this.setState({ modalVisible: false })}
                                            enableImageZoom={true}
                                            enableSwipeDown={true}
                                        />
                                    </Modal>
                                </View>
                            </View>
                        :
                        null
                }

                <View>
                    <Text>{ContentExtra}</Text>
                </View> */}

 

                {
                    Id === "1" ?
                        <SejarahPython />
                        :
                        null
                }

                {
                    Id === "2" ?
                        <MengapaPython />
                        :
                        null
                }

                {
                    Id === "3" ?
                        <PenggunaPython />
                        :
                        null
                }

                {
                    Id === "4" ?
                        <InstalasiPython />
                        :
                        null
                }

                {
                    Id === "5" ?
                        <ProgramPertama />
                        :
                        null
                }

                {
                    Id === "6" ?
                        <MemulaiProgram />
                        :
                        null
                }

                {
                    Id === "7" ?
                        <KataKunciDanPengenal />
                        :
                        null
                }

                {
                    Id === "8" ?
                        <SintaksDasar />
                        :
                        null
                }

                {
                    Id === "9" ?
                        <VariableDanTypeData />
                        :
                        null
                }

                {
                    Id === "10" ?
                        <Operator />
                        :
                        null
                }
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        paddingVertical: 15
    },
    header: { fontSize: 20, fontWeight: 'bold', margin: 6, textAlign: 'center' },
    undefined: { fontSize: 20, fontWeight: 'bold', margin: 6, textAlign: 'center', marginBottom: 30 },
});

export default DetailsScreen