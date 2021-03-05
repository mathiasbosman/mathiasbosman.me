import React from "react";
import "../styles/blog.scss";
import BLOGRest from "../scripts/blog-rest";
import BlogPostExcerpt from "../components/blog/BlogPostExcerpt";
import Banner from "../components/Header";
import {BorderBox, Heading, Pagehead} from "@primer/components";
import {theme} from "@primer/components/lib/theme-preval";
import {LAYOUT_WIDTH} from "../Constants";
import "@primer/css/utilities/index.scss";
import Footer from "../components/Footer";
import DocTitle from "../components/DocTitle";

export default class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {blogPosts: []}
    this._renderPosts = this._renderPosts.bind(this);
  }

  componentDidMount() {
    BLOGRest.fetchPosts().then((posts) => {
      this.setState({blogPosts: posts})
    });
  }

  _renderPosts() {
    if (this.state.blogPosts) {
      return this.state.blogPosts.map(
          p => <BlogPostExcerpt key={p.id} post={p}/>)
    }
    return null;
  }

  render() {
    return (
        <>
          <DocTitle subTitle="Blog"/>
          <Banner/>
          <BorderBox boxShadow={theme.shadows.medium} backgroundColor="canvas"
                     maxWidth={LAYOUT_WIDTH} mx="auto" my={3} p={3}
                     as="main">
            <Pagehead flexGrow={1}>
              <Heading fontSize={3} className="text-mono" as="h1">
                Mathias' Blog
              </Heading>
            </Pagehead>
            <section>
              {this._renderPosts()}
            </section>
            <Footer/>
          </BorderBox>
        </>
    );
  }
}