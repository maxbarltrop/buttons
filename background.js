let defaultData = {
  color: "#000000",
  backgroundColor: "#ffffff",
  borderRadius: "10",
  borderColor: "#dedede",
  borderWidth: "2",
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(defaultData);
});
