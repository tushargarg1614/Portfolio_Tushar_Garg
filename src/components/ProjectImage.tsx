"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectImage({
  src,
  label,
  className = "",
  placeholderText,
  placeholderMark,
  sizes = "(max-width: 650px) 100vw, (max-width: 900px) 45vw, 320px",
}: {
  src: string;
  label: string;
  className?: string;
  placeholderText?: string;
  placeholderMark?: string;
  sizes?: string;
}) {
  const [unavailable, setUnavailable] = useState(false);
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3);

  return (
    <div className={`media-frame ${className}`}>
      {unavailable ? (
        <div
          className="media-placeholder"
          role="img"
          aria-label={`${label} image placeholder`}
        >
          <span className="media-placeholder-mark">
            {placeholderMark ?? initials}
          </span>
          <small>{placeholderText ?? `${label} IMAGE SPACE`}</small>
        </div>
      ) : (
        <Image
          src={src}
          alt={`${label} product visual`}
          fill
          unoptimized={src.endsWith(".svg")}
          sizes={sizes}
          className="media-image"
          onError={() => setUnavailable(true)}
        />
      )}
    </div>
  );
}
