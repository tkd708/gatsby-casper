import { Link } from 'gatsby';
import { darken } from 'polished';
import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../../styles/colors';
import { SubscribeModal } from '../subscribe/SubscribeModal';
import { SiteNavLogo } from './SiteNavLogo';
import { FaBars } from 'react-icons/fa';

import Search from '../search/index';

interface SiteNavProps {
  isHome?: boolean;
  isPost?: boolean;
  post?: any;
}

interface SiteNavState {
  showTitle: boolean;
  showDrawer: boolean;
}

class SiteNav extends React.Component<SiteNavProps, SiteNavState> {
  subscribe = React.createRef<SubscribeModal>();
  titleRef = React.createRef<HTMLSpanElement>();
  lastScrollY = 0;
  ticking = false;
  state = { showTitle: false, showDrawer: false };

  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  componentDidMount(): void {
    this.lastScrollY = window.scrollY;
    if (this.props.isPost) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (!this.titleRef || !this.titleRef.current) {
      return;
    }

    if (!this.ticking) {
      requestAnimationFrame(this.update);
    }

    this.ticking = true;
  };

  update = () => {
    if (!this.titleRef || !this.titleRef.current) {
      return;
    }

    this.lastScrollY = window.scrollY;

    const trigger = this.titleRef.current.getBoundingClientRect().top;
    const triggerOffset = this.titleRef.current.offsetHeight + 35;

    // show/hide post title
    if (this.lastScrollY >= trigger + triggerOffset) {
      this.setState({ showTitle: true });
    } else {
      this.setState({ showTitle: false });
    }

    this.ticking = false;
  };

  toggleHamburger = () => {
    this.setState(
      {
        showDrawer: !this.state.showDrawer,
      },
      () => {
        console.log('drawer on');
      },
    );
  };

  render(): JSX.Element {
    const { isHome = false, isPost = false, post = {} } = this.props;
    return (
      <nav css={SiteNavStyles}>
        <SiteNavLeft className="site-nav-left">
          {!isHome && <SiteNavLogo />}
          <SiteNavContent css={[this.state.showTitle ? HideNav : '']}>
            {/* <div css={[DarkBackground, this.state.showDrawer ? DarkBackgroundOn : '']}> */}
            <ul css={[NavStyles, this.state.showDrawer ? DrawerNav : '']} role="menu">
              {/* TODO: mark current nav item - add class nav-current */}
              <li role="menuitem">
                <Link to="/about">About</Link>
              </li>
              <li role="menuitem">
                <Link to="/research">Research</Link>
              </li>
              <li role="menuitem">
                <Link to="/software">Software</Link>
              </li>
              <li role="menuitem">
                <Link to="/cv">CV</Link>
              </li>
              <li role="menuitem">
                <Link to="/publication">Publication</Link>
              </li>
              <li role="menuitem" css={liSearchBar}>
                <Search css={SearchBar} />
              </li>
            </ul>
            {isPost && (
              <NavPostTitle ref={this.titleRef} className="nav-post-title">
                {post.title}
              </NavPostTitle>
            )}
          </SiteNavContent>
        </SiteNavLeft>
        <SiteNavRight>
          <FaBars css={Hamburger} onClick={() => this.toggleHamburger()} />
        </SiteNavRight>
      </nav>
    );
  }
}

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  /* background: color(var(--darkgrey) l(-5%)) */
  background: ${darken('0.05', colors.darkgrey)};

  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* overflow-y: hidden; */
  height: 64px;
  font-size: 1.3rem;
`;

const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  /* overflow-y: hidden; */
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  margin-left: 5vw;
  padding: 10px 0 80px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;
  -ms-overflow-scrolling: touch;
`;

const SiteNavContent = styled.div`
  position: relative;
  align-self: flex-start;
`;

const NavStyles = css`
  position: absolute;
  z-index: 1000;
  display: flex;
  margin: 0 0 0 0 px;
  padding: 0;
  list-style: none;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  li {
    display: block;
    margin: 0;
    padding: 0;

    @media (max-width: 600px) {
      display: none;
      visibility: none;
    }
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #fff;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
    right: 12px;
    opacity: 0.5;
  }
`;

const SiteNavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  height: 64px;
`;

const Hamburger = css`
  margin-right: 20px;
  color: white;
  font-size: 2em;

  @media (min-width: 600px) {
    display: none;
  }
`;

const liSearchBar = css`
  position: relative;
  flex: 0 1 auto;
  align-self: center;
  justify-self: flex-end;
  margin-left: 50vw;
  padding: 50px 0;
`;

const SearchBar = css`
  margin-right: 20px;

  @media (max-width: 600px) {
  }
`;

const NavPostTitle = styled.span`
  visibility: hidden;
  position: absolute;
  top: 9px;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: none;
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateY(175%);

  .dash {
    left: -25px;
  }

  .dash:before {
    content: '– ';
    opacity: 0.5;
  }
`;

const HideNav = css`
  ul {
    @media (min-width: 600px) {
      visibility: hidden;
      opacity: 0;
      transform: translateY(-175%);
    }
  }

  .nav-post-title {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

const DrawerNav = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  left: 0;
  top: 64px;
  width: 100vw;

  li {
    visibility: visible;
    display: block;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export default SiteNav;
