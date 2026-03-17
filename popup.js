document.getElementById('syphonBtn').addEventListener('click', async () => {
  const statusEl = document.getElementById('status');
  statusEl.innerText = "Extracting telemetry...";

  // Query the current active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentTab = tabs[0];

    // Construct the machine-readable payload
    let aiPrompt = `[SYSTEM: INGEST CONTEXT]\nTarget Title: ${currentTab.title}\nTarget Source: ${currentTab.url}\nTimestamp: ${new Date().toISOString()}\n\n[USER COMMAND]: Analyze the provided source and await further instruction.`;

    // Execute clipboard injection via background DOM element
    navigator.clipboard.writeText(aiPrompt).then(() => {
      statusEl.style.color = "#56d364";
      statusEl.innerText = "Payload secured in clipboard.";
      document.getElementById('syphonBtn').innerText = "SYPHON COMPLETE";
    }).catch(err => {
      statusEl.style.color = "#f85149";
      statusEl.innerText = "Execution failed.";
      console.error(err);
    });
  });
});
