import React from 'react';
import { View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,image } from 'react-native';
import Header from "./Header";


export default class Rakbuku extends React.Component {
    static navigationOptions = {
    }
     constructor(props) {
         super(props);
         this.state = {
           id_rakbuku: '',
           kode_buku: '',
           jumlah_buku: '',
       };
     }
  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"DATA RAK BUKU"} />
      
      <ScrollView>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      ID Rak Buku  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="id_rakbuku"
                  onChangeText={id_rakbuku => this.setState({id_rakbuku})}
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
                      Jumlah Buku :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="jumlah buku"
                  onChangeText={jumlah_buku => this.setState({ jumlah_buku })}
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