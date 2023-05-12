chrome.runtime.onInstalled.addListener(() => {
    let parent = chrome.contextMenus.create({
        title: 'Open in new',
        id: 'parent',
        contexts: ["frame"],
    });
    chrome.contextMenus.create({
        id: 'iframe-window',
        title: "Window",
        contexts: ["frame"],
        parentId: parent
    });
    chrome.contextMenus.create({
        id: 'iframe-tab',
        title: "Tab",
        contexts: ["frame"],
        parentId: parent
    });
});
chrome.contextMenus.onClicked.addListener(genericOnClick);
function genericOnClick(info) {
    let url = info.frameUrl
    switch (info.menuItemId) {
        case 'iframe-window':
            chrome.windows.create({
                url: url,
                type: 'popup',
                width: 800,
                left: 1100,
            });
            break;
        case 'iframe-tab':
            chrome.tabs.create({
                url: url
            });
            break;
    }
}