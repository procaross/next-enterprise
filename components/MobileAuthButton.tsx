'use client'
import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const AuthButton = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className='flex items-center'>
      <div className='w-full'>
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