import { test, expect } from '@playwright/test';

test('Clique no link "Ver Produtos" e verifique a navegação', async ({ page }) => {
  // Acesse a página inicial
  await page.goto('http://localhost:5173/');

  // Espera até que o link "Ver Produtos" esteja visível
  const verProdutosLink = page.getByRole('link', { name: /ver produtos/i });
  await expect(verProdutosLink).toBeVisible();

  // Clica no link "Ver Produtos"
  await verProdutosLink.click();

  // Verifica se a navegação ocorreu corretamente para a página de portfolio
  await expect(page).toHaveURL('http://localhost:5173/portfolio');
  
  // Adicione uma pequena espera explícita
  await page.waitForLoadState('domcontentloaded');
});


test('Desça até o final da página e clique no link do GitHub', async ({ page }) => {
  // Acesse a página inicial
  await page.goto('http://localhost:5173/');

  // Desça até o final da página
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Espera até que o link do GitHub esteja visível
  const githubLink = page.locator('a[aria-label="Github"]');
  await expect(githubLink).toBeVisible();

  // Clica no link do GitHub
  await githubLink.click();

  // Aguarda o novo navegador ou aba abrir e verificar a URL
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'), // Espera por uma nova página ser aberta
    githubLink.click(), // Clica no link do GitHub
  ]);

  // Espera até que a nova página carregue
  await newPage.waitForLoadState();

  // Verifica se a nova página é a URL correta do GitHub
  await expect(newPage).toHaveURL('https://github.com/imalhaas');
});


