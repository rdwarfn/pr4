import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'native-base';

import PythonInterpreter from '../PythonInterpreter';

class VariableDanTypeData extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Variabel adalah lokasi di memori yang digunakan untuk menyimpan nilai. Pada saat kita membuat sebuah variabel, kita ‘memesan’ tempat di dalam memori. Tempat tersebut bisa diisi dengan data atau objek, baik itu bilangan bulat (integer), pecahan (float), karakter (string), dan lain – lain.
                </Text>


                <View>
                    <Text style={styles.subHeader}>Memberi Nilai Variabel</Text>

                    <Text style={styles.text}>
                        Di python, variabel tidak perlu dideklarasikan secara eksplisit. Deklarasi atau pembuatan variabel terjadi secara otomatis pada saat kita memberi (menugaskan) suatu nilai ke variabel. Tanda sama dengan ( = ) digunakan untuk memberikan nilai ke variabel.
                    </Text>

                    <Text style={styles.text}>
                        Operand di sebelah kiri tanda = adalah nama variabel dan di sebelah kanan tanda = adalah nilai yang disimpan di dalam variabel. Sebagai contoh :
                    </Text>

                    <PythonInterpreter
                        url={{ uri: 'https://www.jdoodle.com/embed/v0/1i5S' }}
                    />

                    <Text style={styles.text}>
                        Catatan :  Istilah menugaskan, menyimpan, dan memberi nilai ke variabel adalah sama. Secara teknis, sebenarnya variabel adalah nama yang diberikan untuk menunjuk ke lokasi memori yang menyimpan suatu objek atau data.
                    </Text>
                </View>


                <View>
                    <Text style={styles.subHeader}>Multi Penugasan</Text>

                    <Text style={styles.text}>Kita bisa memberi nilai ke beberapa variabel secara bersamaan seperti berikut.</Text>
                    <Text style={[styles.text, styles.code]}>x = y = z = 3</Text>

                    <Text style={styles.text}>
                        Pada contoh di atas, kita menciptakan sebuah objek integer, yaitu bilangan 3, dan kemudian kita menugaskan ketiga variabel untuk menunjuk ke lokasi yang sama yang berisi 3.
                    </Text>

                    <Text style={styles.text}>
                        Kita juga bisa menugaskan masing – masing variabel ke objek yang berbeda dalam sebaris perintah. Sebagai contoh :
                    </Text>
                    <Text style={[styles.text, styles.code]}>a, b, c = 1, 3.4, "Umar"</Text>
                    <Text style={styles.text}>
                        Pada contoh di atas, variabel a diberi nilai 1, b nilai 3.4, dan variabel c diberi nilai “Umar”.
                    </Text>
                </View>


                <View>
                    <Text style={styles.subHeader}>Tipe Data Python</Text>

                    <Text style={styles.text}>
                        Data yang disimpan di memori memiliki tipe yang berbeda – beda. Misalnya untuk panjang, akan disimpan dengan tipe bilangan. Nama orang akan disimpan dalam tipe string/karakter. Suhu akan disimpan dalam bentuk bilangan berkoma. Dan lain sebagainya. Masing – masing tipe data akan memiliki operasi yang berbeda – beda.
                    </Text>

                    <Text style={styles.text}>Python memiliki enam tipe data standar atau paling sering digunakan, yaitu :</Text>
                    <FlatList
                        data={[
                            { id: '1', tipeData: 'Bilangan (Number)' },
                            { id: '2', tipeData: 'String' },
                            { id: '3', tipeData: 'List' },
                            { id: '4', tipeData: 'Tuple' },
                            { id: '5', tipeData: 'Set' },
                            { id: '6', tipeData: 'Dictionary' }
                        ]}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            <Text style={[styles.text, styles.list]}>
                                &#10070; {item.tipeData}
                            </Text>
                        )}
                    />
                </View>


                <View>
                    <Text style={styles.subHeader}>&#10070; Bilangan (Number)</Text>

                    <Text style={styles.text}>
                        Tipe data bilangan yang umum ada 2 yaitu, integer dan float. Integer adalah bilangan bulat, sedangkan float adalah bilangan pecahan. Selain itu ada tipe bilangan lain, yaitu bilangan kompleks yaitu bilangan yang memiliki bagian real dan imajiner. Integer, float, dan kompleks masing-masing di Python diwakili oleh kelas int, float, dan complex.
                    </Text>

                    <Text style={styles.text}>
                        Kita bisa menggunakan fungsi <Text style={{ fontWeight: 'bold' }}>type()</Text> untuk mengetahui tipe data suatu objek di python.
                    </Text>

                    <PythonInterpreter
                        url={{ uri: 'https://www.jdoodle.com/embed/v0/1i5T' }}
                    />

                    <Text style={styles.text}>
                        Tipe data integer di Python panjangnya bisa berapa saja. Panjangnya hanya dibatasi oleh besar memori yang tersedia. Tipe data float akurat sampai 17 angka di belakang koma. Berikut contoh panjang bilangan menggunakan mode interaktif di IDLE. Perhatikan bagaimana bilangan float terpotong panjangnya.
                    </Text>

                    <Text style={[styles.text, styles.code]}>
                        >>> a = 1234567899999999999999999999 {'\n'}
                        >>> a {'\n'}
                        1234567899999999999999999999 {'\n'}
                        >>> b = 0.123456789123456789 {'\n'}
                        >>> b {'\n'}
                        0.12345678912345678 {'\n'}
                        >>> c = 1+4j {'\n'}
                        >>> c {'\n'}
                        (1+4j)
                    </Text>
                </View>


                <View>
                    <Text style={styles.subHeader}>&#10070; String</Text>

                    <Text style={styles.text}>
                        String adalah satu atau serangkaian karakter yang diletakkan diantara tanda kutip, baik tanda kutip tunggal ( ‘ ) maupun ganda ( ” ). Huruf, angka, maupun karakter lainnya yang digabung menjadi teks adalah contoh string.
                    </Text>

                    <Text style={styles.text}>
                        String adalah tipe data yang anggotanya berurut dan memiliki indeks. Indeks dimulai dari angka 0 bila dimulai dari depan dan -1 bila diindeks dari belakang. Tiap karakter bisa diakses menggunakan indeksnya dengan format <Text style={styles.textCode}>namastring[indeks]</Text>. Pada string juga bisa dilakukan slicing atau mengakses sekelompok substring dengan format <Text style={styles.textCode}>namastring[awal:akhir]</Text>. Untuk jelasnya bisa diperhatikan contoh berikut.
                    </Text>

                    <Text style={[styles.text, styles.code]}>
                        kalimat = "Nama saya Umar" {'\n\n'}
                        print(kalimat)      # print string lengkap {'\n'}
                        print(kalimat[0])   # print karakter pertama {'\n'}
                        print(kalimat[-1])  # print karakter terakhir {'\n'}
                        print(kalimat[4:7]) # print dari indeks 4 - 6 {'\n'}
                        print(kalimat[:4])  # print dari indeks 0 - 3 {'\n'}
                    </Text>

                    <Text style={styles.text}>
                        Hasilnya akan muncul seperti berikut :
                    </Text>

                    <Text style={[styles.text, styles.code]}>
                        Nama saya Umar {'\n'}
                        N{'\n'}r{'\n'}aya{'\n'}Nama{'\n'}
                    </Text>
                </View>


                <View>
                    <Text style={styles.subHeader}>&#10070; List</Text>

                    <Text style={styles.text}>
                        List adalah tipe data yang berisi item yang berurut. Seperti halnya tipe data string, tiap item (anggota) list memiliki indeks sesuai dengan urutannya. Indeks dimulai dari 0 dan bukan dari 1.
                    </Text>

                    <Text style={styles.text}>
                        List bisa berisi anggota dengan tipe yang sama maupun berbeda. Untuk mendeklarasikan list, digunakan tanda kurung [ ] dan masing-masing anggotanya dipisahkan oleh tanda koma.
                    </Text>

                    <Text style={[styles.text, styles.code]}>
                        >>> lst = [1, 'dua', 3.0]
                    </Text>

                    <Text style={styles.text}>
                        Untuk mengakses item dari list caranya adalah dengan memanggil nama list diikuti indeks dari item yang bersangkutan, yaitu dengan format <Text style={styles.textCode}>namalist[indeks]</Text>{'\n'}
                        Selain itu bisa juga dilakukan pengaksesan terhadap sejumlah item dari indeks ke indeks. Hal ini disebut slicing. Contohnya sebagai berikut :
                    </Text>

                    <PythonInterpreter url={{ uri: 'https://www.jdoodle.com/embed/v0/1i6u' }} />
                </View>


                <View style={{ marginTop: 15 }}>
                    <Text style={styles.subHeader}>&#10070; Tuple</Text>

                    <Text style={styles.text}>
                        Tuple adalah jenis data lain yang mirip dengan list. Perbedaannya dengan list adalah anggotanya tidak bisa diubah (immutable). List bersifat mutable, sedangkan tuple bersifat immutable. Sekali tuple dibuat, maka isinya tidak bisa dimodifikasi lagi.
                    </Text>

                    <Text style={styles.text}>
                        Tuple dideklarasikan dengan menggunakan tanda kurung ( ). dan anggotanya dipisahkan oleh tanda koma. Tuple berguna untuk data yang dimaksudkan tidak diubah isinya. Misalnya tuple komposisi warna untuk putih adalah (255,255,255).
                    </Text>

                    <Text style={styles.text}>
                        Seperti halnya list, kita bisa mengakses anggota tuple dengan menggunakan indeksnya.
                    </Text>

                    <PythonInterpreter url={{ uri: 'https://www.jdoodle.com/embed/v0/1i7Y' }} />
                </View>


                <View style={{ marginTop: 15 }}>
                    <Text style={styles.subHeader}>&#10070; Set</Text>

                    <Text style={styles.text}>
                        Set adalah salah satu tipe data di Python yang tidak berurut (unordered). Set memiliki anggota yang unik (tidak ada duplikasi). Jadi misalnya kalau kita meletakkan dua anggota yang sama di dalam set, maka otomatis set akan menghilangkan yang salah satunya.
                    </Text>

                    <Text style={styles.text}>
                        Set bisa digunakan untuk melakukan operasi himpunan matematika seperti gabungan, irisan, selisih, dan komplemen.
                    </Text>

                    <Text style={styles.text}>
                        Set dibuat dengan meletakkan anggota – anggotanya di dalam tanda kurung kurawal {"{ }"}, dipisahkan menggunakan tanda koma. Kita juga bisa membuat set dari list dengan memasukkan list ke dalam fungsi <Text sytle={{ fontWeight: 'bold' }}>set()</Text>.
                    </Text>

                    <Text style={styles.text}>
                        Set bisa berisi data campuran, baik integer, float, string, dan lain sebagainya. Akan tetapi set tidak bisa berisi list, set, dan dictionary.
                    </Text>

                    <PythonInterpreter url={{ uri: 'https://www.jdoodle.com/embed/v0/1iaf' }} />
                </View>


                <View style={{ marginTop: 15 }}>
                    <Text style={styles.subHeader}>&#10070; Dictionary</Text>

                    <Text style={styles.text}>
                        Dictionary adalah tipe data yang tiap anggotanya terdiri dari pasangan kunci-nilai (key-value). Mirip dengan kamus dimana ada kata ada arti. Dictionary umumnya dipakai untuk data yang besar dan untuk mengakses anggota data secara acak. Anggota dictionary tidak memiliki indeks.
                    </Text>

                    <Text style={styles.text}>
                        Dictionary dideklarasikan dengan menggunakan tanda kurung kurawal {"{ }"}, dimana anggotanya memiliki bentuk <Text style={styles.textCode}>kunci:nilai</Text> atau <Text style={styles.textCode}>key:value</Text> dan tiap anggota dipisah tanda koma. Kunci dan nilainya bisa memiliki tipe sembarang.
                    </Text>

                    <Text style={styles.text}>
                        Untuk mengakses nilai dari anggota dictionary, kita menggunakan key-nya.
                    </Text>

                    <PythonInterpreter url={{ uri: 'https://www.jdoodle.com/embed/v0/1ibp' }} />

                    <Text style={styles.subHeader}>Beberapa &#9782; Catatan …</Text>

                    <Text style={styles.text}>
                        &#9998;  Tipe data sering disebut <Text style={{ fontWeight: 'bold' }}>objek</Text>. Pada dasarnya semua hal di python adalah objek.
                    </Text>
                    <Text style={styles.text}>
                        &#9998;  Ada tipe data lain yang umumnya dimiliki oleh bahasa Python, yaitu tipe <Text style={{ fontWeight: 'bold' }}>None</Text>. Tipe <Text style={{ fontWeight: 'bold' }}>None</Text> adalah sebuah tipe data spesial yang menunjukkan bahwa nilai/data suatu variabel itu belum/tidak ada (bukan nol, tapi tidak ada). Pada bahasa pemrograman lain seperti C, atau PHP, tipe data ini disebut null.
                    </Text>
                    <Text style={styles.text}>
                        &#9998;  Tipe data string, tuple, dan list masuk ke dalam tipe data yang disebut tipe data <Text style={{ fontWeight: 'bold' }}>berurut / ordered</Text> atau <Text style={{ fontWeight: 'bold' }}>sekuensial / sequence</Text>. Tipe data dictionary disebut data <Text style={{ fontWeight: 'bold' }}>tidak berurut / unordered</Text>.
                    </Text>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'powderblue',
        marginTop: -50,
        padding: 10,
        opacity: 0.8,
    },
    code: {
        backgroundColor: '#FFFFD4',
        padding: 10,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        margin: 15,
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

export default VariableDanTypeData;