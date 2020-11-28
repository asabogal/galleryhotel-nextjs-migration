import {useState} from 'react';
import styled from 'styled-components';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {mapStyle} from '../data/mapData/MapStyle';
import {spots} from '../data/mapData/NearbySpots';

// icons
import hotel from '../public/images/location/hotel.svg';
import dot from '../public/images/location/dot.svg';

const Map = (props) => {

  const [hotelSelected, setHotelSelected] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const renderSpots = (spots) => {
    return (
      spots.map(spot => (
        <Marker 
        key={spot.name} 
        position={{lat: spot.coordinates.lat, lng: spot.coordinates.lng}}
        icon={dot}
        onClick={() => setSelectedSpot(spot)}
     />
      ))
    )
  }

  return (
    <GoogleMap 
      defaultZoom={14} 
      defaultCenter={{lat: 41.104491, lng: -72.360118}}
      defaultOptions={{styles: mapStyle}}
    >
      <Marker 
        position={{lat: 41.104491, lng: -72.360118}}
        icon={hotel}
        onClick={() => setHotelSelected(true)}
      />

      {hotelSelected && (
        <InfoWindow
          position={{lat: 41.104491, lng: -72.360118}}
          onCloseClick={() => setHotelSelected(null)}
        >
          <InfoBox>
            <h3>THE GALLERY HOTEL!</h3>
            <a href="https://www.google.com/maps?saddr=My+Location&daddr=439+Main+Street+Greenport+NY+11944">Get Here</a>
          </InfoBox>
        </InfoWindow>
      )}

      {
        props.withSpots ? renderSpots(spots) : null
      }

      {selectedSpot && (
        <InfoWindow
        position={{lat: selectedSpot.coordinates.lat, lng: selectedSpot.coordinates.lng}}
        onCloseClick={() => setSelectedSpot(null)}
        >
          <InfoBox>
            <h3>{selectedSpot.name}</h3>
            <p>{selectedSpot.description}</p>
            <a href={selectedSpot.url} target="_blank" rel="noopener noreferrer">Visit</a>
          </InfoBox>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const MapGoogle = withScriptjs(withGoogleMap(Map));

export default MapGoogle;

const InfoBox = styled.div`
  text-align: center;
  width: 150px;
  a {
    text-decoration: none;
    color: blue;
    font-size: 15px;
    :hover {
      text-decoration: underline;
    }
  }
`;