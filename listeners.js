chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.tabs.executeScript({
            code: 'document.body.style.backgroundColor="orange"'
        })
        return true;
    }
);

async function doSomethingWith(request) {
    var key = await getKey();
    // await .....
    return key;
}