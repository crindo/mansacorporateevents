var message="";
///////////////////////////////////
function clickIE() {try{ if (document.all) {return false;}}catch(e){}}
function clickNS(e) {
	try{
		if(document.layers||(document.getElementById&&document.all)) {
			if(e.which==2||e.which==3) {return false;}
		}
	}catch(e){}
}

try{
	if(document.layers){
		document.captureEvents(Event.MOUSEDOWN);
		document.onmousedown=clickNS(Event);	
	}else{
		document.onmouseup=clickNS;
		document.oncontextmenu=clickIE;
	}
		document.oncontextmenu=new Function("return false")

	}catch(e){}	

// --> 
function disableselect(e){
	return false;
}

function reEnable(){
	return true;
}

try{
//if IE4+
document.onselectstart=new Function ("return false")

//if NS6
if (window.sidebar){
		document.onmousedown=disableselect
		document.onclick=reEnable
}
}catch(e){}

window.onError=reEnable;