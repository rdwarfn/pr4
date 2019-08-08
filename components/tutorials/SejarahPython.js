import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'native-base';

import ImageViewModal from '../ImageViewModal';

const { width, height } = Dimensions.get('window');
const widthTxt = width / 4 * 3 - 20;
const widthImg = width - widthTxt;

class SejarahPython extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalUrl: require('../../assets/images/tutorials/1.jpg'),
        };
    };
    render() {
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: widthTxt }}>
                        <Text style={styles.text}>
                            Python diciptakan oleh <Text style={styles.bold}>Guido van Rossum</Text> pertama kali di <Text style={styles.italic}>Scitchting Mathematisch Centrum</Text> (CWI) di Belanda pada awal tahun 1990-an. Bahasa python terinspirasi dari bahasa pemrograman ABC. Sampai sekarang, Guido masih menjadi penulis utama untuk python, meskipun bersifat open source sehingga ribuan orang juga berkontribusi dalam mengembangkannya.
                        </Text>
                    </View>
                    <View>
                        <ImageViewModal sumber={this.state.modalUrl} style={{ width: widthImg, height: 170 }} />
                    </View>
                </View>

                <Text style={styles.text}>
                    Di tahun 1995, Guido melanjutkan pembuatan python di <Text style={styles.italic}>Corporation for National Research Initiative</Text> (CNRI) di Virginia Amerika, dimana dia merilis beberapa versi dari python.
                </Text>

                <Text style={styles.text}>
                    Pada Mei 2000, Guido dan tim Python pindah ke BeOpen.com dan membentuk tim BeOpen PythonLabs. Di bulan Oktober pada tahun yang sama, tim python pindah ke Digital Creation (sekarang menjadi Perusahaan Zope). Pada tahun 2001, dibentuklah Organisasi Python yaitu <Text style={styles.italic}>Python Software Foundation</Text> (PSF). PSF merupakan organisasi nirlaba yang dibuat khusus untuk semua hal yang berkaitan dengan hak intelektual Python. Perusahaan Zope menjadi anggota sponsor dari PSF.
                </Text>

                <Text style={styles.text}>
                    Semua versi python yang dirilis bersifat open source. Dalam sejarahnya, hampir semua rilis python menggunakan lisensi GFL-compatible. Berikut adalah versi mayor dan minor python berikut tanggal rilisnya.
                </Text>

                <View style={{ marginBottom: 20 }}>
                    <FlatList
                        data={[
                            { id: '1', header: true, content: 'Python 1.0 – Januari 1994' },
                            { id: '2', content: 'Python 1.2 – 10 April 1995' },
                            { id: '3', content: 'Python 1.3 – 12 Oktober 1995' },
                            { id: '4', content: 'Python 1.4 – 25 Oktober 1996' },
                            { id: '5', content: 'Python 1.5 – 31 Desember 1997' },
                            { id: '6', content: 'Python 1.6 – 5 September 2000' },
                            { id: '7', header: true, content: 'Python 2.0 – 16 Oktober 2000' },
                            { id: '8', content: 'Python 2.1 – 17 April 2001' },
                            { id: '9', content: 'Python 2.2 – 21 Desember 2001' },
                            { id: '10', content: 'Python 2.3 – 29 Juli 2003' },
                            { id: '11', content: 'Python 2.4 – 30 Nopember 2004' },
                            { id: '12', content: 'Python 2.5 – 19 September 2006' },
                            { id: '13', content: 'Python 2.6 – 1 Oktober 2008' },
                            { id: '14', content: 'Python 2.7 – 3 Juli 2010' },
                            { id: '15', header: true, content: 'Python 3.0 – 3 Desember 2008' },
                            { id: '16', content: 'Python 3.1 – 27 Juni 2009' },
                            { id: '17', content: 'Python 3.2 – 20 Februari 2011' },
                            { id: '18', content: 'Python 3.3 – 29 September 2012' },
                            { id: '19', content: 'Python 3.4 – 16 Maret 2014' },
                            { id: '20', content: 'Python 3.5 – 13 September 2015' },
                            { id: '21', content: 'Python 3.6 – 23 Desember 2016' },
                        ]}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ListItem itemHeader={item.header ? item.header : false} first={item.id == 1 ? true : false}>
                                <Text style={item.header ? { fontSize: 16, fontWeight: 'bold' } : { fontSize: 16 }}>{item.content}</Text>
                            </ListItem>
                        )}
                    />
                </View>

                <Text style={styles.text}>
                    Nama python sendiri tidak berasal dari nama ular yang kita kenal. Guido adalah penggemar grup komedi Inggris bernama Monty Python. Ia kemudian menamai bahasa ciptaannya dengan nama Python.
                </Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
    text: { marginBottom: 10, fontSize: 16 },
})

export default SejarahPython;