import './style.css';
import  HazmeWeb  from '@/assets/hW.svg';
import typescriptLogo from '@/assets/typescript.svg'
export const hero = (target?: Element | null) => {
    const selector = 'app-hero'
    const template = 
    /*html*/
    ` 
    <section class="hero">
      <div class="hero__logos">
        <a href="https://hazmeweb.es" target="_blank" rel="noreferrer">
          <img src="${HazmeWeb}" class="hero__logo" alt="HazmeWeb logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src="${typescriptLogo}" class="hero__logo hero__logo--ts" alt="TypeScript logo" />
        </a>
      </div>
      <h1 class="hero__title">Web con Vite&TypeScript 5.9 <br>The best one</h1>
      <p class="hero__subtitle">Base sólida para construir interfaces modernas.</p>
    </section>
    `
    const element = target ?? document.querySelector(selector)
    if (!element) return
    element.innerHTML = template
}
