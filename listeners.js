chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message == 'changeColor') {
            (async() => {
                chrome.tabs.executeScript({
                    code: 'document.body.style.backgroundColor="orange"'
                })
                console.log('Changing the color now')
            })()
            return true
        } else {
            (async() => {
                chrome.tabs.executeScript({
                    code: 'document.body.style.backgroundColor="blue";'
                })
                console.log('Outside of scope')
            })()
            return true
        }
    }
);

async function doSomethingWith(request) {
    var key = await getKey();
    // await .....
    return key;
}