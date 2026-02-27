export const footer = (target?: Element | null) => {
  const selector = 'app-footer';
  const template =
    /*html*/
    ` 
      <footer>
        <p>&copy; 2024 HazmeWeb. All rights reserved.</p>
      </footer>
    `;

  const element = target ?? document.querySelector(selector);
  if (!element) return;
  element.innerHTML = template;
};
