import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import Pagination from '../components/Pagination';
import { PostCard } from '../components/PostCard';
import { StripeSection } from '../components/StripeSection';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts/';
import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteArchiveHeader,
  SiteNavMain,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteHeaderBackgroundImg,
  SiteMain,
  SiteTitle,
  SiteHeaderStyles,
  FeedTitle,
} from '../styles/shared';
import config from '../website-config';
import { PageContext } from './post';

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexProps> = props => {
  const { width, height } = props.data.header.childImageSharp.fixed;

  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && (
          <meta name="google-site-verification" content={config.googleSiteVerification} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width.toString()} />
        <meta property="og:image:height" content={height.toString()} />
      </Helmet>
      <Wrapper>
        <div
          css={[SiteHeaderBackgroundImg]}
          className="site-header-background"
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fixed.src}')`,
          }}
        >
          <div css={[outer, SiteNavMain]}>
            <SiteNav isHome={false} />
          </div>
          <SiteHeaderContent className="site-header-conent">
            <SiteTitle className="site-title" css={IndexTitle}>
              {props.data.logo ? (
                <img
                  css={Logo}
                  src={props.data.logo.childImageSharp.fixed.src}
                  alt={config.title}
                />
              ) : (
                config.title
              )}
            </SiteTitle>
            <SiteDescription>{config.description}</SiteDescription>
          </SiteHeaderContent>
        </div>
        <StripeSection
          image={props.data.stripe1.childImageSharp.fixed.src}
          title="About"
          description="The personal website of Naoya Takeda, a Ph.D. candidate at Queensland University of Technology (Brisbane, Australia) from Japan."
          link="about"
          side="row"
          titleBackColor="black"
        />
        {/* 
        <StripeSection
          image={props.data.stripe2.childImageSharp.fixed.src}
          title="Research"
          description="Research in Agricultural and Environmental sciences, consisting of field experiments as well as modelling and simulation analyses. Experiences in rice (Japan and Colombia) and sugarcane (Australia) cropping systems."
          link="research"
          side="row-reverse"
          titleBackColor="black"
        />
        <StripeSection
          image={props.data.stripe3.childImageSharp.fixed.src}
          title="Software"
          description="Software development with R statistical software, React (web site and web application) and React Native (with Expo for mobile application)"
          link="software"
          side="row"
          titleBackColor="black"
        />
        */}
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={[inner, Posts]}>
            <p css={FeedTitle}>Latest stories</p>
            <div css={[PostFeed]}>
              {props.data.allMarkdownRemark.edges.slice(0, 4).map((post, index) => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} large={index === 0} />
                  )
                );
              })}
            </div>
          </div>
        </main>
        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export const pageQuery = graphql`
  query indexPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/logo_initial2.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/blog-index.jpg" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stripe1: file(relativePath: { eq: "img/person5.jpg" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stripe2: file(relativePath: { eq: "img/ibague_field2.jpg" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stripe3: file(relativePath: { eq: "img/CIAT.JPG" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            draft
            excerpt
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fluid(quality: 100, srcSetBreakpoints: [40, 80, 120]) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;

const Logo = css`
  height: 180px;

  @media (max-width: 800px) {
    height: 120px;
  }

  @media (max-width: 500px) {
    height: 80px;
  }
`;

const IndexTitle = css`
  margin-top: -5vh;
  margin-bottom: -5vh;

  @media (max-width: 800px) {
    margin-top: -5vh;
    margin-bottom: -3vh;
  }

  @media (max-width: 500px) {
    margin-top: -10vh;
    margin-bottom: -3vh;
  }
`;

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card-large {
      flex: 1 1 100%;
      flex-direction: row;
      padding-bottom: 40px;
      min-height: 280px;
      border-top: 0;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large:not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-large .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-large .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-large .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

export default IndexPage;
