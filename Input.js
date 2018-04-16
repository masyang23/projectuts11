import React, { Component } from 'react';
import {  View, Text,Image,StyleSheet,AppRegistry,StatusBar,TextInput,Alert } from 'react-native';
import Expo from "expo";
import {Container,Title,Header, Content, Form, Item, Input, Label, Left, Button,Icon, Body,Right} from 'native-base'
export default class FormExample extends Component {
  constructor(props) {

      super(props)

      this.state = {
        loading: true,
        nim: '',
        nama: '',
        judul: ''
      }

    }

    async componentWillMount() {
      await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      });
      this.setState({ loading: false });
    }


    InsertDataToServer = () =>{


      const { nim }  = this.state ;
      const { nama }  = this.state ;
      const { judul}  = this.state ;

     fetch('http://mhs.rey1024.com/appmobile/D1615051009/kirimData.php', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({

         nim: nim,

         nama: nama,
         judul: judul


       })

     }).then((response) => response.json())
           .then((responseJson) => {

     // Showing response message coming from server after inserting records.
             Alert.alert(responseJson);

           }).catch((error) => {
             console.error(error);
           });


       }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
      <Header>
                <Body>
                  <Title>Masukan Data Skripsi</Title>
                </Body>
                <Right />
              </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Nama Mahasiswa" onChangeText={nama => this.setState({nama})} />
            </Item>
            <Item>
              <Input placeholder="NIM" onChangeText={nim => this.setState({nim})} keyboardType='numeric'/>
            </Item>
            <Item>
              <Input placeholder="Judul Skripsi" onChangeText={judul => this.setState({judul})}/>
            </Item>
          </Form>
          <Content style={{ margin: 10 }}>
          <View>
          <Button block  onPress={this.InsertDataToServer}>
                      <Text>SUBMIT</Text>
                    </Button>
              </View>
          </Content>
        </Content>

      </Container>
    );
  }
}
