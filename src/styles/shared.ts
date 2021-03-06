import { lighten } from 'polished';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from './colors';

export const outer = css`
  position: relative;
  padding: 0 5vw;
`;

// Centered content container blocks
export const inner = css`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  /* background: color(var(--darkgrey) l(-5%)); */
  background: ${lighten('-0.05', colors.darkgrey)};
`;

export const SiteMain = css`
  z-index: 100;
  flex-grow: 1;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

export const SiteTitle = styled.h1`
  z-index: 150;
  padding: 0;
  font-size: 7rem;
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;
  
  .site-title-underline{
      line-height: 1em;
      text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 4rem;
  }
`;

export const SiteDescription = styled.h2`
  z-index: 150;
  margin-top: 3vh;
  padding: 5px 0;
  font-size: 5rem;
  font-family: 'Times New Roman', Times, serif;
  line-height: 1.4em;
  font-weight: 300;

  @media (max-width: 800px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const Posts = css`
  overflow-x: hidden;
`;

export const PostFeed = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 50px 0 0;
  background: #fff;

  /* Special Template Styles */
  padding: 40px 0 5vw;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

export const SocialLink = css`
  display: inline-block;
  margin: 0;
  padding: 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  svg {
    height: 1.8rem;
    fill: #fff;
  }
`;

export const SocialLinkFb = css`
  svg {
    height: 1.6rem;
  }
`;

export const SiteHeader = css``;

export const SiteHeaderContent = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 25vh;

    .site-title-black {
    color: black;   
  }

  @media (max-width: 800px) {
    margin-top: 15vh 1vw;
  }

  @media (max-width: 500px) {
    margin-top: 10vh 1vw;
  }
`;

export const SiteHeaderBackgroundImg = css`
  height: 100vh;
  background-size: cover;

  @media (max-width: 800px) {
    height: 80vh;
    background-position: center center;
  }

  @media (max-width: 500px) {
    height: 60vh;
    background-position: center center;
  }
`;

export const SiteHeaderStyles = css`
  position: relative;
  /* margin-top: 64px; */
  padding-bottom: 12px;
  color: #fff;
  /* background: color(var(--darkgrey) l(-5%)) no-repeat center center; */
  background: ${lighten('-0.05', colors.darkgrey)} no-repeat center center;
  background-size: cover;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: block;
    background: rgba(0, 0, 0, 0.18);
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    z-index: 10;
    display: block;
    height: 140px;
    background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
  }

  @media (prefers-color-scheme: dark) {
    :before {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const AuthorProfileImage = css`
  flex: 0 0 60px;
  margin: 0;
  width: 60px;
  height: 60px;
  border: none;

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 0 0 6px hsla(0, 0%, 100%, 0.04);
    background: ${colors.darkmode};
  }
`;

// tag and author post lists
export const SiteArchiveHeader = css`
  .site-header-content {
    position: relative;
    align-items: stretch;
    padding: 12vw 0 20px;
    min-height: 200px;
    max-height: 600px;
  }
`;

export const SiteHeaderBackground = css`
  margin-top: 64px;
`;

export const ResponsiveHeaderBackground = styled.div<{ backgroundImage?: string }>`
  ${p =>
    p.backgroundImage &&
    `
    position: relative;
    margin-top: 64px;
    padding-bottom: 12px;
    color: #fff;
    background-size: cover;
    /* background: color(var(--darkgrey) l(-5%)) no-repeat center center; */
    background: #090a0b no-repeat 50%;
    background-image: url(${p.backgroundImage});

    :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      display: block;
      background: rgba(0, 0, 0, 0.18);
    }

    :after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: auto;
      left: 0;
      z-index: 10;
      display: block;
      height: 140px;
      background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    }

    @media (prefers-color-scheme: dark) {
      &:before {
        background: rgba(0, 0, 0, 0.6);
      }
    }
  `}

  ${p =>
    !p.backgroundImage &&
    `

    padding-top: 0;
    padding-bottom: 0;
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
    background: #fff;
    opacity: 1;


  .site-description {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .site-header-content {
    padding: 5vw 0 10px;
    /* border-bottom: 1px solid color(var(--lightgrey) l(+12%)); */
    border-bottom: 1px solid ${lighten('0.12', colors.lightgrey)};
  }

  .author-bio {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .author-meta {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .author-social-link a {
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
  }

  .author-social-link a:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  .author-location + .author-stats:before,
  .author-stats + .author-social-link:before,
  .author-social-link + .author-social-link:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  .author-header {
    padding-bottom: 20px;
  }

  @media (max-width: 500px) {
    .site-header-content {
      flex-direction: column;
      align-items: center;
      min-height: unset;
    }

    .site-title {
      font-size: 4.2rem;
      text-align: center;
    }

    .site-header-content {
      padding: 12vw 0 20px;
    }

    .author-header {
      padding-bottom: 10px;
    }
  }
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
    /* background: var(--darkmode); */
    background: ${colors.darkmode};

    .site-header-content {
      /* border-bottom-color: color(var(--darkmode) l(+15%)); */
      border-bottom-color: ${lighten('0.15', colors.darkmode)};
    }

    .author-social-link a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
  `}
`;

export const NoImage = css`
  .no-image {
    padding-top: 0;
    padding-bottom: 0;
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
    background: #fff;
    opacity: 1;
  }

  .no-image .site-description {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .no-image .site-header-content {
    padding: 5vw 0 10px;
    /* border-bottom: 1px solid color(var(--lightgrey) l(+12%)); */
    border-bottom: 1px solid ${lighten('0.12', colors.lightgrey)};
  }

  .no-image .author-bio {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .no-image .author-meta {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    opacity: 1;
  }

  .no-image .author-social-link a {
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
  }

  .no-image .author-social-link a:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  .no-image .author-location + .author-stats:before,
  .no-image .author-stats + .author-social-link:before,
  .no-image .author-social-link + .author-social-link:before {
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
  }

  @media (max-width: 500px) {
    .site-header-content {
      flex-direction: column;
      align-items: center;
      min-height: unset;
    }

    .site-title {
      font-size: 4.2rem;
      text-align: center;
    }

    .no-image .site-header-content {
      padding: 12vw 0 20px;
    }
  }
  @media (prefers-color-scheme: dark) {
    .no-image {
      color: rgba(255, 255, 255, 0.9);
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }

    .no-image .site-header-content {
      /* border-bottom-color: color(var(--darkmode) l(+15%)); */
      border-bottom-color: ${lighten('0.15', colors.darkmode)};
    }

    .no-image .author-social-link a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

export const FeatureSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-size: cover;
  width: 100vw;
  z-index: 0;

  :before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    background: inherit;
    filter: grayscale(100%);
  }
`;

export const FeatureSectionTitle = css`
  padding: 0;
  margin: 5vh;
  font-size: 5rem;
  font-family: 'Times New Roman', Times, serif;
  line-height: 1em;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const FeatureList = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
  }
`;

export const FeedTitle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh;
  font-size: 5rem;
  font-family: 'Times New Roman', Times, serif;
  line-height: 1em;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;
