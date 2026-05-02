const BACKGROUND_API_KEY =
  "ueJulWpzL4dCb1jdvhlQvif0tRwhbRKkx6kFM7psIZC02dyPKDXLOcHX";

const QUERIES = [
  "nature",
  "architecture",
  "ocean",
  "forest",
  "city night",
  "animal",
];

async function fetchRandomImg(query) {
  const randomPage = Math.floor(Math.random() * 10) + 1;
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${randomPage}&orientation=landscape`;

  const res = await fetch(url, {
    headers: { Authorization: BACKGROUND_API_KEY },
  });

  const data = await res.json();
  const photos = data.photos;

  return photos[Math.floor(Math.random() * photos.length)];
}

async function loadBackgroundImg() {
  const query = QUERIES[Math.floor(Math.random() * QUERIES.length)];
  const photo = await fetchRandomImg(query);
  const PHOTO_URL = photo.src.original;

  const img = new Image();
  img.src = PHOTO_URL;

  img.onload = function () {
    document.body.style.backgroundImage = `url('${PHOTO_URL}')`;

    document.getElementById("credit").innerHTML =
      `This <a href="${PHOTO_URL}">Photo</a> was taken by <a href="${photo.photographer_url}">${photo.photographer}</a> on Pexels.`;
  };
}

loadBackgroundImg();
