import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import { Container } from './styles';

export default function Map({ region = null, showsUserLocation }) {
  return (
    <Container
      provider={PROVIDER_GOOGLE}
      region={region}
      // onRegionChange={(reg) => setRegion(reg)}
      showsUserLocation={showsUserLocation} 
      loadingEnabled
    />
  );
}
