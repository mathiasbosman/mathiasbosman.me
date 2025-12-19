import { useEffect, useState } from 'react';
import type { HTMLImage } from '@shared/utils';
import { shuffleArray } from '@shared/utils';

interface Props {
  images: HTMLImage[];
  amountToShow?: number;
  swapInterval?: number; // in ms
}

export const ImageCarousel = ({ images, amountToShow = 5, swapInterval = 5_000 }: Props) => {
  // shuffle your pool if you like randomness
  const pool = shuffleArray(images);
  const [visible, setVisible] = useState(pool.slice(0, amountToShow));
  const [hidden, setHidden] = useState(pool.slice(amountToShow));

  // holds the “incoming” image for the slot that’s fading
  const [incoming, setIncoming] = useState<{
    slot: number;
    img: HTMLImage;
  } | null>(null);

  useEffect(() => {
    if (!hidden.length) return;

    const ticker = setInterval(() => {
      const slot = Math.floor(Math.random() * visible.length);
      const hidIdx = Math.floor(Math.random() * hidden.length);

      // schedule fade-in of hidden[hidIdx] into slot
      setIncoming({ slot, img: hidden[hidIdx] });

      // after 1s fade, actually swap arrays
      setTimeout(() => {
        setVisible((v) => {
          const copy = [...v];
          copy[slot] = hidden[hidIdx];
          return copy;
        });
        setHidden((h) => {
          const copy = [...h];
          copy.splice(hidIdx, 1);
          copy.push(visible[slot]);
          return copy;
        });
        setIncoming(null);
      }, 1000);
    }, swapInterval);

    return () => clearInterval(ticker);
  }, [hidden, visible, swapInterval]);

  return (
    <div className="mt-8 flex justify-center gap-4 overflow-hidden py-4 sm:mt-16 sm:gap-8">
      {visible.map((img, i) => {
        const rot = i % 2 === 0 ? '-rotate-2' : 'rotate-2';

        return (
          <div
            key={i}
            className={`
              ${rot}
              relative aspect-[5/10] w-24 flex-none overflow-hidden
              rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-36
              sm:rounded-2xl lg:aspect-[9/10] lg:w-72
            `}
          >
            {/* always show the “current” image underneath */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* when this slot is chosen, layer the incoming image on top,
                and let Tailwind animate its opacity */}
            {incoming?.slot === i && (
              <img
                src={incoming.img.src}
                alt={incoming.img.alt}
                className="
                  absolute inset-0 h-full w-full animate-fade-in
                  object-cover opacity-0
                "
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageCarousel;
