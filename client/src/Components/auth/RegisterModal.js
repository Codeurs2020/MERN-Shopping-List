import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from 'reactstrap';

import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

const RegisterModal = ({ error, isAuthenticated }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const dispatch = useDispatch();

  const toggle = () => {
    // Clear errors
    dispatch(clearErrors());
    setModal(!modal);
  };

  //   const prevError = useRef();
  //   console.log(prevError);

  useEffect(() => {
    //   prevError.current = error
    // if (error !== prevError.current) {

    // Check for register error
    if (error.id == 'REGISTER_FAIL') {
      setMsg(error.msg.msg);
      //   }
    } else {
      setMsg(null);
    }

    // If authenticated => Close Modal
    if (modal) {
      if (isAuthenticated) {
        toggle();
      }
    }
  }, [error, modal, isAuthenticated, toggle]);

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const newUser = { name, email, password };
              dispatch(register(newUser));
              // dispatch(clearErrors());
              setName('');
              setEmail('');
              setPassword('');
            }}
          >
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={() => {
                  const newUser = { name, email, password };
                  dispatch(register(newUser));
                  // dispatch(clearErrors());
                  setName('');
                  setEmail('');
                  setPassword('');
                }}
              >
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps)(RegisterModal);
