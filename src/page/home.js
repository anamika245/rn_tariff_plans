import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  PixelRatio,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TariffCard from '../components/TariffCard';
import {bestTariffs, specialTariffs, popularTariffs, topup} from '../data/data';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#F1800D'}}
    style={{backgroundColor: '#ffffff'}}
    activeColor={'rgba(38, 50, 56, 0.9)'}
    inactiveColor={'rgba(38, 50, 56, 0.4)'}
    scrollEnabled={true}
    labelStyle={{fontSize: 12}}
    tabStyle={{width: 'auto'}}
  />
);

const TariffCardContainer = tariffs => (
  <View style={{flex: 1, backgroundColor: '#ffffff'}}>
    {tariffs.map((tariff, index) => (
      <TariffCard
        key={index}
        amount={tariff.amount}
        timePeriod={tariff.validity}
        tariffInfo={tariff.tariffInfo}
      />
    ))}
  </View>
);
const renderScene = SceneMap({
  first: () => TariffCardContainer(bestTariffs),
  second: () => TariffCardContainer(specialTariffs),
  third: () => TariffCardContainer(popularTariffs),
  fourth: () => TariffCardContainer(topup),
});

const SearchTextInput = props => {
  return <TextInput {...props} editable maxLength={40} />;
};

const Home = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Best Offers for you'},
    {key: 'second', title: 'Special Recharge'},
    {key: 'third', title: 'Popular'},
    {key: 'fourth', title: 'Topup'},
  ]);
  const [value, onChangeText] = useState('Search Plan Amount, Talktime');
  console.log('Layout', layout);
  return (
    <View style={styles.container}>
      <View style={styles.twoColHeading}>
        <Text style={styles.col1}>Browse Plans</Text>
        <View style={styles.col2}>
          <Image source={require('../../assets/closeIcon.png')} />
        </View>
      </View>
      <Text style={styles.subHeading}>for Airtel Kolkata</Text>
      <View style={styles.cardSeparator}></View>
      <View
        style={{
          backgroundColor: value,
          borderBottomColor: 'rgba(38, 50, 56, 0.1)',
          borderBottomWidth: 1,
        }}>
        <SearchTextInput
          multiline
          numberOfLines={1}
          value={value}
          onChangeText={text => onChangeText(text)}
          style={{padding: 5}}
        />
      </View>
      <View style={styles.cardSeparator}></View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: 200}}
        overScrollMode={true}
        renderTabBar={renderTabBar}
        style={{
          marginRight: PixelRatio.roundToNearestPixel(-38),
          marginLeft: PixelRatio.roundToNearestPixel(-38),
        }}
      />
      <View style={styles.cardSeparator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: PixelRatio.roundToNearestPixel(28),
    paddingBottom: PixelRatio.roundToNearestPixel(28),
    paddingRight: PixelRatio.roundToNearestPixel(38),
    paddingLeft: PixelRatio.roundToNearestPixel(38),
    flex: 1,
    backgroundColor: '#ffffff',
  },
  twoColHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  col1: {
    width: '90%',
    color: '#F1800D',
    fontWeight: '600',
    fontSize: PixelRatio.roundToNearestPixel(18),
    justifyContent: 'center',
  },
  col2: {
    width: '10%',
    justifyContent: 'flex-start',
  },
  subHeading: {
    color: 'rgba(38, 50, 56, 0.7)',
    fontSize: PixelRatio.roundToNearestPixel(16),
    fontWeight: 'normal',
  },
  cardSeparator: {
    marginTop: PixelRatio.roundToNearestPixel(20),
  },
});
export default Home;
