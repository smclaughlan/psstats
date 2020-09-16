import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { Button } from 'grommet';
import "react-mde/lib/styles/css/react-mde-all.css";
import { backEndURL } from '../config';

import { userAuth0, useAuth0 } from '@auth0/auth0-react';


const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const MDE = (props) => {
  const [value, setValue] = React.useState("");
  const [postLoaded, setPostLoaded] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("write");
  let { isAuthenticated } = useAuth0();
  let { user } = useAuth0();
  let name;
  let email;
  if (user) {
    name = user.name;
    email = user.email;
  }

  let url = window.location.href;

  const newPost = async () => {
    const res = await fetch(`${backEndURL}/comments`, {
      method: "post",
      body: JSON.stringify({ name, email, url, "body": value }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    window.localStorage.setItem("justPosted", true);
    setValue("");
    props.gc(); //get comments
  }

  return (
    <>
      {user ?
        <>
          <h1>Leave a comment on {props.name}:</h1>
          <div className="container">
            <ReactMde
              value={value}
              onChange={setValue}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={
                markdown =>
                  Promise.resolve(converter.makeHtml(markdown))
              }
            />
            <Button className="searchRes" onClick={newPost} margin="medium" label={`Post`} size="medium" />
          </div>
        </>
        :
        <>
        </>}
    </>
  )
}

export default MDE;
