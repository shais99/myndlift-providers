export const useImg = () => {
  function handleImgError(ev) {
    ev.target.src = "/assets/img/no_image.jpg";
  }

  return { handleImgError };
};
