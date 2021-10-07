import React from 'react';
import {StyleSheet, Text, Pressable, View, PixelRatio} from 'react-native';

const TariffCard = ({amount, timePeriod, tariffInfo}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.twoColButtons}>
          <Text style={styles.col1}>{amount}</Text>
          <View style={styles.col2}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Select</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.separator}></View>
        <Text style={styles.validityStyle}>Validity: {timePeriod}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.tariffInfo}>{tariffInfo}</Text>
        <View style={styles.separator}></View>
        <View
          style={{
            borderBottomColor: 'rgba(151, 151, 151, 1)',
            borderBottomWidth: 1,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: PixelRatio.roundToNearestPixel(28),
    paddingRight: PixelRatio.roundToNearestPixel(38),
    paddingLeft: PixelRatio.roundToNearestPixel(38),
  },
  twoColButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  col1: {
    color: '#263238',
    fontSize: PixelRatio.roundToNearestPixel(18),
    fontWeight: '500',
    width: '75%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  col2: {
    width: '25%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 11.5,
    borderColor: '#F1800D',
    width: 73,
    height: 23,
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingTop: 2,
    fontWeight: 'normal',
    fontSize: PixelRatio.roundToNearestPixel(12),
    textAlign: 'center',
    color: '#F1800D',
  },
  validityStyle: {
    color: 'rgba(38, 50, 56, 0.7)',
    fontSize: PixelRatio.roundToNearestPixel(12),
    fontWeight: '600',
  },
  tariffInfo: {
    color: 'rgba(38, 50, 56, 0.7)',
    fontSize: PixelRatio.roundToNearestPixel(12),
    fontWeight: '300',
  },
  separator: {
    marginTop: 8,
  },
});
export default TariffCard;
