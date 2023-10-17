import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid gray;

  a {
    padding: 8px;
    display: grid;
    gap: 8px;
  }

  .thumb {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
