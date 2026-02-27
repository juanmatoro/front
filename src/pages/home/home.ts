import { hero } from '@/pages/home/hero/hero';
import { counter } from '@/components/counter/counter';

export const home = (target?: Element | null) => {
  const selector = 'app-view';
  const template = /*html*/ `
  <main>
    <app-hero></app-hero>
    <app-counter></app-counter>
  </main>
`;
  const outlet = target ?? document.querySelector(selector);
  if (!outlet) return;
  outlet.innerHTML = template;

  const main = outlet.querySelector('main');
  if (!main) return;

  hero(main.querySelector('app-hero'));
  counter(main.querySelector('app-counter'));
};
