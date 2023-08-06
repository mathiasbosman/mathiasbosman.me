import type { PropsWithChildren, ReactElement } from "react";

export const SectionWrapper = (props: PropsWithChildren): ReactElement => {
  return (
    <div className={"relative mt-16 px-2 sm:px-8 lg:px-12"}>
      {props.children}
    </div>
  );
};

export default SectionWrapper;
