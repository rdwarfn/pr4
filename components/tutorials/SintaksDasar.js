import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

class SintaksDasar extends Component {

    handleLink = (url) => {
        Linking.openURL(url)
            .catch((err) => console.log('Terjadi kesalahan', err))
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Python merupakan bahasa pemrograman yang memiliki sintaks yang sederhana dan mudah dimengerti. Python memiliki filosofi bahwa kode program harus mudah dibaca. Filosofi python tertuang dalam <Text style={styles.link} onPress={() => this.handleLink('https://www.python.org/dev/peps/pep-0020/')}>PEP 20</Text>.
                </Text>

                <View>
                    <Text style={styles.subHeader}>Statement (Pernyataan) di Python</Text>
                    <Text style={styles.text}>
                        Semua perintah yang bisa dieksekusi oleh Python disebut statement. Misalnya, a = 1 adalah sebuah statement penugasan. Selain statement penugasan ada statement lain seperti statement if, statement for, dan lain sebagainya.
                    </Text>

                    <Text style={[styles.text, styles.bold]}>Statement Multibaris</Text>
                    <Text style={styles.text}>
                        Di Python, akhir dari sebuah statement adalah karakter baris baru (newline). Kita dapat membuat sebuah statement terdiri dari beberapa baris dengan menggunakan tanda backslash ( \ ). Misalnya :
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        a = panjang1 + panjang2 + \{'\n'}
                        panjang3 + \{'\n'}
                        panjang4{'\n'}
                    </Text>

                    <Text style={styles.text}>
                        Statement yang ada di dalam tanda kurung [ ], {"{ }"}, dan ( ) tidak memerlukan tanda \. Contohnya :
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        nama_bulan = ['Januari', 'Maret', 'Juni', 'September']
                    </Text>
                </View>


                <View>
                    <Text style={styles.subHeader}>Baris dan Indentasi</Text>
                    <Text style={styles.text}>
                        tidak menggunakan tanda {"{ }"} untuk menandai blok / grup kode. Blok kode di python menggunakan tanda indentasi (spasi). Jumlah spasi untuk setiap baris yang ada dalam satu blok kode harus sama. Contoh yang benar adalah sebagai berikut :
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        {`if nilai <= 5: \
                        \n\t\t\tprint("Nilai merah") \
                        \n\t\t\tprint("Tidak lulus")\nelse: \
                        \n\t\t\tprint("Nilai biru") \
                        \n\t\t\tprint("Lulus")`}
                    </Text>

                    <Text style={styles.text}>
                        Bila indentasi dalam satu grup kode tidak sama, python akan menampilkan sintaks error.
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        {`if True: \
                        \n\tprint ("Jawab") \
                        \n\t\tprint ("Benar") \
                        \nelse: \
                        \n\tprint ("Jawab") \
                        \n\tprint ("Salah")\n`}
                        <Text style={styles.err}>SyntaxError: unexpected indent</Text>
                    </Text>
                </View>


                <View>
                    <Text style={styles.subHeader}>Tanda Kutip di Python</Text>
                    <Text style={styles.text}>
                        Python menggunakan tanda kutip tunggal (‘), ganda (“), maupun triple (”’ atau “””) untuk menandai string, sepanjang stringnya diawali oleh tanda kutip yang sama di awal dan akhir string.
                    </Text>

                    <Text style={styles.text}>
                        Tanda kutip tiga digunakan untuk string multibaris. Ketiga contoh berikut, semuanya adalah benar,
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        {`kata = 'kata' \
                        \nkalimat = "Ini adalah kalimat' \
                        \nparagraf = """Ini adalah paragraf. Paragraf \
                        \n\t\t\tterdiri dari beberapa baris."""`}
                    </Text>
                </View>


                <View>
                    <Text style={styles.subHeader}>Tanda Kutip di Python</Text>
                    <Text style={styles.text}>
                        Python menggunakan tanda kutip tunggal (‘), ganda (“), maupun triple (”’ atau “””) untuk menandai string, sepanjang stringnya diawali oleh tanda kutip yang sama di awal dan akhir string.
                    </Text>

                    <Text style={styles.text}>
                        Tanda kutip tiga digunakan untuk string multibaris. Ketiga contoh berikut, semuanya adalah benar,
                    </Text>
                    <Text style={[styles.text, styles.code]}>
                        {`kata = 'kata' \
                        \nkalimat = "Ini adalah kalimat' \
                        \nparagraf = """Ini adalah paragraf. Paragraf \
                        \n\t\t\tterdiri dari beberapa baris."""`}
                    </Text>
                </View>

                <View>
                    <Text style={styles.subHeader}>Komentar di Python</Text>
                    <Text style={styles.text}>
                        Tanda pagar ( # ) digunakan untuk menandai komentar di python. Komentar tidak akan diproses oleh interpreter Python. Komentar hanya berguna untuk programmer untuk memudahkan memahami maksud dari kode..
                    </Text>

                    <Text style={[styles.text, styles.code]}>
                        {`# Komentar pertama \
                        \nprint("Hello World!") # Komentar kedua`}
                    </Text>

                    <Text style={styles.text}>
                        Kode di atas akan menghasilan keluaran :
                    </Text>

                    <Text style={[styles.text, styles.code]}>
                        {`Hello World!`}
                    </Text>

                    <Text style={styles.text}>
                        Python tidak memiliki fitur komentar multibaris. Kita harus mengomentari satu persatu baris seperti berikut :
                    </Text>

                    <Text style={[styles.text, styles.code]}>
                        {`# Ini komentar \
                        \n# Ini juga adalah komentar \
                        \n# Ini juga masih komentar`}
                    </Text>
                </View>
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
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    textCode: {
        color: '#e17055',
    },
});

export default SintaksDasar;