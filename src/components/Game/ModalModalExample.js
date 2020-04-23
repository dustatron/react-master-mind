import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

function EndModal(props) {
  const WinTitle = "You Win";
  const WinBody = "Winner winner chicken dinner";
  const LoseTitle = "Loser Loser. You lost.";
  const LoseBody = "Loser loser vegetables and saddness.";

  let title;
  let body;

  if (props.win) {
    title = WinTitle;
    body = WinBody;
  } else {
    title = LoseTitle;
    body = LoseBody;
  }
  return (
    <Modal open={props.win || props.lose}>
      <Modal.Header>GAME OVER!</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={props.img} />
        <Modal.Description>
          <Header>{title}</Header>
          <p>{body}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default EndModal;
