import styled from 'styled-components';

const Map = () => {
  return (
    <div>
      <MapFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.375288580456!2d-72.36230794911525!3d41.10449422134579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e89f34796317cb%3A0xc20c2508e60e2abf!2s439%20Main%20St%2C%20Greenport%2C%20NY%2011944!5e0!3m2!1sen!2sus!4v1585888566133!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false" tabindex="0">
      </MapFrame>
    </div>
  );
};

export default Map;

const MapFrame = styled.iframe`
  height: 100%;
  width: 100%;
`;