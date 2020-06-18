import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

export interface StripeProps {
  image: string;
  title: string;
  description: string;
  link: string;
  side: string;
}

export const StripeSection: React.FC<StripeProps> = ({ image, title, description, link, side }) => {
  return (
    <div
      css={StripeContainer}
      style={{
        alignItems: `${side}`,
        backgroundImage: `url('${image}')`,
      }}
    >
      <p css={StripeTitle}>{title}</p>
      <div
        css={StripeMask}
        style={{
          alignItems: `${side}`,
        }}
      >
        <p css={StripeDescription}>{description}</p>
        <Link to={`/${link}`} css={StripeLink}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

const StripeContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 50vh;
  width: 100vw;
  z-index: 0;

  :before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -0.1px;
    bottom: -0.1px;
    left: -0.1px;
    right: -0.1px;
    background: inherit;
    filter: grayscale(80%);
  }

  @media (max-width: 800px) {
    height: 40vh;
  }
`;

const StripeMask = css`
  display: flex;
  flex-direction: column;
  justifycontent: 'space-between';
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;

  :hover {
    opacity: 1;
    padding-top: 10vh;
  }

  @media (max-width: 800px) {
    :hover {
      opacity: 1;
      padding-top: 7vh;
    }
  }
`;

const StripeTitle = css`
  margin: 5vh 5vw;
  font-size: 7.5rem;
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: underline;
  color: white;

  @media (max-width: 800px) {
    font-size: 4rem;
  }
`;

const StripeDescription = css`
  margin: 3vh 5vw;
  font-size: 3.5rem;
  font-family: 'Times New Roman', Times, serif;
  line-height: 1.3;
  color: white;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

const StripeLink = css`
  margin: 3vh 5vw;
  font-size: 3.5rem;
  font-family: 'Times New Roman', Times, serif;
  color: white;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
