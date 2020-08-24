import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { Button } from 'grommet';
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

export function MDE(props) {
  const [value, setValue] = React.useState("");
  const [postLoaded, setPostLoaded] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("write");

  const newPost = () => {
    // props.sendPostReq(props.token, props.sketchbook_id, value);
    window.localStorage.setItem("justPosted", true);
    setValue("");
  }

  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
}



export default MDE;
