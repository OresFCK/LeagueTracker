import  React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const FormContainer = styled.div`
  text-align: center;
`;


const Login = () => {
    return <Container>
    <FormContainer>
        <h1>Login</h1>
            <TextField sx={{display:'block', marginBottom:'15px'}} id="outlined-basic" label="Email" variant="outlined" />
            <TextField sx={{display:'block', marginBottom:'15px'}} id="outlined-basic" label="Password" variant="outlined" />
            <Button sx={{display:'block', marginBottom:'15px'}} variant="contained">Login</Button>  
        </FormContainer>
    </Container>
  };
  
  export default Login;