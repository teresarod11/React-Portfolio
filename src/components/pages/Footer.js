import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
    <section className='d-flex justify-content-center mt-5'>
      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/teresarod11?tab=repositories'>
        <MDBIcon fab icon='github' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0A66C2' }} href='https://www.linkedin.com/in/teresarodriguez11/'>
        <MDBIcon fab icon='linkedin' />
      </MDBBtn>
    </section>
    <h6 className='d-flex justify-content-center'>
        <span>© 2023 Teresa Rodriguez</span>
    </h6>
    </>
  );
}