import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { NotFound } from "pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import('components/Reviews/Reviews'))

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};
