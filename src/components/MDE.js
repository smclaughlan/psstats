import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { Button } from 'grommet';
import "react-mde/lib/styles/css/react-mde-all.css";

import { userAuth0, useAuth0 } from '@auth0/auth0-react';


const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const MDE = () => {
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

  const newPost = () => {
    // props.sendPostReq(props.token, props.sketchbook_id, value);
    window.localStorage.setItem("justPosted", true);
    setValue("");
  }

  return (
    <>
      {user ?
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
        :
        <>
        </>}
    </>
  )
}

export default MDE;
