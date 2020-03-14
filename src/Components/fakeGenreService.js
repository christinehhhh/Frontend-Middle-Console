export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Pop" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Soundtrack" }
];
export function getGenres() {
  return genres.filter(g => g);
}
