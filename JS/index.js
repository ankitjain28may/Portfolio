function all()
{
	document.getElementById('Education').style="display:none;";
	document.getElementById('Experience').style="display:none;";
	document.getElementById('Profile').style="display:none;";
	document.getElementById('Project').style="display:none;";
	document.getElementById('Contact').style="display:none;";

}
function start()
{
	all();
	document.getElementById('Profile').style="display:block;";

}
function education() {
	all();
	document.getElementById('Education').style="display:block;";
}
function experience() 
{
	all();
	document.getElementById('Experience').style="display:block;";
	move();
}
function project() 
{
	all();
	document.getElementById('Project').style="display:block;";
}
function contact() 
{
	all();
	document.getElementById('Contact').style="display:block;";
}



function move()
{
	var elem = document.getElementsByClassName("myBar");
	var lb=document.getElementsByClassName("label");
	var value=0;
	var i=0;
	for(i=0;i<elem.length;i++)
	{
		value=lb[i].innerHTML;
		value=value.substring(0,2)
		progress(elem[i],value);
		lb[i].innerHTML=value*1+'%';
	}
}


function progress(el,value) {
  
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == value) {
      clearInterval(id);
    } else {
      width++; 
      el.style.width = width + '%'; 

    }
  }
}