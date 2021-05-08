import React, { lazy, Suspense } from "react";
//lazy, Suspense: Giúp load component tối ưu nhất
import { Skeleton } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { isAuthenticated } from "./services/login";

const HomeMovies = lazy(() => import("./pages/home"));
const NewFilmMovies = lazy(() => import("./pages/newFilm"));
const SearchFilmMovies = lazy(() => import("./pages/searchFilm"));
const DetailMoviesPage = lazy(() => import("./pages/detail"));
const Login = lazy(() => import("./pages/login"));

const PrivateRoute = ({children, ...rest}) => {
  const auth = isAuthenticated();
  return <Route {...rest} render={({location}) =>
    auth ? {children} : (
      <Redirect to={{
        pathname: "/login",
        state: {from: location}
      }} />
    )
  }>

  </Route>;
};

const Movies = () => {
  return (
    // <Router>
    //   <Suspense fallback={<Skeleton active />}>
    //     <Switch>
    //       <PrivateRoute path="/home">
    //         <HomeMovies />
    //       </PrivateRoute>
    //       <PrivateRoute path="/newFilm">
    //         <NewFilmMovies />
    //       </PrivateRoute>
    //       <PrivateRoute path="/searchFilm">
    //         <SearchFilmMovies />
    //       </PrivateRoute>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       {/* locahost:3000/movies/ngoi-nha-hanh-phuc~1999 */}
    //       {/*slug~:id: param truyen len url, movie la router */}
    //       <PrivateRoute path="/movies/:slug~:id">
    //         <DetailMoviesPage />
    //       </PrivateRoute>
    //       <PrivateRoute path="/movies">
    //         <HomeMovies />
    //       </PrivateRoute>
    //     </Switch>
    //   </Suspense>
    // </Router>
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/home">
            <HomeMovies />
          </Route>
          <Route path="/newFilm">
            <NewFilmMovies />
          </Route>
          <Route path="/searchFilm">
            <SearchFilmMovies />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* locahost:3000/movies/ngoi-nha-hanh-phuc~1999 */}
          {/*slug~:id: param truyen len url, movie la router */}
          <Route path="/movies/:slug~:id">
            <DetailMoviesPage />
          </Route>
          <Route path="/movies">
            <HomeMovies />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Movies;
