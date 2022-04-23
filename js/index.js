const Seletores =
{
  BotaoFiltrar: '#botao-filtrar',
};

var color = 'coral';
var $conteudo = document.querySelector('.conteudo');
var changeColor = document.getElementById("changeColor");

localStorage.setItem('meuGato', 'Tom');

function reddenPage(seletores, id) {
  console.debug('message');

  var laserExtensionId = "hnpilikmlhoobghogidgcologoocaoon";
  chrome.runtime.sendMessage(laserExtensionId, {getTargetData: true},
    function(response) {
      if (targetInRange(response.targetData))
        chrome.runtime.sendMessage(laserExtensionId, {activateLasers: true});
    }
  );
}
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage,
    args: [Seletores, tab.id],
  });
});

chrome.runtime.onMessageExternal.addListener(
  function (request, sender, sendResponse) {
    console.debug('message 2');

    // if (sender.id === blocklistedExtension)
    //   return;  // don't allow this extension access
    // else if (request.getTargetData)
    //   sendResponse({targetData: targetData});
    // else if (request.activateLasers) {
    var success = activateLasers();
    sendResponse({ activateLasers: success });
    //}
  });

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   localStorage.setItem('meuGato', 'Tom 2');
//   console.debug('message');
//   // Handle message.
//   // In this example, message === 'whatever value; String, object, whatever'
// })
