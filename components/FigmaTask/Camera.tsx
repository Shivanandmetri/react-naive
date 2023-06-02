import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const Scan = () => {
  const devices = useCameraDevices();
  // const device = devices.front;
  const device = devices.back;
  const camera = useRef(null);

  useEffect(() => {
    checkPermission;
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(checkPermission);
  };

  if (device == null) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{flex: 1}}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  );
};

export default Scan;
