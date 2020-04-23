import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

function UserDetail(props) {
  function handleUpdateOnClick() {
    props.onUpdateOnClick();
  }

  return (
    <React.Fragment>
      <h1> Gamertag: {props.tag}</h1>
      <h1> Favorite GG: {props.GG}</h1>
      <hr />
      <Button basic color="orange" onClick={handleUpdateOnClick}>
        Update
        <i aria-hidden="true" class="right arrow icon" />
      </Button>
      <Button basic color="red">
        delete
        <i aria-hidden="true" class="right delete icon" />
      </Button>
    </React.Fragment>
  );
}

export default UserDetail;
