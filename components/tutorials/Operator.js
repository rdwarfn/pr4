import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Operator extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Operator adalah simbol tertentu yang digunakan untuk melakukan operasi aritmatika maupun logika. Nilai yang padanya dilakukan operasi disebut operand. Misalnya adalah  <Text style={styles.textCode}>2 + 3</Text>. Di sini tanda + adalah operator penjumlahan. 2 dan 3 adalah operand.
                </Text>

                <Text style={styles.text}>Python memiliki sejumlah operator, yaitu :</Text>

                <FlatList
                    data={[
                        { id: '1', content: 'Operator Aritmatika' },
                        { id: '2', content: 'Operator Perbandingan' },
                        { id: '3', content: 'Operator Penugasan' },
                        { id: '4', content: 'Operator Logika' },
                        { id: '5', content: 'Operator Bitwise' },
                        { id: '6', content: 'Operator Identitas' },
                        { id: '7', content: 'Operator Keanggotaan' }
                    ]}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Text style={[styles.text, styles.list]}>&#9865; {item.content}</Text>
                    )}
                />

                <Text style={styles.text}>Mari kita tinjau satu persatu.</Text>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin: 10 }}></View>


                <View>
                    <Text style={styles.subHeader}>Operator Aritmatika</Text>

                    <Text style={styles.text}>
                        Operator aritmatika adalah operator yang digunakan untuk melakukan operasi matematika, seperti penjumlahan, pengurangan, perkalian, pembagian, dan sebagainya. Tabel berikut menunjukkan jenis operator aritmatika.
                    </Text>

                    <TabelOperator
                        flexHead={[1,2,1]}
                        tableHead={['Operator', 'Nama dan Fungsi', 'Contoh']}
                        flexData={[1,2,1]}
                        tableData={[
                            ['+', 'Penjumlahan, menjumlahkan 2 buah operand', 'x + y'],
                            ['-', 'Pengurangan, mengurangkan 2 buah operand', 'x – y'],
                            ['*', 'Perkalian, mengalikan 2 buah operand', 'x * y'],
                            ['/', 'Pembagian, membagi 2 buah operand', 'x / y'],
                            ['**', 'Pemangkatan, memangkatkan bilangan', 'x **y'],
                            ['//', 'Pembagian bulat, menghasilkan hasil bagi tanpa koma', 'x // y'],
                            ['%', 'Modulus, menghasilkan sisa pembagian 2 bilangan', 'x % y'],
                        ]}
                    />
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin: 10 }}></View>


                <View>
                    <Text style={styles.subHeader}>Operator Perbandingan</Text>

                    <Text style={styles.text}>
                        Operator perbandingan adalah operator yang digunakan untuk membandingkan 2 buah nilai. Hasil perbandingannya adalah True atau False tergantung kondisi.
                    </Text>

                    <TabelOperator
                        flexHead={[1,2,1]}
                        tableHead={['Operator', 'Nama dan Fungsi', 'Contoh']}
                        flexData={[1,2,1]}
                        tableData={[
                            ['>', 'Lebih besar dari – Hasilnya True jika nilai sebelah kiri lebih besar dari nilai sebelah kanan', 'x > y'],
                            ['<', 'Lebih kecil dari – Hasilnya True jika nilai sebelah kiri lebih kecil dari nilai sebelah kanan', 'x < y'],
                            ['==', 'Sama dengan – Hasilnya True jika nilai sebelah kiri sama dengan nilai sebelah kanan', 'x == y'],
                            ['!=', 'Tidak sama dengan – Hasilnya True jika nilai sebelah kiri tidak sama dengan nilai sebelah kanan', 'x != y'],
                            ['>=', 'Lebih besar atau sama dengan – Hasilnya True jika nilai sebelah kiri lebih besar atau sama dengan nilai sebelah kanan', 'x >= y'],
                            ['<=', 'Lebih kecil atau sama dengan – Hasilnya True jika nilai sebelah kiri lebih kecil atau sama dengan nilai sebelah kanan', 'x <= y']
                        ]}
                    />
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin: 10 }}></View>


                <View>
                    <Text style={styles.subHeader}>Operator Penugasan</Text>

                    <Text style={styles.text}>
                        {`Operator penugasan adalah operator yang digunakan untuk memberi nilai ke variabel.\
                        \n\na = 7 adalah contoh operator penugasan yang memberi nilai 7 di kanan ke variabel a yang ada di kiri.`}
                    </Text>

                    <TabelOperator
                        flexHead={[1,2.5,1.5]}
                        tableHead={['Operator', 'Penjelasan', 'Contoh']}
                        flexData={[1,2.5,1.5]}
                        tableData={[
                            ['=', 'Menugaskan nilai yang ada di kanan ke operand yang ada di sebelah kiri', 'c = a + b menugaskan a + b ke c'],
                            ['+=', 'Menambahkan operand yang di kanan dengan operand yang ada di kiri dan hasilnya di tugaskan ke operand yang di kiri', 'c += a sama dengan c = c + a'],
                            ['-=', 'Mengurangi operand yang di kanan dengan operand yang ada di kiri dan hasilnya di tugaskan ke operand yang di kiri', 'c -= a sama dengan c = c + a'],
                            ['*=', 'Mengalikan operand yang di kanan dengan operand yang ada di kiri dan hasilnya di tugaskan ke operand yang di kiri', 'c *= a sama dengan c = c * a'],
                            ['/=', 'Membagi operand yang di kanan dengan operand yang ada di kiri dan hasilnya di tugaskan ke operand yang di kiri', 'c /= a sama dengan c = c * a'],
                            ['**=', 'Memangkatkan operand yang di kanan dengan operand yang ada di kiri dan hasilnya ditugaskan ke operand yang di kiri', 'c **= a sama dengan c = c ** a'],
                            ['//=', 'Melakukan pembagian bulat operand di kanan terhadap operand di kiri dan hasilnya disimpan di operand yang di kiri', 'c //= a sama dengan c = c // a'],
                            ['%=', 'Melakukan operasi sisa bagi operand di kanan dengan operand di kiri dan hasilnya di simpan di operand yang di kiri', 'c %= a sama dengan c = c % a']
                        ]}
                    />
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin: 10 }}></View>


                <View>
                    <Text style={styles.subHeader}>Operator Logika</Text>

                    <Text style={styles.text}>
                        Operator logika adalah operator yang digunakan untuk melakukan operasi logika.
                    </Text>

                    <TabelOperator
                        flexHead={[1,2,1]}
                        tableHead={['Operator', 'Penjelasan', 'Contoh']}
                        flexData={[1,2,1]}
                        tableData={[
                            ['and', 'Hasilnya adalah True jika kedua operandnya bernilai benar', 'x and y'],
                            ['or', 'Hasilnya adalah True jika salah satu atau kedua operandnya bernilai benar', 'x or y'],
                            ['not', 'Hasilnya adalah True jika operandnya bernilai salah (kebalikan nilai)', 'not x'],
                        ]}
                    />
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, margin: 10 }}></View>


                <View>
                    <Text style={styles.subHeader}>Operator Bitwise</Text>

                    <Text style={styles.text}>
                        Operator bitwise adalah operator yang melakukan operasi bit terhadap operand. Operator ini beroperasi bit per bit sesuai dengan namanya. Sebagai misal, angka 2 dalam bit ditulis <Text style={styles.textCode}>10</Text> dalam notasi biner dan angka 7 ditulis <Text style={styles.textCode}>111</Text> {'\n\n'}
                        Pada tabel di bawah ini, misalkan x = 10 ( <Text style={styles.textCode}>0000 1010</Text> ) dalam biner dan y = 4 ( <Text style={styles.textCode}>0000 0100</Text> ) dalam biner.
                    </Text>

                    <TabelOperator
                        flexHead={[1,2,2]}
                        tableHead={['Operator', 'Nama', 'Contoh']}
                        flexData={[1,2,2]}
                        tableData={[
                            ['&', 'Bitwise AND', 'x & y = 0 (0000 0000)'],
                            ['|', 'Bitwise OR', 'x | y = 14 (0000 1110)'],
                            ['~', 'Bitwise NOT', '~x = -11 (1111 0101)'],
                            ['^', 'Bitwise XOR', 'x ^ y = 14 (0000 1110)'],
                            ['>>', 'Bitwise right shift', 'x >> 2 = 2 (0000 0010)'],
                            ['<<', 'Bitwise left shift', 'x << 2 = 40 (0010 1000)']
                        ]}
                    />
                </View>
            </View>

        );
    };
};

class TabelOperator extends Component {
    render() {
        return (
            <View style={styles.table}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={this.props.tableHead} flexArr={this.props.flexHead} style={styles.head} textStyle={styles.textTable} />
                    <Rows data={this.props.tableData} flexArr={this.props.flexData} textStyle={styles.textTable} />
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
    err: {
        color: '#ff0000',
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    img: {
        marginBottom: 20,
    },
    italic: {
        fontStyle: 'italic',
    },
    link: {
        color: '#007acc',
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
    table: {
        margin: 10,
        paddingVertical: 15,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    textCode: {
        color: '#e17055',
    },
    textTable: {
        margin: 6,
        textAlign: 'center',
    }
});

export default Operator;