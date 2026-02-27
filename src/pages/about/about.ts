export const about = (target?: Element | null) => {
  const selector = 'app-view';
  const template = /*html*/ `
  <main>
    <h1>About</h1>
    <p>This is the about page.</p>
  </main>
`;
  const outlet = target ?? document.querySelector(selector);
  if (!outlet) return;
  outlet.innerHTML = template;
};
