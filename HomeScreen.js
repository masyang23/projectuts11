import React, { Component } from 'react';
import Expo from "expo";
import {  View, ScrollView, Text,StyleSheet,Image, FlatList,RefreshControl,StatusBar,ActivityIndicator, Alert,Linking, TouchableOpacity } from 'react-native';
import {Right, Container,Title,Header, Content, Form, Item, Input, Label, Left, Button,Icon, Body,Card,CardItem,List,ListItem, Thumbnail} from 'native-base'
export default class HomeScreen extends Component {


  render() {
    return (

      <View style={ styles.MainContainer }>
              <TouchableOpacity
                        activeOpacity={0.5 }
                        style={styles.TouchableOpacityStyle}
                        onPress ={() => this.props.navigation.navigate('Screen') }>
                      <Text style={styles.TextStyle }>MULAI</Text>
            </TouchableOpacity>
         </View>

    );
  }
}
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: '#BBDEFB'

    },

    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'flex-start',
      height: 100,
      width: 320,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      paddingTop: 5,
      paddingBottom: 5
    },

    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2196F3',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },

    TKJStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2196F3',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },
    MultimediaStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'purple',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },
    ProgrammingStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'red',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold'
    },

    ActivityIndicatorStyle:{

      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'

  },
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 20,
        color: '#2196F3'
    },
});
