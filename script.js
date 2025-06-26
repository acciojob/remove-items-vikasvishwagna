//your JS code here. If required.
var deleteBtn = document.querySelector("input[type='button']");


deleteBtn.addEventListener("click",function () {
	var colorSelect = document.querySelector("#colorSelect");
	var selectIdx = colorSelect.selectedIndex;

	if(selectIdx != -1){
		colorSelect.remove(selectIdx);
	}
})