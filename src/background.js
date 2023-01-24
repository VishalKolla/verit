chrome.browserAction.onClicked.addListener(tab => {
    var urls = Array();
    chrome.tabs.executeScript({
        code: `
            Array.from(document.getElementsByTagName("a")).map(a => a.href).join("\\n");
        `
    }, function (result) {
        for (i = 0; i < result[0].length; i++)
        urls [i] = result[0][i];
        console.log(urls);
    });
    urls => {
        chrome.windows.create({
            type: "popup",
            url: "popup.html",
            width: 300,
            height: 400
        });
    }
});