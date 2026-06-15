import type { RouteConfig } from '@react-router/dev/routes';
import { index, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('users', [
    index('routes/users/index.tsx'),
  ]),
  route('dashboard', 'routes/dashboard/layout.tsx', [
    index('routes/dashboard/index.tsx'),
    route('settings', 'routes/dashboard/settings.tsx'),
  ]),
] satisfies RouteConfig;
