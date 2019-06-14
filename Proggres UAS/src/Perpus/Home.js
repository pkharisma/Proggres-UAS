import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import Login from './Login';
import Menu from './Menu';
import Daftaranggota from './Daftaranggota';
import Tambahpeminjaman from './Tambahpeminjaman';
import Pengembalian from './Pengembalian';
import Rakbuku from './Rakbuku';
import Tambahbuku from './Tambahbuku';

const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Login:Login,
            Menu: Menu,
            Daftaranggota:Daftaranggota,
            Tambahpeminjaman:Tambahpeminjaman,
            Pengembalian:Pengembalian,
            Rakbuku:Rakbuku,
            Tambahbuku:Tambahbuku,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);
