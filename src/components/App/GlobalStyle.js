import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}


img {
  max-width: 100%;
  height: auto;
  display: block;
}

picture {
  display: block;
}

button {
  cursor: pointer;
  border: none;
}


input,
button,
textarea,
select {
  font: inherit;
}


@media only screen and (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

section {
  padding: 40px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}
`;