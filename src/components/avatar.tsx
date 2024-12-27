import type { PropsWithChildren, ReactElement } from 'react';
import type { HTMLImage } from '@shared/utils.ts';

export enum AvatarSize {
  xs = 9,
  s = 16,
}

interface Props {
  image: HTMLImage;
  size: AvatarSize;
}

export const Avatar = (props: PropsWithChildren<Props>): ReactElement => {
  function _renderImage(): ReactElement {
    return (
      <img
        alt={props.image.alt}
        decoding={'async'}
        src={props.image.src}
        style={{ color: 'transparent' }}
        className={'aspect-square w-full rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'}
      />
    );
  }

  switch (props.size) {
    case AvatarSize.s:
      return (
        <div
          className={
            'h-16 w-16 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
          }
        >
          {_renderImage()}
        </div>
      );
    case AvatarSize.xs:
      return (
        <div
          className={
            'h-9 w-9 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
          }
        >
          {_renderImage()}
        </div>
      );
  }
};

export default Avatar;
