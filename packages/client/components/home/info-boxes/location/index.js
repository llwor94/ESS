import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

function LocationContainer({google, styles}) {
  const [marker, setMarker] = useState(undefined);

  return (
    <div className={styles.section}>
      <h2>Find us</h2>
    <div className={styles.mapwrapper}>
      <Map
        style={{ width: '440px', border: '1px solid white', borderRadius: '4px', height: '400px', position: 'relative' }}
        google={google}
        initialCenter={{ lat: 47.709727, lng: -122.129865 }}
        zoom={12}
      >
        <Marker
          position={{ lat: 47.709727, lng: -122.129865 }}
          name='Eastside Swim School'
          onClick={(_, marker) => setMarker(marker)}
        />
        <InfoWindow visible={Boolean(marker)} marker={marker}>
          <div>
            <h5>
              Willows Prep Pool
            </h5>
            <p>
              12280 Redmond-Woodinville Rd. NE<br />
              Redmond, WA 98052
            </p>
          </div>
        </InfoWindow>
      </Map>
    </div>
    </div>
  )
}

const Location = GoogleApiWrapper({
  apiKey: 'AIzaSyCPV4JsVaRkLA9JpXPAIkqahJGT4z4VWlU',
})(LocationContainer);

export {Location}
