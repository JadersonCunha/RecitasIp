const recipes = [
  { title: 'Cuca Rápida', category: 'Bolos', icon: '✣', summary: 'Massa fofinha, banana e uma farofa crocante por cima.', ingredients: ['3 ovos', '1 xícara de açúcar', '2 colheres de margarina', '1 colher de chá de baunilha', '2 xícaras de farinha', '1 colher de chá de fermento', '1 xícara de leite', '4 colheres de doce de leite', '2 bananas'], preparation: 'Para a farofa, misture 1 xícara de açúcar, 1 xícara de farinha e 2 colheres de margarina. Monte com a massa, o recheio de banana e doce de leite e finalize com a farofa.' },
  { title: 'Pãozinho Recheado de Calabresa', category: 'Salgados', icon: '◒', summary: 'Massa macia com recheio de calabresa para compartilhar.', ingredients: ['3 xícaras de farinha de trigo', '2 ovos', '1 colher pequena de sal', '100 g de calabresa picada', '2 colheres de óleo', '2 xícaras de água'], preparation: 'Misture os ingredientes da massa, recheie com a calabresa picada e modele os pãezinhos. Asse até dourar.' },
  { title: 'Mini Pizzas', category: 'Salgados', icon: '◉', summary: 'Três sabores para escolher: queijo, presunto ou brigadeiro.', ingredients: ['6 fatias de queijo', '1 ovo', '4 xícaras de farinha de trigo', '100 g de água', '6 fatias de presunto', 'Orégano', 'Sal e açúcar a gosto', 'Coberturas a gosto'], preparation: 'Prepare a massa, abra em pequenos discos e escolha a cobertura: queijo com abobrinha, presunto e queijo ou brigadeiro com gotas de chocolate.' },
  { title: 'Coxinha de Frango', category: 'Salgados', icon: '⌁', summary: 'Um clássico crocante, com recheio de frango desfiado.', ingredients: ['2 xícaras de farinha de trigo', '1 ovo', '300 g de água', '250 g de farinha de rosca', '300 g de frango', '1 colher de manteiga'], preparation: 'Cozinhe a água e a manteiga em fogo baixo e adicione a farinha e o sal. Modele, recheie com frango, passe no ovo e na farinha de rosca.' },
  { title: 'Bolo de Cenoura', category: 'Bolos', icon: '✦', summary: 'Um bolo colorido, simples e perfeito para o café da tarde.', ingredients: ['1 cenoura', '2 ovos', '2 xícaras de farinha de trigo', '1 colher de fermento', '150 g de água', '1 xícara de óleo', '1 xícara de açúcar'], preparation: 'Bata os ingredientes, incorpore a farinha e o fermento e leve ao forno até crescer e dourar.' },
  { title: 'Pão de Queijo Rápido', category: 'Salgados', icon: '○', summary: 'Bolinhas douradas com queijo e poucos ingredientes.', ingredients: ['2 xícaras de farinha de trigo', '1 xícara de queijo ralado', '100 g de leite', '1 colher de manteiga', 'Sal a gosto'], preparation: 'Misture tudo, modele bolinhas e asse a 200 °C até ficarem douradas.' },
  { title: 'Bolo de Milho', category: 'Bolos', icon: '✺', summary: 'Sabor de festa junina em uma receita caseira e gostosa.', ingredients: ['2 xícaras de farinha de trigo', '3 ovos', '2 xícaras de açúcar', 'Água e óleo', '1 xícara de farinha de milho', 'Fermento em pó'], preparation: 'Misture os ingredientes até formar uma massa uniforme. Coloque em forma untada e asse até firmar.' },
  { title: 'Bolo de Granola', category: 'Bolos', icon: '✳', summary: 'Uma opção diferente, com granola e textura especial.', ingredients: ['3 xícaras de farinha de trigo', '2 ovos', '150 g de granola', '100 g de água', '1 xícara de açúcar'], preparation: 'Misture a massa, acrescente a granola e asse em forno preaquecido até dourar.' },
  { title: 'Mini Pizza Presunto e Queijo', category: 'Especiais', icon: '◉', summary: 'Massa caseira, molho de tomate e cobertura bem generosa.', ingredients: ['500 g de farinha', '1 envelope de fermento biológico seco', 'Açúcar, sal e óleo', '250 ml de água morna', 'Molho de tomate', 'Muçarela, presunto e orégano'], preparation: 'Faça a massa com a água morna e deixe crescer. Abra os discos, espalhe o molho e finalize com muçarela, presunto e orégano.' },
  { title: 'Brownie de Chocolate', category: 'Doces', icon: '◆', summary: 'Chocolate intenso, textura macia e aquele cheirinho irresistível.', ingredients: ['200 g de chocolate picado', '150 g de manteiga', '3 ovos', '1½ xícara de açúcar', '1 xícara de farinha', '½ xícara de achocolatado', 'Baunilha'], preparation: 'Derreta o chocolate com a manteiga, misture os demais ingredientes e asse até formar uma casquinha.' },
  { title: 'Canjica Branca', category: 'Doces', icon: '●', summary: 'Cremosa, quentinha e com gostinho de canela.', ingredients: ['500 g de canjica branca', '1 litro de leite', '1 caixa de leite condensado', '1 caixa de creme de leite', '1 xícara de açúcar', 'Canela em pó'], preparation: 'Cozinhe a canjica, acrescente o leite e os demais ingredientes. Finalize com canela em pó.' },
  { title: 'Pudim de Coco', category: 'Doces', icon: '◌', summary: 'Sobremesa delicada com calda dourada e coco.', ingredients: ['2 caixas de leite condensado', 'Leite', '3 ovos', '100 g de coco', '1 xícara de açúcar', '½ xícara de água'], preparation: 'Bata os ingredientes do pudim. Caramelize o açúcar com a água, coloque em forma e asse em banho-maria.' },
  { title: 'Hambúrguer de Frango e Queijo', category: 'Especiais', icon: '▰', summary: 'Pãezinhos macios, frango desfiado e muito queijo.', ingredients: ['500 g de farinha de trigo', 'Fermento seco e açúcar', '2 colheres de óleo', '1 xícara de leite morno', '1 ovo', '350 g de peito de frango cozido e desfiado', '200 g de muçarela e requeijão'], preparation: 'Ative o fermento, sove a massa e deixe crescer. Recheie com frango, muçarela e requeijão. Asse a 180 °C por 30 minutos.' },
  { title: 'Cutuca Cunhada', category: 'Doces', icon: '❋', summary: 'Sobremesa em camadas para preparar sem pressa e caprichar.', ingredients: ['Bolo de chocolate como base', 'Mousse de maracujá', 'Ganache de chocolate', 'Merengue batido em neve'], preparation: 'Monte as camadas com bolo, mousse, ganache e merengue. Deixe gelar por 3 horas antes de servir.' },
  { title: 'Arroz de Leite', category: 'Doces', icon: '◡', summary: 'Doce tradicional, cremoso e cheio de memória afetiva.', ingredients: ['500 g de arroz', '2 xícaras de açúcar', '3 xícaras de leite em pó diluídas em 1 litro de água', '1 ovo temperado com caldo quente'], preparation: 'Cozinhe o arroz e acrescente o leite preparado, o açúcar e o ovo temperado. Mexa até ficar cremoso.' }
];

