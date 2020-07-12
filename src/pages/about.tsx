import React from 'react';
import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteHeaderContent,
  SiteTitle,
  SiteDescription,
  SiteHeaderBackgroundImg,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import config from '../website-config';
import { colors } from '../styles/colors';

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

export interface AboutProps {
  data: {
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
  };
}

const metaData = {
  url: 'https://naoya-takeda.netlify.app/about',
  title: 'About - Naoya Takeda',
  description: 'About Naoya Takeda, his background, experiences and future plans.',
};

const AboutPage: React.FC<AboutProps> = props => {
  const { width, height } = props.data.header.childImageSharp.fixed;

  return (
    <IndexLayout>
      <Helmet>
        <html lang={config.lang} />
        <title>About</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:site_name" content="Naoya Takeda" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content="https://naoya-takeda.netlify.app/about" />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && (
          <meta name="google-site-verification" content={config.googleSiteVerification} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:url" content={metaData.siteUrl} />
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
        <meta property="og:image:height" content={height.toString()} />{' '}
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <SiteNav isHome={false} />
          </div>
        </header>
        <div
          css={[SiteHeaderBackgroundImg]}
          className="site-header-background"
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fixed.src}')`,
            filter: 'grayscale(100 %)',
          }}
        >
          <SiteHeaderContent className="site-header-conent">
            <SiteTitle className="site-title">About</SiteTitle>
            <SiteDescription>Naoya Takeda</SiteDescription>
          </SiteHeaderContent>
        </div>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h5>The platform integrating activities of Naoya Takeda</h5>
                  <p> Sustainable Agriculture</p>
                  <p>
                    Agriculture is an essential industry to supply foods around the world. However
                    the resource use efficiency must be improved to achieve sufficient agricultural
                    production under resource-limited conditions and to reduce environmental
                    impacts.
                  </p>
                  <p> Data Analysis</p>
                  <p>
                    Data is being accumulated more rapidly from diverse sections and analytical
                    methodolosies have been developed as well. I want to extract information from
                    the massive data using data visualisation, statistical analysis, modelling and
                    simulation approaches.
                  </p>
                  <p>Software</p>
                  <p>
                    Development The internet infrastructure and hardwares have been developing fast
                    and enabling a lot more things online. I would like to provide solutions to wide
                    range of social issues by developping software applications.{' '}
                  </p>
                  <p>Languages</p>
                  <p>Languages are still the key to expand the world you can access to...</p>
                  <p>This page will be about my vision, mission and mid-term goals.</p>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    header: file(relativePath: { eq: "img/person5.jpg" }) {
      childImageSharp {
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default AboutPage;
