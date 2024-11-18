import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://qastoredesafio.lojaintegrada.com.br/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/QA Store Desafio/);
});



test('deve logar na aplicação', async ({ page }) => {
await page.goto('https://qastoredesafio.lojaintegrada.com.br/conta/login');
await page.fill('#id_email', 'thalitasg@gmail.com')
await page.fill('#id_senha', '12345@')
await page.click('css=button >> text=Prosseguir')

})


//Cenário 1: Aplicação de cupom de desconto FRETEGRATIS
//Dado que o cliente adiciona produtos ao carrinho
//E o valor total dos produtos é maior que o valor mínimo para o cupom de frete grátis
//Quando o cliente aplica o cupom de desconto "FRETEGRATIS"
//Então o valor do frete deve ser zerado
//E o valor total da compra deve aplicar a aplicação do desconto de frete grátis.

//test('deve aplicar o cupom FRETEGRATIS', async ({ page }) => {
//  await page.goto('https://qastoredesafio.lojaintegrada.com.br/conta/login');
// await page.fill('#id_email', 'thalitasg@gmail.com')
// await page.fill('#id_senha', '12345@')
// await page.click('css=button >> text=Prosseguir')

//})


//Cenário 2: Aplicação de cupom de desconto percentual 10OFF
//Dado que o cliente adiciona produtos ao carrinho
//Quando o cliente aplica o cupom de desconto "10OFF"
//Então o valor do desconto deve ser de 10% sobre o subtotal dos produtos
//E o valor total da compra deve aplicar o desconto aplicado.


//test('deve aplicar o cupom 10OFF', async ({ page }) => {
 // await page.goto('https://qastoredesafio.lojaintegrada.com.br/conta/login');
 // await page.fill('#id_email', 'thalitasg@gmail.com')
//await page.fill('#id_senha', '12345@')
  //await page.click('css=button >> text=Prosseguir')


 // await page.goto('https://qastoredesafio.lojaintegrada.com.br/estoque-produto-com-estoque-gerenciado-com-quantidade-zerada-produto-indisponivel');
 // await page.click('input[class*="botao botao-comprar principal grande "]')



//})