const grid = document.querySelector('#recipe-grid');
const searchInput = document.querySelector('#recipe-search');
const filterButtons = [...document.querySelectorAll('.filter-chip')];
const countLabel = document.querySelector('#results-count');
const emptyState = document.querySelector('#empty-state');
const clearButton = document.querySelector('#clear-search');
let activeCategory = 'Todas';

const introLoader = document.querySelector('#intro-loader');
document.body.classList.add('is-loading');

function finishIntro() {
  if (!introLoader) return;
  introLoader.classList.add('is-complete');
  document.body.classList.remove('is-loading');
  window.setTimeout(() => introLoader.remove(), 650);
}

window.addEventListener('load', () => window.setTimeout(finishIntro, 3900), { once: true });
window.setTimeout(finishIntro, 5200);

function recipeCard(recipe) {
  const list = recipe.ingredients.map(item => `<li>${item}</li>`).join('');
  return `<article class="recipe-card">
    <div class="recipe-card-top"><span class="recipe-category">${recipe.category}</span><span class="recipe-icon" aria-hidden="true">${recipe.icon}</span></div>
    <h3>${recipe.title}</h3>
    <p class="recipe-summary">${recipe.summary}</p>
    <details class="recipe-details">
      <summary>Ver receita completa</summary>
      <div class="recipe-info"><strong>Ingredientes</strong><ul>${list}</ul><p><strong>Preparo:</strong> ${recipe.preparation}</p></div>
    </details>
  </article>`;
}

function updateRecipes() {
  const term = searchInput.value.trim().toLocaleLowerCase('pt-BR');
  const filtered = recipes.filter(recipe => {
    const matchesCategory = activeCategory === 'Todas' || recipe.category === activeCategory;
    const searchable = `${recipe.title} ${recipe.category} ${recipe.summary} ${recipe.ingredients.join(' ')}`.toLocaleLowerCase('pt-BR');
    return matchesCategory && (!term || searchable.includes(term));
  });
  grid.innerHTML = filtered.map(recipeCard).join('');
  countLabel.textContent = `${filtered.length} ${filtered.length === 1 ? 'receita' : 'receitas'}`;
  emptyState.hidden = filtered.length > 0;
}

filterButtons.forEach(button => button.addEventListener('click', () => {
  activeCategory = button.dataset.category;
  filterButtons.forEach(item => item.classList.toggle('is-active', item === button));
  updateRecipes();
}));
searchInput.addEventListener('input', updateRecipes);
clearButton.addEventListener('click', () => {
  searchInput.value = '';
  activeCategory = 'Todas';
  filterButtons.forEach(item => item.classList.toggle('is-active', item.dataset.category === 'Todas'));
  updateRecipes();
  searchInput.focus();
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

updateRecipes();

const backToTop = document.querySelector('#back-to-top');
const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
const sections = ['inicio', 'receitas', 'turmas', 'sobre'].map(id => document.getElementById(id));

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 300);
  let current = '';
  sections.forEach(section => {
    if (section && window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  bottomNavItems.forEach(item => {
    item.classList.toggle('is-active', item.getAttribute('href') === '#' + current);
  });
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
