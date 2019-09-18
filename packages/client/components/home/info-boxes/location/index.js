import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import clsx from 'clsx'

function LocationContainer({ google, styles }) {
  const [marker, setMarker] = useState(true);

  return (
    <div className={clsx(styles.section, styles.location)}>
      <h2>Find us</h2>
    <div className={styles.mapWrapper}>
      <Map
        style={{ border: '1px solid white', borderRadius: '4px', height: '300px', position: 'relative' }}
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
      <div>
        <h3 style={{fontWeight: 'bold'}}>Willows Prep School</h3>
        <p>The Willows Prep Pool is located on the campus of the Willows Preparatory School (1.5 miles from the South of Hollywood Schoolhouse on Woodinville Redmond Road the former property of Washington Cathedral)</p>
        <br/>
        <p>*The pool is located in the North East corner of the two story brick colored building with the blue roof.</p>
      </div>
    </div>
  )
}

const Location = GoogleApiWrapper({
  apiKey: 'AIzaSyCPV4JsVaRkLA9JpXPAIkqahJGT4z4VWlU',
})(LocationContainer);

export {Location}
