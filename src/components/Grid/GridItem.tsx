import React from 'react';
import styled from "styled-components";

import { Post } from '../../types/types'

const GridItem = (props: Post) => {
    return (
        <BlogPostContainer>
            <BlogPostImage src={props.image} loading='lazy' alt={props.imgAlt} />
            <BlogPostTitle>{props.title}</BlogPostTitle>
            <BlogPostExcerpt>{props.excerpt}</BlogPostExcerpt>
            <BlogPostLink href={props.link}>Read more</BlogPostLink>
        </BlogPostContainer>
    );
}

const BlogPostContainer = styled.div`
border: 1px solid #ddd;
border-radius: 4px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
padding: 20px;
margin-bottom: 20px;
`;

const BlogPostImage = styled.img`
width: 100%;
margin-bottom: 10px;
`;

const BlogPostTitle = styled.h2`
font-size: 24px;
margin-bottom: 10px;
`;

const BlogPostExcerpt = styled.p`
font-size: 16px;
margin-bottom: 10px;
`;

const BlogPostLink = styled.a`
display: block;
font-size: 16px;
text-align: right;
`;

export default GridItem;
