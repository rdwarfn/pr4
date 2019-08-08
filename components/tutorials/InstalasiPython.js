import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

import ImageViewModal from '../ImageViewModal';
import { FlatList } from 'react-native-gesture-handler';

class InstalasiPython extends Component {
    handleLink = (url) => {
        Linking.openURL(url)
            .catch((err) => console.log('Terjadi kesalahan', err))
    };
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Agar dapat menggunakan Python, maka terlebih dahulu kita harus memasang python di komputer kita. Di tutorial ini akan dijelaskan bagaimana caranya. Di sini digunakan sistem operasi Windows 7. Untuk sistem operasi lain, lebih kurang prosesnya adalah sama. Untuk sistem operasi linux, python sudah terinstall otomatis saat linuxnya diinstall.
                </Text>

                <Text style={styles.text}>
                    Adapun langkah – langkah menginstal python di windows adalah sebagai berikut :
                </Text>

                <View style={{ marginBottom: 5, marginTop: 5 }}>
                    <Text style={[styles.text, styles.list]}>
                        &#9865; Download installer python di situs <Text style={styles.link} onPress={() => this.handleLink('https://www.python.org/download')}>https://www.python.org/download</Text>. Di sini kita menggunakan python versi 3.4. Bila Anda bingung yang mana linknya, silahkan klik saja link ini :  <Text style={styles.link} onPress={() => this.handleLink('https://www.python.org/downloads/release/python-344/')}>https://www.python.org/downloads/release/python-344/</Text>. Silahkan pilih apakah Anda mau menggunakan versi 32 bit, atau 64 bit. Di sini kita gunakan versi 32 bit.
                    </Text>
                    <View style={styles.img}>
                        <ImageViewModal sumber={require('../../assets/images/tutorials/4_1.png')} style={{ alignSelf: 'center', height: 133, width: 285 }} />
                    </View>

                    <FlatList
                        data={[
                            { id: '1', content: 'Tunggu hingga proses download selesai. Setelah selesai, buka folder tempat python terdownload. Biasanya bila menggunakan windows, program terdownload akan masuk ke folder Download. Bila sudah ketemu, klik 2 kali. Akan muncul halaman peringatan (bila Anda menggunakan windows 7). Klik saja Run.', img: require('../../assets/images/tutorials/4_2.png'), width: 207.5, height: 155 },
                            { id: '2', content: 'Selanjutnya, akan muncul kotak dialog berikutnya. Pilih Install For All Users. Kemudian klik Next.', img: require('../../assets/images/tutorials/4_3.png'), width: 248, height: 213 },
                            { id: '3', content: ' Pastikan program terinstall di C:\\Python34. Klik Next.', img: require('../../assets/images/tutorials/4_4.png'), width: 248, height: 213 },
                            { id: '4', content: 'Di kotak dialog kostumisasi Python, scroll ke bawah, dan pilih Add Python.exe to path. Pilih Will be installed on local hardrive. Klik Next.', img: require('../../assets/images/tutorials/4_5.png'), width: 248, height: 213 },
                            { id: '5', content: 'Tunggu sampai proses instalasi selesai.', img: require('../../assets/images/tutorials/4_6.png'), width: 248, height: 213 },
                            { id: '6', content: 'Bila sudah selesai, akan keluar kotak dialog sebagai berikut. Hal ini menandakan bahwa python sudah terinstal di komputer Anda dan sudah siap untuk digunakan. Klik Finish.', img: require('../../assets/images/tutorials/4_7.png'), width: 248, height: 213 },
                        ]}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={[styles.text, styles.list]}>&#9865; {item.content}</Text>
                                <View style={styles.img}>
                                    <ImageViewModal sumber={item.img} style={{ alignSelf: 'center', height: item.height, width: item.width }} />
                                </View>
                            </View>
                        )}
                    />
                </View>

                <Text style={styles.text}>
                    Demikianlah proses instalasi Python di Windows. Python sudah siap digunakan untuk membuat program yang Anda inginkan.
                </Text>
            </View>
        );
    };
};


const styles = StyleSheet.create({
    img: {
        marginBottom: 20,
    },
    list: {
        paddingLeft: 10,
    },
    link: {
        color: '#007acc',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default InstalasiPython;