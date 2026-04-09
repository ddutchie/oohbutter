/**
 * Returns the basePath prefix for static assets like images.
 * next/image src paths are NOT automatically prefixed by basePath,
 * so we prepend it manually.
 */
const basePath =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_CUSTOM_DOMAIN !== "true"
    ? "/oohbutter"
    : "";

export default basePath;
