import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import Lottie from 'lottie-react-native';
// import {getBatteryLevel} from 'react-native-device-info';
const App = () => {
  const [batteryLevel, setbatteryLevel] = useState('');
  const [isCharging, setisCharging] = useState(false)

  DeviceInfo.getBatteryLevel().then(level => {
    setbatteryLevel(level);
  });

  DeviceInfo.isBatteryCharging().then(isCharging => {
    setisCharging(isCharging)
  });

  console.log(isCharging);

  console.log(batteryLevel);

  let name = DeviceInfo.getModel();
  let version = DeviceInfo.getSystemVersion();
  let brand = DeviceInfo.getBrand();
  let d_id = DeviceInfo.getDeviceId();
  let build_numbeer = DeviceInfo.getBuildNumber();

  const FullyCharged = () => {

    if (batteryLevel * 100 == 100) {
            return (
              <>
                <Lottie
                  style={styles.animation}
                  source={require('./assets/full.json')}
                  autoPlay
                  loop
                />
              </>
            )
    }
      

  }

  const FivePercent = () => {
        if (batteryLevel * 100 <= 5) {
          return (
            <>
              <Lottie
                style={styles.animation}
                source={require('./assets/5percent.json')}
                autoPlay
                loop
              />
            </>
          );
        }
  }

  const TwentyPercent = () => {
     if (6 > batteryLevel * 100 <= 20) {
       return (
         <>
           <Lottie
             style={styles.animation}
             source={require('./assets/20percent.json')}
             autoPlay
             loop
           />
         </>
       );
     }
  }

  const Charging = () => {
    if (isCharging) {
                  return (
                    <>
                      <Lottie
                        style={styles.animation}
                        source={require('./assets/charging.json')}
                        autoPlay
                        loop
                      />
                    </>
                  );
    }
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header.text}>Device info</Text>
      </View>
      <View style={styles.information}>
        <Text style={styles.information.text}>Name : {name}</Text>
        <Text style={styles.information.text}>Version : {version}</Text>
        <Text style={styles.information.text}>Brand : {brand}</Text>
        <Text style={styles.information.text}>Device ID : {d_id}</Text>
        <Text style={styles.information.text}>
          Build Number : {build_numbeer}
        </Text>
      </View>
      <View style={styles.animationContainer}>
        {(FullyCharged(), FivePercent(), TwentyPercent(), Charging())}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    text: {
      fontSize: 22,
      fontWeight: '600',
    },
  },
  information: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    text: {
      fontSize: 18,
      fontWeight: '400',
      padding: 5,
    },
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  animation: {
    width: 100,
    height: 100,
  },
});
