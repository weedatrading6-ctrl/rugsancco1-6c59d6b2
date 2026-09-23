import { useState, type ImgHTMLAttributes } from "react";

import type { RugsanMediaItem } from "@/lib/rugsan-media";

type RugsanMediaProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  media: RugsanMediaItem;
  alt?: string;
};

export function RugsanMedia({ media, alt, className = "", onError, ...props }: RugsanMediaProps) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <img
      {...props}
      src={media.src}
      alt={alt ?? media.alt}
      className={`${media.imageClassName ?? ""} ${className} ${unavailable ? "media-unavailable" : ""}`.trim()}
      onError={(event) => {
        setUnavailable(true);
        onError?.(event);
      }}
    />
  );
}