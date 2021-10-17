function display_h1(tabId, tabTitle) {
    let code = 'document.querySelector("#gatsby-focus-wrapper)';
    let $id2 = document.querySelector("#id2");
    document.querySelector("#id1").innerHTML = "<p>1 tab title: " + tabTitle + " tabId: " + tabId + "</p>";

    chrome.tabs.executeScript(tabId, { code }, function (result) {
        $id2.innerHTML = "2 - ";
    });
}

chrome.tabs.query({ active: true }, function (tabs) {

    //   tab_title = tab.title;
    //   chrome.tabs.executeScript(tab.id, {
    //     code: 'document.querySelector("#container")'
    //   }, );
    var tab = tabs[0];

    display_h1(tab.id, JSON.stringify(tab))
});