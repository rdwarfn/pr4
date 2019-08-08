import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import ImageViewModal from '../ImageViewModal';

class MemulaiProgram extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Python merupakan bahasa <Text style={styles.italic}>interpreter</Text> yang artinya kode python akan dieksekusi baris perbaris. Bila ada kesalahan program di tengah eksekusi, maka program akan berhenti — kecuali menggunakan penanganan eksepsi. Ada dua cara menjalankan <Text style={styles.italic}>interpreter</Text> python ini — untuk selanjutnya kita hanya akan menyebut python saja. Yang pertama adalah dengan menggunakan program <Text style={styles.bold}>command prompt</Text> (cmd) di windows. Yang kedua menggunakan program IDLE yang merupakan bawaan python sendiri. Di sini kita akan membahas keduanya.
                </Text>

                <Text style={styles.subHeader}>Menjalankan Python Menggunakan Command Prompt</Text>

                <Text style={styles.text}>
                    Langkah – langkah menjalankan python menggunakan cmd adalah sebagai berikut :
                </Text>

                <FlatList
                        data={[
                            { 
                                id: '1', 
                                content: 'Klik start menu, pilih All Programs. Kemudian pilih folder Accessories, dan terakhir klik Command Prompt.', 
                                img: require('../../assets/images/tutorials/6_1.png'), 
                                width: 135, 
                                height: 174
                            },
                            { 
                                id: '2', 
                                content: 'Selanjutnya akan tampil jendela command prompt. Ketikkan python pada jendela tersebut. Anda akan melihat munculnya tampilan berikut. Perhatikan ada tanda >>> atau disebut tanda prompt. Tanda tersebut menunjukkan bahwa Python sudah siap menerima perintah dalam bahasa Python.', 
                                img: require('../../assets/images/tutorials/6_2.png'), 
                                width: 224, 
                                height: 112 
                            },
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

                    <Text style={styles.subHeader}>Menjalankan Python Menggunakan IDLE</Text>
                    <Text style={styles.text}>
                        IDLE merupakan program editor bawaan Python. IDLE bisa digunakan dalam untuk menjalankan python dalam mode interaktif. Arti interaktif di sini adalah ketika Anda mengetikkan perintah, maka hasilnya akan langsung ditampilkan.
                    </Text>

                    <Text style={styles.text}>
                        Untuk menjalankan IDLE, lakukan langkah – langkah berikut :
                    </Text>

                    <FlatList
                        data={[
                            { 
                                id: '1', 
                                content: 'Klik start menu, pilih All Programs. Kemudian pilih Python34, dan selanjutnya klik IDLE (Python 3.4 GUI – 32 bit). Kalau Anda menggunakan versi 64 bit, maka klik IDLE (Python 3.4 GUI – 64 bit).', 
                                img: require('../../assets/images/tutorials/6_3.png'), 
                                width: 136, 
                                height: 174
                            },
                            { 
                                id: '2', 
                                content: 'Selanjutnya akan muncul jendela IDLE yang mirip dengan tampilan python pada command prompt',
                                contentExtra: 'Pada jendela interaktif Anda tidak bisa mengetikkan program dengan jumlah baris yang banyak. Mode interaktif ini hanya cocok digunakan untuk melakukan uji coba perintah – perintah pendek dan melihat hasilnya.\n\nBila Anda akan menuliskan program dengan jumlah baris yang banyak, Anda sebaiknya menggunakan program editor teks. IDLE sendiri selain memiliki mode interaktif, juga memiliki jendela editor.',
                                img: require('../../assets/images/tutorials/6_4.png'), 
                                width: 227, 
                                height: 85
                            },
                            {
                                id: '3',
                                content: 'Adapun cara membuka editor IDLE adalah dari jendela IDLE di atas. Pada jendela IDLE interaktif, Anda melihat ada menu File di sebelah kiri atas. Klik File, dan pilih New File.',
                                img: require('../../assets/images/tutorials/6_5.png'), 
                                width: 226, 
                                height: 106
                            },
                            {
                                id: '4',
                                content: 'Selanjutnya Anda akan melihat tampilan editor yang masih kosong seperti di bawah ini. Di situlah Anda bisa mengetikkan baris – baris program.',
                                img: require('../../assets/images/tutorials/6_6.png'), 
                                width: 227, 
                                height: 112
                            },
                            {
                                id: '5',
                                content: 'Untuk menyimpan program yang Anda tulis, klik File, kemudian pilih Save. Beri nama program Anda dan klik tombol Save. Anda bisa menyimpan file program yang Anda buat di mana saja. Direktori penyimpanan defaultnya adalah di C:\\Python34 seperti gambar berikut :',
                                img: require('../../assets/images/tutorials/6_7.png'), 
                                width: 190, 
                                height: 141
                            },
                        ]}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={[styles.text, styles.list]}>&#9865; {item.content}</Text>
                                <View style={styles.img}>
                                    <ImageViewModal sumber={item.img} style={{ alignSelf: 'center', height: item.height, width: item.width }} />
                                </View>
                                                    {item.contentExtra ? <Text style={styles.text}>{item.contentExtra}</Text> : null}
                            </View>
                        )}
                    />

                    <Text style={styles.subHeader}>Mencoba Python Pertama Kali</Text>
                    <Text style={styles.text}>
                        Pada bagian ini kita akan mulai mencoba bereksperimen dengan menggunakan python. Teori tanpa praktek tidak akan ada gunanya.
                    </Text>

                    <Text style={styles.text}>
                        Pertama sekali, silahkan buka IDLE seperti cara yang sudah dijelaskan di atas.
                    </Text>
                    
                    <Text style={styles.text}>
                        Awalnya kita akan menggunakan python seperti kalkulator sederhana. Kita bisa melakukan penjumlahan, perkalian, dan seterusnya.
                    </Text>

                    <Text style={styles.text}>
                        Ketikkan perintah – perintah berikut di IDLE. Yang Anda ketikkan adalah yang di depan tanda prompt >>>. Hasilnya akan langsung ditampilkan.
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        >>> 12 + 13{'\n'}
                        25{'\n'}
                        >>> 2 - 4{'\n'}
                        -2{'\n'}
                        >>> 5 * 9{'\n'}
                        45{'\n'}
                        >>> 2/4{'\n'}
                        0.5{'\n'}
                        >>> 2 ** 3{'\n'}
                        8
                    </Text>
                    

                    <Text style={styles.text}>
                        Selanjutnya kita coba menampilkan pesan “Hello World!” ke layar. Ketikkan perintah berikut :
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        >>> print("Hello World!"){'\n'}
                        Hello World!{'\n'}
                        >>> 2 - 4{'\n'}
                        >>> print("Saya belajar Python"){'\n'}
                        Saya belajar Python
                    </Text>

                    <Text style={styles.text}>
                        Untuk sementara, cukup disitu dulu yang perlu Anda lakukan. Pada tutorial selanjutnya, kita akan mempelajari dasar – dasar python lainnya.
                    </Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    code: {
        backgroundColor: '#FFFFD4',
        padding: 10,
    },
    img: {
        marginBottom: 20,
    },
    italic: {
        fontStyle: 'italic',
    },
    list: {
        paddingLeft: 15
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    textCode: {
        color: '#e17055',
    },
});

export default MemulaiProgram;