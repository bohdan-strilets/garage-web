import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';

import { CarCarePage } from '@pages/_app/carCare';
import { EnergyPage } from '@pages/_app/energy';
import { GalleryPage } from '@pages/_app/gallery';
import { HomePage } from '@pages/_app/home';
import { AppShellRoute } from '@pages/_app/layout';
import { ProfilePage } from '@pages/_app/profile';
import { ServicesPage } from '@pages/_app/services';
import { SettingsPage } from '@pages/_app/settings';
import { StatisticsPage } from '@pages/_app/statistics';
import { VehiclesPage } from '@pages/_app/vehicles';

const rootRoute = createRootRoute({ component: () => <Outlet /> });
const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: '_app',
  component: AppShellRoute,
});

const homeRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/',
  component: HomePage,
});

const vehiclesRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/vehicles',
  component: VehiclesPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/services',
  component: ServicesPage,
});

const carCareRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/car-care',
  component: CarCarePage,
});

const galleryRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/gallery',
  component: GalleryPage,
});

const energyRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/energy',
  component: EnergyPage,
});

const statisticsRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/statistics',
  component: StatisticsPage,
});

const settingsRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/settings',
  component: SettingsPage,
});

const profileRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/profile',
  component: ProfilePage,
});

export const routeTree = rootRoute.addChildren([
  appRoute.addChildren([
    homeRoute,
    vehiclesRoute,
    servicesRoute,
    carCareRoute,
    galleryRoute,
    energyRoute,
    statisticsRoute,
    settingsRoute,
    profileRoute,
  ]),
]);
