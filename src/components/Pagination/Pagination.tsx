import React from 'react';
import styled from 'styled-components';
import { PaginationProps } from '../../types/types'

const Pagination = (props: PaginationProps) => {

  const handleClick = (page: number) => {
    props.onPageChange(page);
  };


  return (
    <PaginationContainer>
      <PaginationButton onClick={() => handleClick(props.currentPage - 1)}>
        Previous
      </PaginationButton>
      <PaginationButton onClick={() => handleClick(props.currentPage + 1)}>
        Next
      </PaginationButton>
    </PaginationContainer>
  );
}


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;
  margin: 0 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export default Pagination;