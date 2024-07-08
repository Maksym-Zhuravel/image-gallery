export default function ImageCard({ images: { urls, alt_description } }) {
  return <img src={urls.small} alt={alt_description} />;
}
