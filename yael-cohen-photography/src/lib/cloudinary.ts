// ─────────────────────────────────────────────────────────────────────────────
// Cloudinary URL construction helpers
// No SDK — pure URL string assembly using the cloud name from env.
// ─────────────────────────────────────────────────────────────────────────────

/** Pre-composed Cloudinary transform strings */
export const TRANSFORM_GALLERY_THUMB = 'c_fill,w_600,h_400,f_auto,q_auto';
export const TRANSFORM_LIGHTBOX      = 'w_1400,f_auto,q_auto';
export const TRANSFORM_HERO          = 'c_fill,w_1920,h_1080,f_auto,q_auto';
export const TRANSFORM_PORTRAIT      = 'c_fill,w_800,h_1000,f_auto,q_auto';

/**
 * Build a complete Cloudinary delivery URL.
 *
 * @param publicId   - The Cloudinary asset public ID (e.g. "samples/people/jazz")
 * @param transforms - A Cloudinary transformation string (e.g. "c_fill,w_600,h_400,f_auto,q_auto")
 * @returns          A fully-qualified https://res.cloudinary.com URL
 */
export function buildCloudinaryUrl(publicId: string, transforms: string): string {
  const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME as string;
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}
