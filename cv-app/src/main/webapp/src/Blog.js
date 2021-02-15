import React from "react";
import BLOGRest from "./scripts/blog-rest";
import BlogPost from "./components/blog/Blogpost";

export default class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {blogPosts: []}
  }

  componentDidMount() {
    BLOGRest.fetchPosts().then((posts) => {
      this.setState({blogPosts: posts})
    });
  }

  render() {
    return (
        <main id="blog">
          <h1>Blog</h1>
          {this.state.blogPosts.map(p => <BlogPost key={p.id} post={p}/>)}
        </main>
    );
  }
}