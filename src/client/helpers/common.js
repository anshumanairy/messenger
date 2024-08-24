export const setIsMobile = (window) => {
  const isMobile =
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
  window.isMobile = isMobile;
};
