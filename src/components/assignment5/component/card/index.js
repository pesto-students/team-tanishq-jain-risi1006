import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import SocialShare from '../socialShare';
export default function GiftCard({title, description, uri, onSelect, buttonTitle}) {
  return (
    <MDBCard style={{width:260, height:460, margin:5, display:'flex', alignContent:'center'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={uri} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>

      </MDBCardBody>
      <MDBBtn onClick={onSelect}>{buttonTitle}</MDBBtn>
    </MDBCard>
  );
}