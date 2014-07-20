$(function(){
	chrome.storage.sync.get({
		isHideAlert: true
	}, function(items) {
		if(items.isHideAlert) {
			removeAlert();
		}
	});
});

function removeAlert(){
	$('.jewelCount').each(function(){
		if(this.parentNode) {
			this.parentNode.removeChild(this);
		}
	});
}
