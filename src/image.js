const makeImage = (url) => {
  const image = document.createElement("img");

  image.src = url;
  image.height = "100";
  image.width = "100";

  return image;
};

export default makeImage;
