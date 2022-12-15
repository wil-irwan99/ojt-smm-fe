
import { Page, StyleSheet, View, Text } from '@react-pdf/renderer';
import {Table, TableHeader, TableBody, TableCell, DataTableCell} from '@david.kucsai/react-pdf-table'

const styles = StyleSheet.create({
    header_box: {
        height: '10mm',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title_subheader_box: {
        height: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid black',
    },
    subheader_box: {
        height: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    subheader_text_box_left: {
        width: '50%',
        //height: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        borderRight: '1px solid black',
    },
    subheader_text_box_right: {
        width: '50%',
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


const PDFTable = (props) => {
    return (
        <Page size="A4">
            <View style={styles.paper_margin}>
                <View style={styles.title_table_box}>
                    <Text style={styles.text_font_title}>{props.title}</Text>
                </View>
                <Table data={props.data}>
                    <TableHeader>
                        <TableCell weighting={0.05}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Site</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.15}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Link</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.05}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>SLA</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.2}>
                            <View style={styles.header_box}>
                                <View style={styles.title_subheader_box}>
                                    <Text style={styles.text_font_header}>Utilization</Text>
                                </View>
                                <View   style={styles.subheader_box}>
                                    <View style={styles.subheader_text_box_left}>
                                        <Text style={styles.text_font_header}>Download</Text>
                                    </View>
                                    <View style={styles.subheader_text_box_right}>
                                        <Text style={styles.text_font_header}>Upload</Text>
                                    </View>
                                </View>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.25}>
                            <View style={styles.header_box}>
                                <View style={styles.title_subheader_box}>
                                    <Text style={styles.text_font_header}>Traffic Average</Text>
                                </View>
                                <View   style={styles.subheader_box}>
                                    <View style={styles.subheader_text_box_left}>
                                        <Text style={styles.text_font_header}>Download</Text>
                                    </View>
                                    <View style={styles.subheader_text_box_right}>
                                        <Text style={styles.text_font_header}>Upload</Text>
                                    </View>
                                </View>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.15}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Notes</Text>
                            </View>
                        </TableCell>
                        <TableCell weighting={0.15}>
                            <View style={styles.header_box}>
                                <Text style={styles.text_font_header}>Bandwidth Capacity</Text>
                            </View>
                        </TableCell>
                    </TableHeader>
                    <TableBody textAlign='center'>
                        <DataTableCell weighting={0.05} style={styles.text_font_data} getContent={(r) => r.site}/>
                        <DataTableCell weighting={0.15} style={styles.text_font_data} getContent={(r) => r.link}/>
                        <DataTableCell weighting={0.05} style={styles.text_font_data} getContent={(r) => String(r.average_up) + ' %'}/>
                        <DataTableCell weighting={0.1} style={styles.text_font_data} getContent={(r) => String(r.uti_traffic_in) + ' %'}/>
                        <DataTableCell weighting={0.1} style={styles.text_font_data} getContent={(r) => String(r.uti_traffic_out) + ' %' }/>
                        <DataTableCell weighting={0.125} style={styles.text_font_data} getContent={(r) => String(r.traffic_in) + ' Mbps'}/>
                        <DataTableCell weighting={0.125} style={styles.text_font_data} getContent={(r) => String(r.traffic_out) + ' Mbps'}/>
                        <DataTableCell weighting={0.15} style={styles.text_font_data} getContent={(r) => r.notes}/>
                        <DataTableCell weighting={0.15} style={styles.text_font_data} getContent={(r) => String(r.bandwidth_cap) + ' Mbps'}/>
                    </TableBody>
                </Table>
            </View>
        </Page>
    );
}

export default PDFTable