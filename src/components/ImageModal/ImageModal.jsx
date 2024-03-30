const ImageModal = ({ images }) => {
  const { urls, alt_description } = images;
  return (
    <div>
      <img src={urls.regular} alt={alt_description} />
    </div>
  );
};
export default ImageModal;