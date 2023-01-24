chrome.runtime.onMessage.addListener((urls) => {
    document.getElementById("urls").value = urls.join("\n");
});