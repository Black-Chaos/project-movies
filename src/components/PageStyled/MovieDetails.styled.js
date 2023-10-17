import styled from "styled-components";

export const MovieWrapp = styled.div`
margin-top: 20px;
margin-bottom: 20px;
display: flex;
`

export const Thumb = styled.div`
  min-width: 300px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
padding: 40px;
display: grid;
`;

export const AdditionalInfo = styled.div`
padding: 20px;
display: grid;
gap: 20px;

ul {
    display: grid;
    gap: 12px;
    list-style: circle;
    color: blue;
}

.info-link:hover {
    color: black;
}
`;