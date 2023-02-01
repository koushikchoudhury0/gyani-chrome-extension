let block = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "",
  });
});


chrome.action.onClicked.addListener(async (tab) => {
  if (block) return;
  block = true;
  const currState = await chrome.action.getBadgeText({ tabId: tab.id });
  const nextState = currState === "" ? "..." : ""

  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
  });

  await chrome.scripting.executeScript({
    files: ["libs/jquery.min.js"],
    target: { tabId: tab.id },
  });

  if (nextState === '...') {
    await chrome.scripting.executeScript({
      files: ["src/get-answer.js"],
      target: { tabId: tab.id, allFrames: true },
    });
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: "",
    });
  }
  block = false;
});
