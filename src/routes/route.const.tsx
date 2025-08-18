import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/Home'));
const Foods = lazy(() => import('../pages/Foods'));
const Food = lazy(() => import('../pages/Food'));
const Category = lazy(() => import('../pages/Category'));

export const route: RouteObject[] = [
  {
    path: '/Home',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/Foods',
    element: (
      <Layout>
        <Foods />
      </Layout>
    ),
  },
  {
    path: '/Food/:id',
    element: (
      <Layout>
        <Food />
      </Layout>
    ),
  },
  {
    path: '/Category',
    element: (
      <Layout>
        <Category />
      </Layout>
    ),
  },
];
