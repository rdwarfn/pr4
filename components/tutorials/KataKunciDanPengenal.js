import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class KataKunciDanPengenal extends Component {
    render() {
        const namaKrywn = <Text style={styles.textCode}>namaKaryawan</Text>
        return (
            <View>
                <Text style={styles.subHeader}>Kata Kunci Python</Text>
                <Text style={styles.text}>
                    Kata kunci adalah kata – kata yang sudah ditetapkan dan dipakai Python untuk mendefinisikan sintaks dan struktur bahasa python sendiri. Kata kunci tidak bisa digunakan sebagai nama variabel, fungsi, maupun nama untuk pengenal lainnya.
                </Text>

                <Text style={styles.text}>
                    Keyword bersifat case sensitive. Artinya huruf besar berbeda dengan huruf kecil. Sejauh ini, ada 33 kata kunci di Python.
                </Text>

                <Text style={styles.text}>
                    Semua kata kunci menggunakan huruf kecil kecuali <Text style={styles.textCode}>True</Text>, <Text style={styles.textCode}>False</Text>, dan <Text style={styles.textCode}>None</Text>. Daftar kata kunci Python adalah seperti berikut :
                </Text>

                <View>
                    <DataKeyPython />
                </View>

                <Text style={styles.subHeader}>Pengenal (Identifier) Python</Text>
                <Text style={styles.text}>
                    Pengenal adalah nama yang diberikan untuk menamai hal di python seperti variabel, fungsi, kelas, dan lain sebagainya. Fungsinya adalah untuk membedakan antara satu entitas dengan yang lainnya.
                </Text>

                <Text style={[styles.text, styles.bold]}>Aturan Penulisan Pengenal</Text>

                <Text style={[styles.text, styles.list]}>
                    <Text>
                        1. Pengenal bisa terdiri dari kombinasi huruf kecil (a-z) atau huruf besar (A-Z), angka ( 0-9 ), dan underscore ( _ ). <Text style={styles.var}>namaKaryawan</Text>, <Text style={styles.var}>bilangan_2</Text>, dan <Text style={styles.var}>jenis_kenderaan_umum</Text> adalah nama variabel yang valid.
                    </Text>{'\n'}{'\n'}
                    <Text>
                        2. Pengenal tidak bisa dimulai menggunakan angka. <Text style={styles.var}>1nama</Text> adalah invalid sedangkan <Text style={styles.var}>nama1</Text> adalah valid.
                    </Text>{'\n'}{'\n'}
                    <Text>
                        3. Kata kunci tidak bisa dipakai sebagai nama pengenal.
                    </Text>{'\n'}{'\n'}
                    <Text>
                        4. Karakter spesial seperti !, @, %, $, dan sebagainya tidak bisa digunakan sebagai pengenal.
                    </Text>{'\n'}{'\n'}
                    <Text>
                        5. Python bersifat case sensitive. Huruf besar dan kecil dianggap berbeda. Jadi <Text style={styles.var}>Variabel</Text>, <Text style={styles.var}>variabel</Text>, dan <Text style={styles.var}>VARIABEL</Text>, adalah 3 buah nama yang berbeda.
                    </Text>
                </Text>

                <Text style={styles.text}>
                    Selain hal tersebut, ada beberapa hal lagi yang perlu diketahui terkait nama pengenal. Nama pengenal sebaiknya menggunakan nama yang deskriptif. Walaupun menuliskan nama variabel panjang, <Text style={styles.var}>p = 10</Text> adalah benar, tapi menuliskannya menjadi <Text style={styles.var}>panjang = 10</Text> adalah jauh lebih baik agar nantinya Anda mengerti apa yang dimaksud di kode program Anda.
                </Text>

                <Text style={styles.text}>
                    Kemudian untuk nama variabel yang panjang, ada 2 cara penulisan. Pertama dengan menggunakan metode <Text style={styles.bold}>underscore</Text> dan yang kedua dengan metode <Text style={styles.bold}>camelCase</Text>. Misalnya untuk menamai sebuah variabel diameter persegi panjang, dengan metode underscore bisa ditulis <Text style={styles.var}>diameter_persegi_panjang</Text>. Sedangkan dengan metode camelCase ditulis <Text style={styles.var}>diameterPersegiPanjang</Text>.
                </Text>
            </View>
        );
    };
};

class DataKeyPython extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                ['True', 'def', 'if', 'raise'],
                ['False', 'del', 'import', 'return'],
                ['None', 'elif', 'in', 'try'],
                ['and', 'else', 'is', 'while'],
                ['as', 'except', 'lambda', 'with'],
                ['assert', 'finally', 'nonlocal', 'yield'],
                ['break', 'for', 'not', ''],
                ['class', 'from', 'or', ''],
                ['continue', 'global', 'pass', ''],
            ]
        };
    };
    render() {
        const state = this.state;
        return (
            <View style={styles.table}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Rows data={state.tableData} textStyle={styles.textTable} />
                </Table>
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
        marginBottom: 10,
    },
    table: {
        margin: 10,
        paddingVertical: 15,
    },
    textTable: {
        color: '#e17055',
        fontWeight: '100',
        margin: 6,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    textCode: {
        color: '#e17055',
    },
    var: {
        color: '#009688',
    },
});

export default KataKunciDanPengenal;