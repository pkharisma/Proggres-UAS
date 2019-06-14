import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';


export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        categories: [],
    };
  }
  componentDidMount() {
    axios.get('http://mhs.rey1024.com/apibudaya/getListCategory.php')
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
      .catch(function (error){
        console.log(error);
    })
  }

  render() {
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Kategori Budaya </Text>
            <Text style={styles.txtHeader}> I Nyoman Teguh Sujana Putra </Text>
            <Text style={styles.txtHeader}> 1715051011 </Text>
          </View>
          <FlatList
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.categories}
              renderItem = {({ item }) => (
                <ListItem
                  onPress={()=>this.props.navigation.navigate("DetailWadaya",{id_kategori:item.kategori_id,nama:item.nama})}
                  title={item.nama}
                  leftAvatar={{ source: { uri: 'http://wadaya.rey1024.com/upload/kategori/'+item.gambar } }}
                />
              )}
          />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems:'center'
  },
});
