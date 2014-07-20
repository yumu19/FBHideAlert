// Saves options to chrome.storage
function save_options() {
  var isHideAlert = document.getElementById('alert').checked;
  console.log(isHideAlert);

  chrome.storage.sync.set({
    isHideAlert: isHideAlert
  });
  //, function(){});
  if (isHideAlert) {
    chrome.browserAction.setIcon({path:'./hideAlert.png'});
  } else {
    chrome.browserAction.setIcon({path:'./showAlert.png'});
  }
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    isHideAlert: true
  }, function(items) {
    document.getElementById('alert').checked = items.isHideAlert;
    console.log(items);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);

window.onload = function() {
  var alertBox = document.getElementById('alert');
  alertBox.addEventListener('click',save_options);
}