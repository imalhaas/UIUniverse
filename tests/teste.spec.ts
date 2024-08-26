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


