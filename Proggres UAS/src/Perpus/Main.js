import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import Header from "./Header";


export default class Main extends React.Component {
  static navigationOptions = {
  }
   constructor(props) {
       super(props);
       this.state = {
         kodeanggota: '',
         nama: '',
        };
      }

  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"SISTEM MANAJEMEN PERPUSTAKAAN"} />

      <Image source = {{uri: 'https://3.bp.blogspot.com/-tpzl4ezgpZg/VvorfXGcRCI/AAAAAAAAAFQ/7b2Cqw8nfDYYFiA_AShxW_WwBojLyDi_Q/s1600/Books.png'}} style = {{marginLeft:75,width: 200, height: 200}} />

    <View style={styles.vButton}>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Login')}
            title="Login"
            accessibilityLabel="Login"
            />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F0F8FF',
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
  vButton:{
    margin:5,
    borderRadius: 40,
    justifyContent: 'center',
  },
});


