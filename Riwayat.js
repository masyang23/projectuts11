import React, { Component } from 'react';
import Expo from "expo";
import {  View, ScrollView, Text,StyleSheet,Image, FlatList,RefreshControl,StatusBar,ActivityIndicator, Alert,Linking } from 'react-native';
import {Right, Container,Title,Header, Content, Form, Item, Input, Label, Left, Button,Icon, Body,Card,CardItem,List,ListItem, Thumbnail} from 'native-base'
export default class Riwayat extends Component {

  constructor(props) {
  super(props);
  this.state = {
    loading: true,
    data: [],
    error: null,
    refreshing: false,
    ActivityIndicator_Loading: false,
  };
}

componentDidMount() {
  this.setState({ ActivityIndicator_Loading: true }, () => {
    this.setState({ refreshing: true });
    const url = 'http://mhs.rey1024.com/appmobile/D1615051009/getData.php';
    //this.setState({ loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false,
          ActivityIndicator_Loading: false,

        });
      }
      );
  });
}

onRefresh() {
  Alert.alert('test');
  this.setState({refreshing: true});
  this.componentDidMount();
  }

async componentWillMount() {
  await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
  });
  this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
  		return <Expo.AppLoading />;
  	  }
    return (

      <Container>
      <Header>
                <Body>
                  <Title>View Data Skripsi</Title>
                </Body>
                <Right />
              </Header>
      <View>
    {
      this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'/> : null
    }
    <View>
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh.bind(this)}
        />
      }
      data={this.state.data}
      keyExtractor={item=> item.id}
      renderItem={({ item }) =>
      <Card>
      <CardItem>
        <Left>

        <Body>
        <Text style={{fontSize: 20}} >Nama Mahasiswa :{item.nama}</Text>
        <Text style={{fontSize: 20}} >nim Mahasiswa :{item.nim}</Text>
        <Text style={{fontSize: 20}} >Judul Skripsi :{item.judul}</Text>
        </Body>
        </Left>
      </CardItem>
    </Card>
      }
// 						onEndReached={this.onEndReached}
//   onEndReachedThreshold={0.5}

    />
    </View>
  </View>
      </Container>
    );
  }
}
