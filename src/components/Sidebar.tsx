import React from 'react';
import { Code2, History, Settings } from 'lucide-react';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="flex items-center space-x-2 px-6 py-4 border-b border-gray-200">
        <Code2 className="h-6 w-6 text-indigo-600" />
        <h1 className="text-xl font-semibold text-gray-900">コードコンバーター</h1>
      </div>
      <nav className="px-4 py-4">
        <ul className="space-y-2">
          <NavLink href="/" icon={<Code2 className="h-5 w-5" />}>
            コンバーター
          </NavLink>
          <NavLink href="/history" icon={<History className="h-5 w-5" />}>
            変換履歴
          </NavLink>
          <NavLink href="/settings" icon={<Settings className="h-5 w-5" />}>
            管理画面
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}