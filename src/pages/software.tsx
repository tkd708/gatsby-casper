import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostCard } from '../components/PostCard';
import { Feature } from '../components/Feature';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  PostFeed,
  SiteHeader,
  SiteHeaderBackgroundImg,
  SiteHeaderContent,
  SiteHeaderStyles,
  SiteTitle,
  SiteDescription,
  SiteArchiveHeader,
  SiteNavMain,
  SiteMain,
  FeatureSection,
  FeatureSectionTitle,
  FeatureList,
  FeedTitle,
} from '../styles/shared';
import config from '../website-config';
import { NoImage, PostFull, PageContext, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

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

const SoftwarePage: React.FC<IndexProps> = props => {
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
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <div
          //css={[outer, SiteHeaderStyles, SiteHeaderBackgroundImg]}
          css={[SiteHeaderBackgroundImg]}
          className="site-header-background"
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fixed.src}')`,
          }}
        >
          <div css={inner}>
            <SiteHeaderContent className="site-header-conent">
              <SiteTitle className="site-title">SOFTWARE</SiteTitle>
              <SiteDescription>Web & Mobile Applications</SiteDescription>
            </SiteHeaderContent>
          </div>
        </div>
        <div
          css={FeatureSection}
          style={
            {
              //backgroundImage: `url('${props.data.featureBackground.childImageSharp.fixed.src}')`,
            }
          }
        >
          <div css={FeatureSectionTitle}>Programming Languages</div>
          <h3>
            GitHub: <a href="https://github.com/tkd708">tkd708</a>
          </h3>
          <div css={FeatureList}>
            <Feature
              image={props.data.feature1.childImageSharp.fixed.src}
              title="Crop management"
              description="Resource use efficient agronomic practices"
            />
            <Feature
              image={props.data.feature2.childImageSharp.fixed.src}
              title="Soil water & nutrient cycle"
              description="GHG emissions and nutrient leaching"
            />
            <Feature
              image={props.data.feature3.childImageSharp.fixed.src}
              title="Crop modelling and simulation"
              description="Scenario analysis to assess agronomic practices under diverse climate and soil conditions"
            />
          </div>
        </div>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <p css={FeedTitle}>Latest stories</p>
              <div css={[PostFeed]}>
                {props.data.allMarkdownRemark.edges
                  .filter(edge => edge.node.frontmatter.tags[0] === 'Software')
                  .map((post, index) => {
                    // filter out drafts in production
                    return (
                      (post.node.frontmatter.draft !== true ||
                        process.env.NODE_ENV !== 'production') && (
                        <PostCard
                          key={post.node.fields.slug}
                          post={post.node}
                          large={index === 0}
                        />
                      )
                    );
                  })}
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export const softwarePageQuery = graphql`
  query softwarePageQuery {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/software_development.jpg" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    featureBackground: file(relativePath: { eq: "img/software_development.jpg" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    feature1: file(relativePath: { eq: "img/r_logo.png" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    feature2: file(relativePath: { eq: "img/react logo.png" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    feature3: file(relativePath: { eq: "img/react native logo.png" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
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

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
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

export default SoftwarePage;
