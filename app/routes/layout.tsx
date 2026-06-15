import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-100 font-sans text-slate-800">
      <div className="space-y-4 text-center">
        <Outlet />
      </div>
    </main>
  );
}
