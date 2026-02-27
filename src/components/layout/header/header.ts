import HazmeWeb from '@/assets/hW.svg';

export const header = (target?: Element | null) => {
  const selector = 'app-header';
  const template =
    /*html*/
    `
    <header class="site-header">
      <a href="/" class="site-brand" data-link>
        <img src="${HazmeWeb}" alt="HazmeWeb" />
        <span>HazmeWeb</span>
      </a>
      <nav class="site-nav">
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
      </nav>
    </header>
    `;

  const element = target ?? document.querySelector(selector);
  if (!element) return;
  element.innerHTML = template;
};
