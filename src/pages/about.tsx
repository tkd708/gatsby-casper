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

const AboutPage: React.FC<AboutProps> = props => {
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
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
