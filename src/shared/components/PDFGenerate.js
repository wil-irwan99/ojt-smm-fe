/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import SMMLOGO from '../../property/images/sinar-mas.png'

const styles = StyleSheet.create({
  outer_border: {
    margin: "10mm",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: '277mm',
    width: '190mm',
  },
  upper_space: {
    height: '47mm',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  lower_space: {
    height: '40mm',
    backgroundColor: '#ffffff',
  },
  cover_title: {
    margin: "5mm",
    height: '150mm',
    width: '180mm',
    border:'1mm solid #000000',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  title_font:{
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
    fontSize: 15,
  },
  title_space:{
    margin: '15mm',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sign_area: {
    height: '30mm',
    width: '180mm',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    flexDirection: 'row',
  },
  sign_box_small: {
    border:'1mm solid #000000',
    margin: '2mm',
    display: 'flex',
    flexDirection: 'column',
    width: '42mm',
    height: '26mm',
    textAlign: 'center',
  },
  sign_box_big: {
    border:'1mm solid #000000',
    margin: '2mm',
    display: 'flex',
    flexDirection: 'column',
    width: '84mm',
    height: '26mm',
    textAlign: 'center',
  },
  sign_font_role: {
    fontFamily: 'Times-Roman',
    fontSize: 9,
    textAlign: 'center',
  },
  sign_font_name: {
    fontFamily: 'Times-Roman',
    fontSize: 9,
    textAlign: 'center',
  },
  sign_name_box: {
    flexDirection: 'column-reverse',
    alignItems: 'end',
    height: '13mm',
  },
  sign_role_box: {
    flexDirection: 'column',
    alignItems: 'start',
    height: '13mm',
  },
  image: {
    marginVertical: '1mm',
  },
  image_box: {
    width: '44mm',
    height: '24mm',
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
  }
});

const MyDocument = (props) => {

  const date = props.date;
  const time = props.time;

  return(
    <Document>
      <Page size="A4">
        <View style={styles.outer_border}>
          <View style={styles.upper_space}>
            <View style={styles.image_box}>
              <Image style={styles.image} src={SMMLOGO}/>
            </View>
            <View style={styles.image_box}/>
            <View style={styles.image_box}/>
            <View style={styles.image_box}/>
          </View>
          <View style={styles.cover_title}>
            <View style={styles.title_space}>
              <Text style={styles.title_font}>DAILY CHECKLIST TEAM OPERATION</Text>
              <Text style={styles.title_font}>ALL DEVICES NETWORK SITE SINARMAS MINING</Text>
              <Text style={styles.title_font}>Date : {date}</Text>
              <Text style={styles.title_font}>Time : {time}</Text>
            </View>
          </View>
          <View style={styles.lower_space}></View>
          <View style={styles.sign_area}>
            <View style={styles.sign_box_small}>
                <View style={styles.sign_role_box}>
                  <Text style={styles.sign_font_role}>NETWORK ENGINEER</Text>
                </View>
                <View style={styles.sign_name_box}>
                  <Text style={styles.sign_font_name}>DWI KURNIA</Text>
                </View>
            </View>
            <View style={styles.sign_box_big}>
                <View style={styles.sign_role_box}>
                  <Text style={styles.sign_font_role}>PROJECT MANAGER</Text>
                </View>
                <View style={styles.sign_name_box}>
                  <Text style={styles.sign_font_name}>GILANG DWI PUTRA</Text>
                </View>
            </View>
            <View style={styles.sign_box_small}>
                <View style={styles.sign_role_box}>
                  <Text style={styles.sign_font_role}>APPROVAL IT NETWORK</Text>
                </View>
                <View style={styles.sign_name_box}>
                  <Text style={styles.sign_font_name}>ARWIN HALOMOAN</Text>
                </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument