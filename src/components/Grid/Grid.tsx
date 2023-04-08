import React from 'react';
import styled from "styled-components";
import GridItem from './GridItem';
import { APIResponsePost, APIResponse } from '../../types/types'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

const Grid = (props: APIResponse) => {
  return (
    <BlogGridContainer>
      {props.posts.map((post: APIResponsePost) => {
        return (
          <GridItem
            key={post.id}
            title={post.title}
            image={`${BASE_URL}${post.cover.url}`}
            excerpt={post.excerpt}
            imgAlt={post.cover.alternativeText}
            link="#"
          />
        )
      }
      )}
    </BlogGridContainer>
  );
}


const BlogGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
`;

export default Grid;
