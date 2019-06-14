import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import Header from "./Header";


export default class Main extends React.Component {

  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"Aplikasi Mobile \n I Nyoman Teguh Sujana Putra \n 1715051011"} />

      <Image source = {{uri: 'http://rey1024.com/undiksha.png'}} style = {{marginLeft:90,width: 200, height: 200}} />

      <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Wadaya') }>
                    <Text style={styles.buttonText}>Lihat Data</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Post') }>
                    <Text style={styles.buttonText}>Upload Budaya</Text>
                </TouchableHighlight>


            </View>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },


  button2Style: {
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "orange",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 5,
  },
});
