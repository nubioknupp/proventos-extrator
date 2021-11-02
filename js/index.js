const Seletores =
{
    BotaoFiltrar: '#botao-filtrar',
};

var color = 'coral';
var $conteudo = document.querySelector('.conteudo');
var changeColor = document.getElementById("changeColor");

function reddenPage(seletores) {
  const $botaoFiltrar = document.querySelector(seletores.BotaoFiltrar);
  const script = document.createElement("script");

  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bean/1.0.15/bean.min.js';

  console.log('OI! OI!');

  document.head.appendChild(script)

  // document.body.insertAdjacentElement('beforeend',script);
  // document.head.insertAdjacentElement('beforeend',script);
  

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
