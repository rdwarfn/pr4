import React, { Component } from 'react';
import { View, Text, FlatList, Linking, StyleSheet } from 'react-native';

class PenggunaPython extends Component {

    handleLink = (url) => {
        Linking.openURL(url)
            .catch((err) => console.log('Terjadi kesalahan', err))
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Kalau Anda adalah pemula yang ingin belajar Python, atau baru menggunakan Python, bisa jadi Anda bertanya siapa saja yang menggunakan Python. Daftar berikut pasti membuat Anda mengetahui bahwa Python adalah sebuah bahasa yang populer dan layak dipelajari.
                </Text>

                <View style={{ marginBottom: 5, marginTop: 5 }}>
                    <FlatList
                        data={[
                            { id: '1', content: 'Google adalah perusahaan besar yang menggunakan banyak kode Python di dalam mesin pencarinya. Dan mesin pencari google adalah yang paling terkenal di dunia.' },
                            { id: '2', content: 'Youtube, situs video terbesar dan terpopuler di dunia, sebagian besar kodenya ditulis dalam bahasa Python.' },
                            { id: '3', content: 'Facebook, media sosial terbesar di dunia, menggunakan Tornado, sebuah framework Python untuk menampilkan timeline.' },
                            { id: '4', content: 'Instagram, siapa yang tidak kenal. Instagram menggunakan Django, framework python sebagai mesin pengolah sisi server dari aplikasinya.' },
                            { id: '5', content: 'Pinterest, banyak menggunakan python untuk membangun aplikasinya.' },
                            { id: '6', content: 'Dropbox, barangkali Anda adalah salah seorang pengguna layanan ini. Dropbox menggunakan python baik di sisi server maupun di sisi pengguna layanannya.' },
                            { id: '7', content: 'Quora, salah satu situs tanya jawab terbesar di dunia, dibangun menggunakan Python.' },
                            { id: '8', content: 'NASA, badan antariksa Amerika ini menggunakan Python untuk bidang sainsnya.' },
                            { id: '9', content: 'NSA, badan mata – mata Amerika banyak menggunakan Python untuk analisa kriptografi dan intelijen.' },
                            { id: '10', content: 'Industrial Light & Magic, Pixar, banyak menggunakan Python dalam animasi movie.' },
                            { id: '11', content: 'Blender, Maya, software pembuat animasi 3D terkenal, menggunakan Python sebagai salah satu bahasa skrip pemrogramannya.' },
                            { id: '12', content: 'Raspberry Pi, komputer mini yang banyak digunakan sebagai mikrokontroller, menggunakan Python sebagai bahasa utamanya.' },
                            { id: '13', content: 'ESRI, produsen terkenal pembuat software pemetaan GIS banyak menggunakan Python di produknya.' }
                        ]}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Text style={[styles.text, styles.list]}>{item.id}. {item.content}</Text>
                        )}
                    />
                </View>

                <Text style={styles.text}>
                    Selain yang di atas, masih banyak lagi aplikasi dari perusahaan besar maupun individu pengguna Python yang tidak disebutkan di sini. Anda baca di <Text style={styles.link} onPress={() => this.handleLink('https://siftery.com/python')}>https://siftery.com/python</Text> maupun di <Text style={styles.link} onPress={() => this.handleLink('https://www.python.org/about/success/')}>https://www.python.org/about/success/</Text> maupun di wikipedia <Text style={styles.link} onPress={() => this.handleLink('https://en.wikipedia.org/wiki/List_of_Python_software')}>https://en.wikipedia.org/wiki/List_of_Python_software</Text>
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
    list: {
        paddingLeft: 10,
    },
    link: {
        color: '#007acc',
    }
});

export default PenggunaPython;