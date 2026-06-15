import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-900 font-sans text-white">
      <div className="space-y-4 text-center">
        <Outlet />
      </div>
    </main>
  );
}
