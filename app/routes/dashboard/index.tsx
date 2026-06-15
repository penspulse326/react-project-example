import { Link, Outlet } from 'react-router';

export default function DashboardIndexPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Dashboard Index</h1>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/" className="font-semibold underline transition-colors">
          Back to Home
        </Link>
        <Link to="./settings" className="font-semibold underline transition-colors">
          Settings
        </Link>
      </div>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}
