import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class Post extends React.Component {
  state = {
        nama: '',
        deskripsi:'',
        status:'',
        cek:false
  }
  handleSubmit = event => {

    axios.post('http://mhs.rey1024.com/apibudaya/postCategory.php', {
        nama:this.state.nama,
        deskripsi:this.state.deskripsi
     })
     .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const pesan = <Text style={{color:'red'}}> Post Data Berhasil </Text>;
    return (

      <View style={styles.container}>
          <View style={styles.vHeader}>
              <Text style={styles.txtHeader}>Upload Data</Text>
          </View>
          <View style={styles.vInput}>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>Nama Budaya      :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (nama) => { this.setState({nama}) } }
                          placeholder="Masukkan nama budaya"
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>Deskripsi Budaya  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (deskripsi) => { this.setState({deskripsi}) } }
                          placeholder="Masukkan deskripsi budaya"
                  />
              </View>
          </View>
          <View style={styles.vButton}>
              <TouchableHighlight
                          onPressIn={() =>{
                            this.handleSubmit()
                          }}
                          accessibilityLabel="hitung"
                          style={styles.vHitung}>

                          <Text style={styles.txtHeader}>Upload</Text>
              </TouchableHighlight>
          </View>
          <View style={{flex:3}}>




          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  vHeader: {
      flex:0.8,
      backgroundColor:'#194B95',
      alignItems:'center',
      justifyContent:'center'
  },
  vInput: {
      flex:2,
      backgroundColor:'#E3F2FD',
      justifyContent:'flex-start',
  },
  vItemInput: {
      flex:1,
      flexDirection:'row',
  },
  txtLabelInput: {
      flex:2,
      height: 30,
      marginLeft:20,
      marginTop:10

  },
  txtInput: {
      flex:3,
      marginRight:20,
      marginTop:5,
      height:40,
      backgroundColor:'#fff',
      borderColor: 'gray',
  },
  vButton:{
      flex:0.7,
  },
  vHitung:{
      flex:1,
      backgroundColor:'#194B95',
      margin:10,
      alignItems:'center',
      justifyContent:'center'
  },
  vHasil:{
      flex:2,
      backgroundColor:'#E3F2FD',
      justifyContent:'center',
  },
  txtHeader: {
      fontSize:20,
      color : 'white'
  },
});
