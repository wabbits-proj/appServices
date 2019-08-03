import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { Marker } from 'react-native-maps';

import { Container, Content, ListView, List } from './styles';

import { requestLocationPermission } from '~/services/utils';
import Input from '~/components/Input';
import Map from '~/components/Map';

export default function Search() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    verifyPermission();
  }, []);

  async function verifyPermission(){
    if(await requestLocationPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 'App Location Permission', 'Maps App needs access to your map so you can be navigated.')) {
      getLocation();
    }
  }

  async function getLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134
      });
    }, (err) => {
      alert(JSON.stringify(err));
    }, { 
      timeout: 20000, 
      enableHighAccuracy: true, 
      maximumAge: 1000 
    })
  };

  return (
    <Container>
      <Map
        region={region}
        showsUserLocation={true}
      />
      <Content>
        <Input 
          name="search"
          borderColor="#828282" 
          text="Pesquisar"
        />
        <ListView>
          <List>

          </List>
          <List>
            
          </List>
          <List>
            
          </List>
          <List>
            
          </List>
          <List>
            
          </List>
        </ListView>
      </Content>
    </Container>
  );
}
