import React, {useState} from 'react';
import {StyleSheet, PixelRatio, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

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

const Tab = ({routes, renderScene}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      overScrollMode={true}
      renderTabBar={renderTabBar}
      style={{
        marginRight: PixelRatio.roundToNearestPixel(-38),
        marginLeft: PixelRatio.roundToNearestPixel(-38),
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default Tab;
