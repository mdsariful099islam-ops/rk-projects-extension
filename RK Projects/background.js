chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "generatePrompt",
    title: "Generate AI Prompt (RK Projects)",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generatePrompt") {

    chrome.storage.local.set({
      imageUrl: info.srcUrl
    });

    chrome.action.openPopup();
  }
});
