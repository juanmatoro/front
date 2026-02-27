import { home } from './pages/home/home';
import { about } from './pages/about/about';
import { header } from './components/layout/header/header';
import { footer } from './components/layout/footer/footer';
import './style.css';

type PageRenderer = (target?: Element | null) => void;

const routes: Record<string, PageRenderer> = {
  '/': home,
  '/about': about,
};

const renderAppShell = () => {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  app.innerHTML = /*html*/ `
    <app-header></app-header>
    <app-view></app-view>
    <app-footer></app-footer>
  `;

  header(app.querySelector('app-header'));
  footer(app.querySelector('app-footer'));
};

const renderCurrentPage = () => {
  const outlet = document.querySelector('app-view');
  if (!outlet) return;
  const renderPage = routes[window.location.pathname] ?? home;
  renderPage(outlet);
};

document.addEventListener('click', (event) => {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[data-link]');
  if (!link) return;
  event.preventDefault();
  const href = link.getAttribute('href');
  if (!href) return;
  window.history.pushState({}, '', href);
  renderCurrentPage();
});

window.addEventListener('popstate', renderCurrentPage);

renderAppShell();
renderCurrentPage();
