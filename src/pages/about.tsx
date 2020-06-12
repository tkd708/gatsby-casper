import React from 'react';
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

const About: React.FC = () => (
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
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>The portfolio website of Naoya Takeda</h5>
                <p> Sustainable Agriculture</p>
                <p>
                  Agriculture is an essential industry to supply foods around the world. However the
                  resource use efficiency must be improved to achieve sufficient agricultural
                  production under resource-limited conditions and to reduce environmental impacts.
                </p>
                <p> Data Analysis</p>
                <p>
                  Data is being accumulated more rapidly from diverse sections and analytical
                  methodolosies have been developed as well. I want to extract information from the
                  massive data using data visualisation, statistical analysis, modelling and
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

export default About;
