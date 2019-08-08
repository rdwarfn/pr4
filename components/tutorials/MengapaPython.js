import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Linking } from 'react-native';

import ImageViewModal from '../ImageViewModal';

const { width, height } = Dimensions.get('window');

class MengapaPython extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalUrl: require('../../assets/images/tutorials/2.png'),
        }
    };
    handleLink = (url) => {
        Linking.openURL(url)
            .catch((err) => console.log('Terjadi Error', err))
    };
    render() {
        return (
            <View>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    {/* render komponen ImageViewModal dan passing params yang dibutuhkan */}
                    <ImageViewModal sumber={this.state.modalUrl} style={{ alignSelf: 'center', flexDirection: 'row', height: 82, width: 256.5 }} />
                </View>

                <Text style={styles.text}>
                    Mengapa harus Python? Bukankah masih banyak bahasa pemrograman lain di luar sana? Apa kelebihan Python?
                    </Text>

                <Text style={styles.text}>
                    Pertanyaan – pertanyaan tersebut sering menjadi pertanyaan yang muncul sebelum seseorang mempelajari Python. Berikut adalah beberapa di antara kelebihan Python :
                    </Text>

                <View style={{ marginBottom: 5, marginTop: 5 }}>
                    <Text style={styles.text}>
                        &#10102;. Python adalah bahasa pemrograman yang populer. Per September 2018, Python berada di urutan ke 3 <Text style={[styles.text, styles.link]} onPress={() => this.handleLink('https://www.tiobe.com/tiobe-index/')}>bahasa program yang paling populer di dunia</Text>.
                    </Text>

                    <Text style={styles.text}>
                        &#10103;. Python relatif lebih mudah dipelajari dan digunakan dibandingkan bahasa pemrograman lain. Sintaksnya sederhana, mudah dibaca dan diingat karena filosofi python sendiri menekankan pada aspek kemudahan dibaca (<Text style={styles.italic}>readibility</Text>). Kode python mudah ditulis dan mudah dibaca, sehingga lebih mudah diperbaiki kalau ada kesalahan, dan juga mudah untuk dipelihara.
                    </Text>

                    <Text style={styles.text}>
                        &#10104;. Selain lebih mudah dibaca, python juga lebih efisien dibandingkan bahasa lain seperti C, C++, maupun Java. Untuk melakukan sesuatu dengan 5 baris kode pada bahasa lain, bisa jadi di python hanya diperlukan 1 baris kode. Hal ini menyebabkan pembuatan program dalam Python menjadi lebih ringkas dan lebih cepat dibandingkan bahasa lain.
                    </Text>

                    <Text style={styles.text}>
                        &#10105;. Python merupakan bahasa multifungsi. Dengan python Anda bisa melakukan berbagai hal mulai dari memproses teks, membuat website, membuat program jaringan, robotika, data mining, sampai dengan kecerdasan buatan. Dengan python Anda bisa membuat aplikasi berbasis desktop maupun berbasis smartphone.
                    </Text>

                    <Text style={styles.text}>
                        &#10106;. Python kaya akan dukungan <Text style={styles.italic}>library</Text> (pustaka) standar. Tersedia banyak sekali modul-modul dan ekstensi program yang sudah siap Anda pakai untuk membuat program sesuai kebutuhan Anda. Komunitas python adalah komunitas yang sangat aktif mengembangkan python sehingga menjadi bahasa yang sangat handal.
                    </Text>

                    <Text style={styles.text}>
                        &#10107;. Python bisa berinteraksi dengan bahasa lain. Kode python bisa memanggil oleh bahasa C, C++, dan sebaliknya juga bisa dipanggil dari bahasa lain.
                    </Text>
                </View>

                <Text style={styles.text}>
                    Tapi, itu hanya kelebihannya. Terus, apa kekurangannya? Python adalah bahasa <Text style={styles.link} onPress={() => this.handleLink('https://id.wikipedia.org/wiki/Penerjemah_(komputasi)')}>interpreter</Text>. Kekurangan python dibanding bahasa lain yang menggunakan <Text style={styles.link} onPress={() => this.handleLink('https://id.wikipedia.org/wiki/Kompilator')}>kompiler</Text> adalah ‘sedikit’ lebih lambat pada saat dijalankan bila dibandingkan bahasa C maupun C++. Tapi hal inipun sangat bersifat relatif. Tergantung dari besar ukuran program yang dibuat.
                </Text>

                <Text style={styles.text}>
                    Untuk program besar yang membutuhkan kecepatan pemrosesan tinggi mungkin Python kalah cepat dari bahasa C, tapi untuk hal selain itu Python lebih mudah dan lebih baik dari bahasa lain. Selain itu, kode sumber sekarang sudah dioptimasi menggunakan bahasa C, sehingga kecepatannya juga sudah sangat mendekati kecepatan bahasa C. Spesifikasi komputer juga sekarang ini sudah semakin tinggi sehingga bisa memproses program dengan cepat, sehingga sering kali ini tidak menjadi hal penting dan bisa diabaikan.
                </Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    italic: {
        fontStyle: 'italic',
    },
    link: {
        color: '#007acc',
    }
});

export default MengapaPython;