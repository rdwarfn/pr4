import React, { Component } from 'react';
import { FlatList, ActivityIndicator, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Button, Container, Header, Content, ListItem, Text, Left, Right, Icon, Spinner } from 'native-base';
import pythonStore from '../components/pythonStrore';
import Axios from 'axios';

class ListsScreen extends Component {
    static navigationOptions = {
        title: 'Python Tutorial',
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: true,
        };
    };

    componentDidMount() {
        this.setState({
            articles: pythonStore,
            isLoading: false,
        });
    };

    _handlePress = (item) => {
        this.props.navigation.navigate('Details', {
            Id: item.id,
            Title: item.title,
            Content: item.content,
            Lists: item.list,
            Photo: item.photo,
            ContentExtra: item.contentExtra,
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            )
        }
        return (
            <Container>
                <Content>
                    <FlatList
                        data={this.state.articles}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <ListItem
                                button={true}
                                onPress={() => this._handlePress(item)}
                            >
                                <Left>
                                    <Text>{item.title}</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

export default ListsScreen;
