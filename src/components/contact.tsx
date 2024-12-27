import type { ReactElement } from 'react';
import { useState } from 'react';
import { sendEmail } from '@shared/utils.ts';
import { CONTACT_EMAIL } from '@/constants.ts';

export const Contact = (): ReactElement => {
  const [subject, setSubject] = useState('');

  return (
    <>
      <h2 className={'flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <span className={'ml-3'}>Contact me</span>
      </h2>
      <p className={'mt-2 text-sm text-zinc-600 dark:text-zinc-400'}>
        Fill in a short question line and send me an email.
      </p>
      <div className={'mt-6 flex'}>
        <label htmlFor={'subject-input'} className={'sr-only'}>
          Fill in your question subject
        </label>
        <input
          type={'text'}
          placeholder={'Your subject'}
          aria-label={'Your subject'}
          id={'subject-input'}
          onChange={(event) => {
            setSubject(event.target.value);
          }}
          required={true}
          maxLength={30}
          className={
            'min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10'
          }
        />
        <button
          className={
            'ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
          }
          onClick={() => {
            sendEmail(CONTACT_EMAIL, subject);
          }}
        >
          Contact me
        </button>
      </div>
    </>
  );
};
