function getCurrentDevice() {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    return 'desktop';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 'tablet';
  } else {
    return 'mobile';
  }
}


function getSpace(device) {
  switch (device) {
    case 'desktop':
      return 32;
    case 'tablet':
      return 30;
    case 'mobile':
    default:
      return 5;
  }
}


function getSlidesPerView(device) {
  switch (device) {
    case 'desktop':
      return 3;
    case 'tablet':
      return 2;
    case 'mobile':
    default:
      return 1;
  }
}

export { getCurrentDevice, getSpace, getSlidesPerView };
