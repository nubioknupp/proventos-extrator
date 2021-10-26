const Seletores =
{
    BotaoFiltrar: '#botao-filtrar',
};

var color = 'coral';
var $conteudo = document.querySelector('.conteudo');
var changeColor = document.getElementById("changeColor");

function reddenPage(seletores) {
  const $botaoFiltrar = document.querySelector(seletores.BotaoFiltrar);

  console.log('botao-filtrar', $botaoFiltrar);
}

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage,
    args: [Seletores],
  });
});
