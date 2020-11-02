/* Refer to passing variables to contentScript.js
    https://stackoverflow.com/questions/17567624/pass-a-parameter-to-a-content-script-injected-using-chrome-tabs-executescript
*/

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message == 'changeColor') {
            (async() => {
                chrome.tabs.executeScript({
                    file: 'contentScript.js'
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