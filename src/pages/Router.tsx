import { Route, Routes } from 'react-router-dom';
import { routerType } from '../types/router.types';
import pagesData from './pagesData';

const Router = () => {
  const pagesRoutes = pagesData.map(({ path, title, element }: routerType) => (
    <Route key={title} path={`/${path}`} element={element} />
  ));

  return <Routes>{pagesRoutes}</Routes>;
};

export default Router;
