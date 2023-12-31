import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthPage } from '@/pages/auth';
import { MainPage } from '@/pages/main';
import { PrivateRoute } from '@/shared/lib';
import { AppRoute } from '@/const';

const NotFoundPage = lazy(() => import('@/pages/error/notFound'));

export function AppRouter() {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Auth} element={<AuthPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}
