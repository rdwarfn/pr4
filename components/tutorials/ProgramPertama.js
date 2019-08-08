import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

import PythonInterpreter from '../PythonInterpreter';

class ProgramPertama extends Component {

    handleLink = (url) => {
        Linking.openURL(url)
            .catch((err) => console.log('Terjadi kesalahan', err))
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Seringkali, program “Hello World!” digunakan untuk mengenalkan suatu bahasa pemrograman ke pemula. Program “Hello World!” adalah sebuah program sederhana yang menampilkan kalimat “Hello World!” di monitor.
                </Text>

                <Text style={styles.text}>
                    Akan tetapi, Python adalah bahasa yang paling mudah dipelajari, dan membuat program “Hello World!” hanya sesederhana menuliskan perintah <Text style={styles.textCode}>print("Hello World!")</Text>. Oleh karena itu, kita akan lebih memilih untuk membuat program penjumlahan dua bilangan.
                </Text>

                <Text style={styles.subHeader}>Program Penjumlahan Dua Bilangan</Text>
                <Text>Catatan: Bila Anda belum tahu cara menggunakan Python, silahkan baca artikel tentang <Text style={styles.link} onPress={() => this.handleLink('http://www.pythonindo.com/memulai-pemrograman-python/')}>Memulai Pemrograman Python</Text></Text>

                <View style={{marginTop: 5}}>
                    <PythonInterpreter url={{ uri: 'https://www.jdoodle.com/embed/v0/1i5W' }} />
                </View>

                <Text style={styles.subHeader}>Penjelasan Program</Text>
                <Text style={styles.text}>
                    Python adalah bahasa pemrograman yang menggunakan interpreter. Pada interpreter program akan dieksekusi baris perbaris. Bila ada error maka program akan terhenti, kecuali dengan menggunakan metode penanganan eksepsi.
                </Text>

                <Text style={styles.text}>
                    Pada program di atas, baris 1 adalah komentar program. Interpreter tidak memproses komentar. Komentar hanya untuk penjelasan kode agar dipahami oleh manusia yang membacanya.
                </Text>

                <Text style={styles.text}>
                    Pada baris 2 kita menciptakan sebuah objek bilangan yaitu 15. Kita membuat variabel bil1 menunjuk ke objek 15. Dengan kata lain, objek 15 ditugaskan ke variabel bil1.
                </Text>

                <Text style={styles.text}>
                    Penjelasan untuk baris 3 sama dengan penjelasan untuk baris ke 2.
                </Text>

                <Text style={styles.text}>
                    Selanjutnya pada baris ke 4, objek yang ditunjuk oleh bil1 yaitu 15 dan yang ditunjuk oleh bil2 yaitu 25 dijumlahkan. Hasilnya ditugaskan ke variabel jumlah.
                </Text>

                <Text style={styles.text}>
                    Di baris terakhir, kita menggunakan fungsi bawaan (builtin) python, yaitu <Text style={styles.textCode}>print()</Text> untuk menampilkan variabel jumlah ke monitor.
                </Text>

                <Text style={styles.text}>
                    Demikian program sederhana menggunakan python. Untuk selanjutnya, Anda akan belajar dasar Python dan program yang lebih kompleks.
                </Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    code: {
        backgroundColor: '#FFFFD4',
        padding: 10,
    },
    link: {
        color: '#007acc',
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

export default ProgramPertama;