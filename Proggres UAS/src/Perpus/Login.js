import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import Header from "./Header";


export default class Main extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"SISTEM MANAJEMEN PERPUSTAKAAN"} />

      <Image source = {{uri: 'https://3.bp.blogspot.com/-tpzl4ezgpZg/VvorfXGcRCI/AAAAAAAAAFQ/7b2Cqw8nfDYYFiA_AShxW_WwBojLyDi_Q/s1600/Books.png'}} style = {{marginLeft:75,width: 200, height: 200}} />

      <View style={styles.slider}>
                <View style={styles.masuk}>
                    <Text style={styles.text3}>Username :</Text>
                    <TextInput style = {{height: 40, backgroundColor:'white', margin:20,padding: 10}}
                    placeholder="Masukkan Username"
                    onChangeText={
                        (username)=>this.setState({username})
                    }
                    keyboardType = 'text'
                    />
                </View>

                <View style={styles.masuk}>
                <Text style={styles.text3}>Password :</Text>
                <TextInput style = {{height: 40, backgroundColor:'white', margin:20,padding: 10}}
                    placeholder="Masukkan Username"
                    onChangeText={
                        (password)=>this.setState({password})
                    }
                    keyboardType = 'numeric'
                    />
                </View>

    <View style={styles.vButton}>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Menu')}
            title="OK"
            accessibilityLabel="Menu"
            />
    <View style={styles.vButton}></View>
            <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Daftaranggota')}
            title="Daftar Anggota"
            accessibilityLabel="Daftaranggota"
            />
          </View>
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
    flex: 0.5,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "orange",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 50,
      flexDirection: "row",

  },

  slider:{
    flex: 0.6,
    backgroundColor: '#F0F8FF',
    flexDirection: 'column',
    justifyContent : 'center',
  },

  masuk:{
    flex : 1,
    flexDirection: 'row',
  },

  text3: {
    fontSize: 15,
    color: 'black',
    margin:15,
  },
  vButton:{
    margin:5,
    borderRadius: 40,
    justifyContent: 'center',
  },
});


