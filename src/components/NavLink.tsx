import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

export function NavLink({ href, icon, children }: NavLinkProps) {
  const isActive = window.location.pathname === href;
  
  return (
    <li>
      <a
        href={href}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
          isActive
            ? 'bg-indigo-50 text-indigo-600'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        {icon}
        <span>{children}</span>
      </a>
    </li>
  );
}