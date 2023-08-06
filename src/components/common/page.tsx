import Footer from "./footer.tsx";
import Navigation from "./navigation/navigation.tsx";
import { publicPages } from "@/models/config/navigation.config.tsx";
import { Link, useLocation } from "react-router-dom";
import type { PropsWithChildren, ReactElement } from "react";
import { useEffect } from "react";
import Avatar, { AvatarSize } from "@components/avatar.tsx";

import avatar from "@assets/images/mathias.webp";

interface Props {
  title?: string;
  renderAvatar: boolean;
}

export const Page = (props: PropsWithChildren<Props>): ReactElement => {
  useEffect(() => {
    if (props.title != null) {
      document.title = props.title;
    }
  }, [props.title]);

  return (
    <main
      id="mainBoxy"
      className={"flex h-full flex-col bg-zinc-50 antialiased dark:bg-black"}
    >
      <div className="z-20 h-1 bg-gradient-to-r from-violet-500 to-pink-700 "></div>
      <div className="fixed inset-0 z-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className={"mx-auto w-full max-w-7xl lg:px-8"}>
        <div className={"relative px-4 sm:px-8 lg:px-12"}>
          <header className={"mx-auto max-w-2xl lg:max-w-5xl"}>
            <Navigation
              leftSlot={
                props.renderAvatar && (
                  <Link
                    aria-label={"Home"}
                    className={"pointer-events-auto inline-block"}
                    to={"/"}
                  >
                    <Avatar
                      image={{
                        src: avatar,
                        alt: "Avatar",
                      }}
                      size={AvatarSize.xs}
                    />
                  </Link>
                )
              }
              links={publicPages}
              location={useLocation().pathname}
            />
          </header>
        </div>
      </div>
      {props.children}
      <Footer links={publicPages} />
    </main>
  );
};

export default Page;
