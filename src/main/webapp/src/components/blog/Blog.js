import React from "react";
import "../../styles/blog.scss";
import BLOGRest from "../../scripts/blog-rest";
import BlogPost from "./Blogpost";
import Banner from "../Header";
import {
  Avatar,
  BorderBox,
  Box,
    Text,
  Flex,
  Heading,
  Link,
  Pagehead
} from "@primer/components";
import {theme} from "@primer/components/lib/theme-preval";
import {LAYOUT_WIDTH} from "../../Constants";
import "@primer/css/utilities/index.scss";

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
        <>
          <Banner/>
          <BorderBox boxShadow={theme.shadows.medium} backgroundColor="white"
                     maxWidth={LAYOUT_WIDTH} mx="auto" my={3} p={3}
                     as="main">
            <Pagehead flexGrow={1} px={3}>
              <Heading as="h1">
                Mathias Bosman // Blog
              </Heading>
            </Pagehead>

            <section>
              <Flex as="article">
                <Box flexGrow={1}>
                  <Link href="#" className="text-mono" color="gray.5" muted>
                    <time dateTime="2021-02-25">February 25, 2021</time>
                  </Link>
                </Box>
                <Box flexGrow={3}>
                  <Flex as="ul" mb={3} className="list-style-none text-mono categories">
                    <li><Link muted href="#">category 1</Link></li>
                    <li><Link muted href="#">category 2</Link></li>
                  </Flex>
                  <Heading as="h4" fontSize={3} mb={3}>Title of the blog post yo</Heading>
                  <Box>
                    <p>Here's some text bro! Change this to paragraph</p>
                  </Box>
                  <Link href="#" muted className="author">
                    <Flex alignItems="center">
                    <Avatar src="/assets/images/avatar.webp" size={35} mr={3}/>
                    <Text>Mathias B.</Text>
                    </Flex>
                  </Link>
                </Box>
              </Flex>
            </section>

            <section>
              {this.state.blogPosts.map(p => <BlogPost key={p.id} post={p}/>)}
            </section>
          </BorderBox>
        </>
    );
  }
}