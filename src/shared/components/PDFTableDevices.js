
import { Page, StyleSheet, View, Text } from '@react-pdf/renderer';
import {Table, TableHeader, TableBody, TableCell, DataTableCell} from '@david.kucsai/react-pdf-table'

const styles = StyleSheet.create({
    header_box: {
        height: '10mm',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    },
    text_font_header: {
        fontFamily: 'Times-Bold',
        fontSize: 9,
    },
    text_font_data: {
        fontFamily: 'Times-Roman',
        fontSize: 9,
        textAlign: 'center',
        justifyContent: 'center',
    },
    paper_margin: {
        margin: "5mm",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: '287mm',
        width: '200mm',
    },
      title_table_box: {
        flexDirection: 'row',
        textAlign: 'left',
        width: '200mm', 
    },
    text_font_title: {
        fontFamily: 'Times-Bold',
        fontSize: 15,
    },
})


const PDFTableDevices = (props) => {
    return (
        <Page size="A4">
            <View style={styles.paper_margin}>
                <View style={styles.title_table_box}>
                    <Text style={styles.text_font_title}>{props.title}</Text>
                </View>
                <Table data={props.data}>
                    <TableHeader>
                        <TableCell weighting={0.1}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Site</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.25}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Device</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.15}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Type</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.1}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Usage</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.15}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Condition</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.25}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Notes</Text>
                            </View>
                        </TableCell>
                    </TableHeader>
                    <TableBody textAlign='center'>
                        <DataTableCell weighting={0.1} style={styles.text_font_data} getContent={(r) => r.site}/>
                        <DataTableCell weighting={0.25} style={styles.text_font_data} getContent={(r) => r.device}/>
                        <DataTableCell weighting={0.15} style={styles.text_font_data} getContent={(r) => r.type}/>
                        <DataTableCell weighting={0.1} style={styles.text_font_data} getContent={(r) => String(r.usage) + ' %'}/>
                        <DataTableCell weighting={0.15} style={styles.text_font_data} getContent={(r) => r.condition}/>
                        <DataTableCell weighting={0.25} style={styles.text_font_data} getContent={(r) => r.notes}/>
                    </TableBody>
                </Table>
            </View>
        </Page>
    );
}

export default PDFTableDevices