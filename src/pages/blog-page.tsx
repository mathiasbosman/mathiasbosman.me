import type { ReactElement } from "react";
import Page from "@components/common/page.tsx";
import ContentWrapper from "@components/common/content-wrapper.tsx";
import SectionWrapper from "@components/common/section-wrapper.tsx";
import PageTitle from "@components/typography/page-title.tsx";
import Markdown from 'react-markdown';

const post = `# Title goes here

paragraph with **bold** text
`;

export const BlogPage = (): ReactElement => {
  return (
    <Page title="Blog - Mathias Bosman" renderAvatar={true}>
      <ContentWrapper>
        <SectionWrapper>
          <PageTitle title={"# Blog"} />
          <div className={"mt-6"}>
          <article className={"prose dark:prose-invert"}>

            <Markdown>{post}</Markdown>
          </article>
          </div>
        </SectionWrapper>
      </ContentWrapper>
    </Page>
  );
};

export default BlogPage;
