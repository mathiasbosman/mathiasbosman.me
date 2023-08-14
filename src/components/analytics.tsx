/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */
import type { PropsWithoutRef, ReactNode } from "react";
import { useEffect } from "react";

interface Props {
  endpoint: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export const Analytics = (props: PropsWithoutRef<Props>): ReactNode => {
  useEffect(() => {
    const _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    const d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = props.endpoint;
    if (!s.parentNode) {
      throw new Error("Could not find parent node of script");
    }
    s.parentNode.insertBefore(g, s);
  }, [props.endpoint]);

  return null;
};
