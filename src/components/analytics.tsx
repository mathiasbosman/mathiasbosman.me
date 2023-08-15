import type { PropsWithoutRef, ReactNode } from "react";
import { useEffect } from "react";

interface Props {
  endpoint: string;
  domain: string;
}

export const PlausibleAnalytics = (
  props: PropsWithoutRef<Props>,
): ReactNode => {
  useEffect(() => {
    const head = document.querySelector("head");
    if (!head) {
      throw new Error("<head> HTMLElement could not be found.");
    }
    const script = document.createElement("script");
    script.src = props.endpoint;
    script.defer = true;
    script.setAttribute("data-domain", props.domain);
    head.appendChild(script);
  });

  return null;
};
