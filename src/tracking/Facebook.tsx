import ReactPixel from 'react-facebook-pixel';

const initFacebookPixel = (pixelId: string) => {

  ReactPixel.init(pixelId);
  ReactPixel.pageView();

}

export default initFacebookPixel;
