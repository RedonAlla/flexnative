import React from "react";
import Message from "@flexnative/messages";


export default class GhostTypeMessage extends React.PureComponent {
  public render() {
    return (
      <Message text="To have nice effect for ghost type using custom colors use hex color." color="warning" />
    );
  }
}