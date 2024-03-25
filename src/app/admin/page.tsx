'use client';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebase';
import { useEffect, useState } from 'react';

export default function Login() {
  const [user, setUser] = useState<any>();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const auth = getAuth(app);

    await signInWithEmailAndPassword(
      auth,
      (document.getElementById('email')! as HTMLInputElement).value,
      (document.getElementById('password')! as HTMLInputElement).value
    );
  };

  useEffect(() => {
    const auth = getAuth(app);

    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return (
      <section className='bg-colors-background-50 pt-[12rem] mobile:pt-20'>
        <div className='md:h-screen lg:py-0 flex flex-col items-center justify-center px-6 py-8'>
          <div className='bg-secondary-100 border-primary-900 sm:max-w-md sm:p-8 md:mt-0 md:space-y-6 w-full justify-center space-y-4 rounded-md border p-6'>
            <h1 className='text-text-950 md:text-2xl text-xl font-bold leading-tight tracking-tight'>
              Login
            </h1>
            <form className='md:space-y-6 space-y-4' onSubmit={onSubmit}>
              <div>
                <input
                  type='email'
                  id='email'
                  className='focus:ring-primary-500 border-primary-900 bg-background-50 sm:text-sm w-full rounded-full border p-3 text-gray-900'
                  placeholder='Email'
                />
              </div>
              <div>
                <input
                  type='password'
                  id='password'
                  className='focus:ring-primary-500 border-primary-900 bg-background-50 sm:text-sm w-full rounded-full border p-3 text-gray-900'
                  placeholder='Password'
                />
              </div>
              <button
                type='submit'
                className='bg-primary-900 hover:bg-primary-700 focus:ring-primary-300 w-full rounded-full px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4'
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return <></>
}
