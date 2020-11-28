import {useState} from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import {Button} from './Buttons';

// firebase DB
import {storeRegistration} from '../../dbConfig/firebase';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail(email)) {
      alert("Email can't be blank. Please try again.");
      setEmail('');
      return;
    };
    const registration = {
      id: uuid(),
      email: email,
      name: name
    };
    storeRegistration(registration);
    setName('');
    setEmail('');
    alert (`Thank you for registering ${name}. You're one of the cool kids now!`)
  }

  return (
    <div>
      <FormHeading>
        <h4>
          Keep in Touch
        </h4>
        <h5>
          Sign up for our latest news, deals, and updates
        </h5>
      </FormHeading>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormInput 
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput 
            placeholder="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <Button type='submit' width='120px' height='35px'>SIGN UP</Button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default EmailForm;

const FormHeading = styled.div`
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0px;
  button {
    margin-top: 5px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 20px;
  border: 1px solid #002b5c;
  font-size: 14px;
  color: #002b5c;
  background-color: #f6f7ff;
  margin-bottom: 5px;
  padding: 5px;
`;