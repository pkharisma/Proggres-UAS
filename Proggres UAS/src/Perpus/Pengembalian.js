import React from 'react';
import { View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,image } from 'react-native';
import Header from "./Header";


export default class Pengembalian extends React.Component {
    static navigationOptions = {
    }
     constructor(props) {
         super(props);
         this.state = {
           kode_kembali: '',
           kode_buku: '',
           kode_anggota: '',
           nama_anggota: '',
           batas_waktu: '',
           denda:'',
           tanggal_kembali: '',
 
       };
     }
  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"DATA PENGEMBALIAN BUKU"} />
      
      <ScrollView>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Kode Pengembalian  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="kode kembali"
                  onChangeText={kode_kembali => this.setState({kode_kembali})}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Kode Buku  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="kode buku"
                  onChangeText={kode_buku => this.setState({ kode_buku })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Kode Anggota :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="kode anggota"
                  onChangeText={kode_anggota => this.setState({ kode_anggota })}
                  />
                </View> 
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Nama Anggota  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="nama anggota"
                  onChangeText={nama_anggota => this.setState({ nama_anggota })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                     Batas Waktu  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="batas waktu"
                  onChangeText={batas_waktu => this.setState({ batas_waktu })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Denda :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="denda"
                  onChangeText={denda => this.setState({ denda })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Tanggal_Kembali :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="tanggal kembali"
                  onChangeText={tanggal_kembali => this.setState({ tanggal_kembali })}
                  />
                </View>

                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.OK()}>
                  <Text style={styles.txtButton}>OK</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Kembali()}>
                  <Text style={styles.txtButton}>Kembali</Text>
                  </TouchableHighlight>
                </View>
        </ScrollView>
    </View>
        );
      }
  }
   const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#F0F8FF',
      flex: 1,
    },
  
    vHeader: {
      flex: 10,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box1: {
      flex: 0.5,
      width: "120%",
      marginTop: 10,
      marginLeft:10,
      paddingTop: 10,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    teksinputteks:{
      marginRight:0,
      marginLeft:10,
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
  },
    txtBox1: {
      width: 200,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBox1:{
      color: 'white',
      fontSize: 15,
    },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    box3: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    txtButton: {
      textAlign: 'center',
      marginTop: 10,
      color: 'black',
      fontSize: 20,
      width: '100%',
      height: 40,
    },
    vButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00ffff',
      borderRadius: 5,
      padding:20,
      margin:20,
      width: '30%',
      height: 50,
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    }
});