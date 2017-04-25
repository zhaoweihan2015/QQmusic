var oMenuButton = document.getElementById("menu");
var oAside = document.getElementsByTagName("aside")[0];
var oBg = document.getElementById("bgBlack");
var oAf = document.getElementById("aside_footer");
oMenuButton.onclick = function() {
	AsideShow("open");
};
oBg.onclick = function() {
	AsideShow("close");
}
var onoff = false;

function AsideShow(type) {
	if(onoff) {
		return false;
	}
	onoff = true;
	setTimeout(function() {
		onoff = false;
	}, 500)
	if(type == "close") {
		document.getElementById("mainBox").style.position = "";
		document.getElementsByTagName("aside")[0].style.position = "";
		oAside.className = oAf.className = "";
		oBg.style.display = "none";
	} else if(type == "open") {
		document.getElementById("mainBox").style.position = "fixed";
		document.getElementsByTagName("aside")[0].style.position = "absolute";
		oAside.className = oAf.className = "active";
		oBg.style.display = "block";
	}
}
var oDiv = document.body;
var oWidth = document.body.offsetWidth;
var touchDiv = new touchFuc(oDiv);
touchDiv.TouchEvent();

function touchFuc(o) {
	this.startX = 0;
	this.endX = 0;
	this.moveX = 0;
	this.obj = o;
	this.TouchEvent = function() {
		this.obj.addEventListener("touchstart", function(e) {
			this.startX = parseInt(e.targetTouches[0].clientX);
		});
		this.obj.addEventListener("touchmove", function(e) {
			this.endX = parseInt(e.targetTouches[0].clientX);
			this.moveX = this.endX - this.startX;
			if(this.moveX >= oWidth * .2) {
				AsideShow("open");
			} else if(this.moveX < -oWidth * .2) {
				AsideShow("close");
			}
		});
	}
}