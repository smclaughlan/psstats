import React from "react";
import { Button, Box, Tabs, Tab } from "grommet";
import { backEndURL, imgURL } from "../config";
import MDE from "./MDE";
import ReactMarkdown from "react-markdown";
import moment from "moment";

function Comments(props) {
  const [commentData, setCommentData] = React.useState(
    null
  );

  const getComments = async () => {
    try {
      const res = await fetch(
        `${backEndURL}/comments/?url=${window.location.href}`
      );
      if (res.ok) {
        const resData = await res.json();
        await setCommentData(resData.comments);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const delPost = async (postId) => {
    try {
      const res = await fetch(`${backEndURL}/comments`, {
        method: "delete",
        body: JSON.stringify({ id: postId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }
    getComments();
  };

  React.useEffect(() => {
    getComments();
  }, []);

  return (
    <Box>
      {commentData && commentData.length > 0 ? (
        <>
          <h1>Comments:</h1>
          {commentData.map((post) => {
            let postId = post.id;
            return (
              <>
                {post.email === props.email ? (
                  <h4>
                    {post.name} -{" "}
                    {moment(post.createdAt)
                      .toDate()
                      .toLocaleString()}{" "}
                    -{" "}
                    <Button
                      className="searchRes"
                      onClick={() => {
                        delPost(postId);
                      }}
                    >
                      X
                    </Button>
                  </h4>
                ) : (
                  <h4>
                    {post.name} -{" "}
                    {moment(post.createdAt)
                      .toDate()
                      .toLocaleString()}
                  </h4>
                )}
                <ReactMarkdown source={post.body} />
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
      <MDE name={props.name} gc={getComments} />
    </Box>
  );
}

export default Comments;
