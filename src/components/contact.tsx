import type { ReactElement } from "react";
import { useState } from "react";
import { sendEmail } from "@shared/utils.ts";
import { CONTACT_EMAIL } from "@/constants.ts";

export const Contact = (): ReactElement => {
  const [subject, setSubject] = useState("");

  return (
    <>
      <h2
        className={
          "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        }
      >
        <svg
          viewBox={"0 0 24 24"}
          fill={"none"}
          strokeWidth={1.5}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          aria-hidden={true}
          className={"h-5 w-5 flex-none"}
        >
          <path
            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className={
              "fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            }
          ></path>
          <path
            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className={"stroke-zinc-400 dark:stroke-zinc-500"}
          ></path>
        </svg>
        <span className={"ml-3"}>Contact me</span>
      </h2>
      <p className={"mt-2 text-sm text-zinc-600 dark:text-zinc-400"}>
        Fill in a short question line and send me an email.
      </p>
      <div className={"mt-6 flex"}>
        <label htmlFor={"subject-input"} className={"sr-only"}>
          Fill in your question subject
        </label>
        <input
          type={"text"}
          placeholder={"Your subject"}
          aria-label={"Your subject"}
          id={"subject-input"}
          onChange={(event) => {
            setSubject(event.target.value);
          }}
          required={true}
          maxLength={30}
          className={
            "min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 sm:text-sm"
          }
        />
        <button
          className={
            "ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
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
