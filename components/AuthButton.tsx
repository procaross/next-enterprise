'use client'
import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const AuthButton = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className='ml-auto flex items-center'>
      <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 lg:ml-10'>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className={buttonVariants({
              variant: 'ghost',
            })}
          >
            Log Out
          </button>
        ) : (
          <Link href='/sign-in' className={buttonVariants({
            variant: 'ghost',
          })}>
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthButton;