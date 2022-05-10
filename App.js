// import { registerRootComponent } from 'expo';
import React from 'react';
import { StatusBar, NativeModules } from 'react-native';

import { AppearanceProvider } from 'react-native-appearance';   
import * as Device from 'expo-device';

import Routes from './src/routes';

export default function App() {
    // if (__DEV__) {
    // NativeModules.DevSettings.setIsDebuggingRemotely(true);  
    // }

    var envMobile = {
        "isDevice": Device.isDevice,
        "brand": Device.brand,
        "deviceName": Device.deviceName,
        "modelName": Device.modelName,
        "modelId": Device.modelId,
        "osName": Device.osName,
        "osVersion": Device.osVersion,
        "osBuild": Device.osBuild,
        "platformApiLevel": Device.platformApiLevel,
    }
    console.log(envMobile);

    // console.log(Device.brand, Device.deviceName)
    // console.log(Device.modelId, Device.modelName)
    // console.log('OS: ' + Device.osVersion,
    //             'Build: ' + Device.osBuild,
    //             'Level: ' + Device.platformApiLevel)

    return (
        <AppearanceProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <Routes />
        </AppearanceProvider>
    );
}

//<>
//  <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
//</>

// registerRootComponent(App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });