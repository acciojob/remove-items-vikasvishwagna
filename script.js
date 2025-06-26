//your JS code here. If required.
var deleteBtn = document.queryselector("button");


deleteBtn.addEventListner("click",function () {
	var colorSelect = document.queryselector("colorSelect");
	var selectIdx = colorSelect.selectIndex;

	if(selectIdx != -1){
		colorSelect.remove(selectIdx);
	}
})