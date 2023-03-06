import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>

      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0A66C2' }} href='#'>
        <MDBIcon fab icon='linkedin' />
      </MDBBtn>
    <h6>
        <span>© 2023 Teresa Rodriguez</span>
    </h6>
    </>
  );
}