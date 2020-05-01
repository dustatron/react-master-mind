import React from 'react';
import { Button, Header, Form } from 'semantic-ui-react';
import { v4 } from 'uuid';

function Splash(props) {
  function handleNewUserFormSubmisson(event) {
    event.preventDefault();
    props.onNewUserOnClick({
      tag: event.target.tag.value,
      GG: event.target.GG.value,
      userId: v4()
    });
  }

  return (
    <Form onSubmit={handleNewUserFormSubmisson}>
      <Header as="h2"> User Board </Header>
      <Form.Field>
        <label>Gamer Tag</label>
        <input name="tag" placeholder="Dirty Dan" />
      </Form.Field>
      <Form.Field>
        <label>Favorite Golden Girl</label>
        <input name="GG" placeholder="Rose?" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Splash;
