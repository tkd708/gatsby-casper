import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import { FaSearch } from 'react-icons/fa';
import TextHighlighter from './highlight';
import { Wrapper, ResultWrapper } from './style';

const SearchResult = props => {
  // fetch all article data
  const tempData = useStaticQuery(graphql`
    query SearchData {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              tags
            }
          }
        }
      }
    }
  `);

  const [data, setData] = useState([]);

  useEffect(() => {
    const temp = tempData.allMarkdownRemark.edges.map(e => {
      return { ...e.node.frontmatter, ...e.node.fields };
    });
    setData(temp);
  }, []);

  // switching the appearance
  const [className, setClassName] = useState('');
  useEffect(() => {
    let id;
    if (props.focus && props.value !== '') {
      id = setTimeout(() => {
        setClassName('active');
      }, 100);
    } else {
      id = setTimeout(() => {
        setClassName('');
      }, 100);
    }
    return () => {
      clearTimeout(id);
    };
  }, [props.focus, props.value]);

  // handling the results
  const [result, setResult] = useState([]);
  const search = () => {
    const value = props.value.toLowerCase();
    const temp = data.filter(
      e =>
        e.title.toLowerCase().includes(value) ||
        (e.tags && e.tags.map(e => e.toLowerCase()).includes(value)),
    );
    setResult(temp);
  };
  useEffect(() => {
    props.value && search();
  }, [props.value]);

  return (
    <ResultWrapper className={className}>
      <div className="result-inner">
        <span className="res">
          <b>{result.length}</b> hits
        </span>
        <ul>
          {result.map(e => (
            <li key={e.slug}>
              <Link to={`/${e.slug}/`}>
                <TextHighlighter str={e.title} includes={props.value} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ResultWrapper>
  );
};

// arrow function --> at every rendering --> consume memory
const Search = props => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  return (
    <Wrapper className={props.className} focus={focus}>
      <FaSearch />
      <input
        type="text"
        placeholder="Search..."
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={e => setValue(e.target.value)}
      />
      <SearchResult focus={focus} value={value} />
    </Wrapper>
  );
};

export default Search;
