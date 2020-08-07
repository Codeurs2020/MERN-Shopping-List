import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { addItem } from '../actions/itemActions';

const AddItem = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  return (
    <div style={{ padding: '0 15px' }}>
      <Button color="dark" style={{ marginBottom: '2rem' }} onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to shopping list</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const newItem = { name };
              dispatch(addItem(newItem));
              setName('');
              setModal(false);
            }}
          >
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                value={name}
                name="name"
                id="item"
                placeholder="Add a new item..."
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={() => {
                  const newItem = { name };
                  dispatch(addItem(newItem));
                  setName('');
                  setModal(false);
                }}
              >
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default connect(null, { addItem })(AddItem);
