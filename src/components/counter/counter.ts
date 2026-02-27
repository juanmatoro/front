export const counter = (target?: Element | null) => {
  const selector = 'app-counter';
  const template = 
  /*html*/
  ` 
    <div class="card-counter">
      <button type="button">count is 0</button>
    </div>
  `;

  const element = target ?? document.querySelector(selector);
  if (!element) return;
  element.innerHTML = template;

  const button = element.querySelector<HTMLButtonElement>('button');
  if (!button) return;

  let count = 0;
  const setCounter = (value: number) => {
    count = value;
    button.innerHTML = `count is ${count}`;
  };

  button.addEventListener('click', () => setCounter(count + 1));
  setCounter(0);
};
