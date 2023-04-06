console.log('extension requesting number of words replaced at ' + new Date().getMilliseconds())
chrome.runtime.sendMessage({ message: 'requesting word count' }, (response) => {
    console.log('extension received number of words replaced from background at ' + new Date().getMilliseconds())
    document.getElementById('replacement_count').textContent = response;
})

// console.log('hi tyler')