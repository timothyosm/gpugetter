let changeColor = document.getElementById('changeColor');
let inject = document.getElementById('inject');


switch (document.getElementById('httpType').value) {
    case "pf":
        // populate the popup.html with postForm type
        document.getElementById('playArea').innerHTML = '<div>FormData type</div>';
    case "pj":
        document.getElementById('playArea').innerHTML = '<div>JSON type</div>';
    default:
}

changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};

inject.onclick = function (element) {
    console.log('injecting..')
    chrome.runtime.sendMessage({message: "changeColor"}, function (response) {
    });
}

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});