import React from 'react';
import { css } from '@emotion/core';

export interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

export const Feature: React.FC<FeatureProps> = ({ image, title, description }) => {
  return (
    <div>
      <div css={FeatureContainer}>
        <img css={FeatureImage} src={image} />
        <div css={FeatureMask}>
          <p css={FeatureDescription}>{description}</p>
        </div>
      </div>
      <p css={FeatureTitle}>{title}</p>
    </div>
  );
};

const FeatureContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
    height: 50vh;
  }
`;

const FeatureImage = css`
  background-size: cover;
  height: 80%;
  width: 80%;
`;

const FeatureMask = css`
  width: 80%;
  height: 80%;
  position: absolute;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;

  :hover {
    opacity: 1;
    padding-top: 5vh;
  }
`;

const FeatureTitle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 3vh;
  font-size: 3rem;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: underline;

  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

const FeatureDescription = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  margin: 1vh;
  font-size: 2rem;
  font-family: 'Times New Roman', Times, serif;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
