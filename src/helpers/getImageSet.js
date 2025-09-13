export default function getImageSet(src) {
  const match = src.match(/\.(jpe?g|png)$/i);
  if (!match) {
    throw new Error('getImageSet() expects a .jpg/.jpeg/.png path');
  }
  const base = src.slice(0, -match[0].length);
  const ext = match[1].toLowerCase();
  const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
  return `image-set(
    url('${base}.webp') type('image/webp') 1x,
    url('${base}.${ext}') type('${mime}') 1x
  )`;
}