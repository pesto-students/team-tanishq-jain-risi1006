import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router';

export default function Footer() {
    const navigation = useNavigate();
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Projects</h5>

            <p>
              Followings are the project and assignments link
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Assignment</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' className='text-white'>
                  Assignment
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Skill
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Contact
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Projects</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Project 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Project 2
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          Ritesh Singh
        </a>
      </div>
    </MDBFooter>
  );
}