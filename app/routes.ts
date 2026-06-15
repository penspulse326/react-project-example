import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('dashboard', 'routes/dashboard/layout.tsx', [
    index('routes/dashboard/index.tsx'),
    route('settings', 'routes/dashboard/settings.tsx'),
  ]),
] satisfies RouteConfig;
