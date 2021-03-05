import React from "react";
import {Avatar, Box, Flex, Heading, Link, Text} from "@primer/components";
import AbbrName from "../AbbrName";

export default class BlogPostExcerpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: props.post}
  }

  render() {
    let post = this.state.post;
    return <section>
      <Flex as="article" className="flexWrapper" my={4}>
        <Box flexGrow={1}>
          <Link href="#" className="text-mono" color="gray.5" muted>
            <time dateTime={post.date}>todo ex: (February 25, 2021)</time>
          </Link>
        </Box>
        <Box flexGrow={3}>
          <Flex as="ul" mb={3} className="list-style-none text-mono categories">
            <li><Link muted href="#">todo</Link></li>
            <li><Link muted href="#">todo</Link></li>
          </Flex>
          <Heading as="h4" fontSize={3} mb={3}>{post.subject}</Heading>
          <Box><p>{post.excerpt}</p></Box>
          <Link href="#" className="author" fontSize={1} color="gray.6">
            <Flex as="aside" alignItems="center">
              <Avatar src="/assets/images/avatar.webp" size={35} mr={3}/>
              <Text>
                <AbbrName firstName={post.poster.firstName} lastName={post.poster.lastName} />
              </Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </section>
  }
}