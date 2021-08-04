const SKIP_PATHS = ['thanks']
const getRootPath = () => {
  const { href } = window.location;
  const paths = href.split('/')
    .filter(path => SKIP_PATHS.indexOf(path) === -1)
    .filter(id => id);
  if (paths.slice(-1)[0].indexOf('.html') !== -1) {
    return `${paths.slice(0, paths.length - 1).join('/')}`;
  }
  return `${paths.join('/')}`;
}
const currentRootPath = getRootPath();