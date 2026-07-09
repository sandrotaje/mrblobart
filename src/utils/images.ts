// Width variants (e.g. photo-640.avif) are generated at export time and
// live next to the full-size file; encodeURI keeps srcset valid for file
// names containing spaces.
export function imageVariant(url: string, width: number): string {
  return url.replace(/\.avif$/, `-${width}.avif`);
}

export function artworkSrcset(url: string): string {
  return [
    `${encodeURI(imageVariant(url, 640))} 640w`,
    `${encodeURI(imageVariant(url, 1280))} 1280w`,
    `${encodeURI(url)} 2560w`,
  ].join(', ');
}
