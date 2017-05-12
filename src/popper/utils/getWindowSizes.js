export default function getWindowSizes() {
  const body = window.document.body;
  const html = window.document.documentElement;
  return {
    height: Math.max(
      body.offsetHeight,
      html.clientHeight,
      html.offsetHeight
    ),
    width: Math.max(
      body.offsetWidth,
      html.clientWidth,
      html.offsetWidth
    ),
  };
}
