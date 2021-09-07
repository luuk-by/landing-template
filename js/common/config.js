const SKIP_PATHS = ['core']

const getRootPath = () => {
  const { pathname, origin } = window.location;
  const paths = pathname.split('/')
    .filter(path => SKIP_PATHS.indexOf(path) === -1)
    .filter(id => id);
  if (paths.slice(-1)[0].indexOf('.html') !== -1) {
    return `${origin}/${paths.slice(0, paths.length - 1).join('/')}`;
  }
  return `${origin}/${paths.join('/')}`;
};

const currentRootPath = getRootPath();
