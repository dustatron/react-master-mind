import React from 'react';
import { Button, Header, Form } from 'semantic-ui-react';

function UserUpdate(props) {
  function handleNewUserFormEdit(event) {
    event.preventDefault();
    props.onEditUserOnClick({
      tag: event.target.tag.value,
      GG: event.target.GG.value
    });
  }

  return (
    <Form onSubmit={handleNewUserFormEdit}>
      <Header as="h2"> User Board </Header>
      <Form.Field>
        <label>Gamer Tag</label>
        <input type="text" name="tag" defaultValue={props.tag} />
      </Form.Field>
      <Form.Field>
        <label>Favorite Golden Girl</label>
        <input type="text" name="GG" defaultValue={props.GG} />
      </Form.Field>
      <Button type="submit">Update</Button>
    </Form>
  );
}

export default UserUpdate;
