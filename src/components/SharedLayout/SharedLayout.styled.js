import styled from "styled-components";

export const Header = styled.header`
padding:20px 0;
border-bottom: 1px solid black;
`

export const SiteNav = styled.nav`
display: flex;
gap: 20px;

.nav-link.active {
    color: red;
}
`
export const Container = styled.div`
margin-inline: auto;
max-width: 1200px;
padding: 0 15px;
`