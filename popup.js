let changeColor = document.getElementById('changeColor');
let inject = document.getElementById('inject');

changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};

inject.onclick = function (element) {
    chrome.runtime.sendMessage('changeColor', function (response) {
    });
}

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});