"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfilePhoto() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <div className="profile-photo">
      <div className="profile-photo-frame">
        {imageUnavailable ? (
          <div
            className="profile-photo-placeholder"
            role="img"
            aria-label="Profile photo placeholder for Tushar Garg"
          >
            <span className="profile-placeholder-mark">TG</span>
            <span className="profile-placeholder-label">
              PROFILE PHOTO
              <br />
              PLACEHOLDER
            </span>
          </div>
        ) : (
          <Image
            src="/profile.png"
            alt="Portrait of Tushar Garg"
            fill
            sizes="(max-width: 650px) 240px, (max-width: 900px) 280px, 360px"
            className="profile-photo-image"
            onError={() => setImageUnavailable(true)}
          />
        )}
        <span className="profile-photo-index">TG / 01</span>
      </div>
      <div className="profile-photo-meta">
        <span>PRODUCT ENGINEERING</span>
        <span>CHANDIGARH / INDIA</span>
      </div>
    </div>
  );
}
