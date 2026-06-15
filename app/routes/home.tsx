import { Link } from 'react-router';

export function meta() {
  return [
    { title: 'React Project Template' },
    { name: 'description', content: 'React Project Template' },
  ];
}

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 font-sans text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          React Project Template
        </h1>

        <p className="text-lg text-slate-400">
          這是使用 React Router v7 建立的基礎頁面
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/users" className="font-semibold underline transition-colors">
            Users
          </Link>
          <Link to="/dashboard" className="font-semibold underline transition-colors">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
