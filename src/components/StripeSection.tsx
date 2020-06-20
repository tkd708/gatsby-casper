import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

export interface StripeProps {
  image: string;
  title: string;
  description: string;
  link: string;
  side: string;
  titleBackColor: string;
}

export const StripeSection: React.FC<StripeProps> = ({
  image,
  title,
  description,
  link,
  side,
  titleBackColor,
}) => {
  return (
    <div css={StripeContainer} style={{ flexDirection: `${side}` }}>
      <div css={StripeTitleContainer} style={{ backgroundColor: `${titleBackColor}` }}>
        <p css={StripeTitle}>{title}</p>
      </div>
      <div
        css={StripeImage}
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div css={StripeMask}>
          <p css={StripeDescription}>{description}</p>
          <Link to={`/${link}`} css={StripeLink}>
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

const StripeContainer = css`
  display: flex;
  position: relative;
  height: 50vh;
  width: 100vw;
  z-index: 0;

  @media (max-width: 800px) {
    height: 40vh;
  }
`;

const StripeTitleContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 30vw;
  z-index: 0;
  opacity: 0.7;

  @media (max-width: 800px) {
    height: 40vh;
  }
`;

const StripeTitle = css`
  align-self: center;
  margin: 5vh 5vw;
  font-size: 6rem;
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: underline;
  color: white;

  @media (max-width: 800px) {
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const StripeImage = css`
  display: flex;
  flex-direction: column;
  position: relative;
  background-size: cover;
  background-position: center top;
  height: 100%;
  width: 70vw;
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
    padding-top: 3vh;
  }

  @media (max-width: 800px) {
    :hover {
      opacity: 1;
      padding-top: 2vh;
    }
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

  @media (max-width: 500px) {
    font-size: 1.5rem;
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
