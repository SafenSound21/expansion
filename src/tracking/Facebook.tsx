import ReactPixel from 'react-facebook-pixel';

const initFacebookPixel = (pixelId: string) => {

  ReactPixel.init(pixelId);

  const viewContentTracked = sessionStorage.getItem(`homeView`);
  if (!viewContentTracked) {
    ReactPixel.pageView();
    sessionStorage.setItem(`homeView`, 'true');
  }
  
}

export default initFacebookPixel;
