const browser = chrome ?? browser;

var totalWordsReplaced = 0;

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message == "Words replaced") {
        console.log('background received number of words replaced from content script at ' + new Date().getMilliseconds())
        totalWordsReplaced = request.count;
    }

    if (request.message == "requesting word count") {
        console.log('background received message from extension asking for numbers of words replaced, now replying at ' + new Date().getMilliseconds())
        sendResponse(totalWordsReplaced)
    }
});

// console.log('hi tyler')