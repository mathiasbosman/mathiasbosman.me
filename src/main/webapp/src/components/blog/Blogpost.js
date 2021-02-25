import React from "react";
import AbbrName from "../AbbrName";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: props.post}
  }

  render() {
    let post = this.state.post;
    return <section className="post">
      <h2 className="sectionHead">
        {post.content.subject}
        <aside>{post.created} by <AbbrName firstName={post.poster.firstName}
                                           lastName={post.poster.lastName}/>
        </aside>
      </h2>
      <p>{post.content.body}</p>
    </section>
  }
}