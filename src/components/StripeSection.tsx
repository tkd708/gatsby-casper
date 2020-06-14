import React from 'react';
import { css } from '@emotion/core';

export interface StripeProps {
  image: string;
  title: string;
  description: string;
}

export const StripeSection: React.FC<StripeProps> = ({ image, title, description }) => {
  return (
    <div
      css={StripeContainer}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <p css={StripeTitle}>{title}</p>
      <p css={StripeDescription}>{description}</p>
    </div>
  );
};

const StripeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-size: cover;
  height: 50vh;
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

const StripeTitle = css`
  margin: 3vh;
  font-size: 2rem;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: underline;

  display: float;
  :hover {
    opacity: 0.5;
  }

  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

const StripeDescription = css`
  opacity: 0.3;
  transform: translateY(100%);
  transition: opacity 0.6s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: hidden;

  @media (max-width: 500px) {
    font-size: 1.8rem;
  }

  .FeatureImage:hover + {
    opacity: 0.8;
    transform: none;
  }
`;
