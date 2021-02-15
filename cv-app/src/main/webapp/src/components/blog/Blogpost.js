import React from "react";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: props.post}
  }

  _getShortName(poster) {
    return poster.firstName + poster.lastName.substring(0, 1) + ".";
  }

  render() {
    let post = this.state.post;
    return <section className="post">
      <h2 className="sectionHead">
        {post.content.subject}
        <aside>{post.created} by {this._getShortName(post.poster)}</aside>
      </h2>
      <p>{post.content.body}</p>
    </section>
  }
}