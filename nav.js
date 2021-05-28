//Pulled from the famous Suckerfish menu system requiring only light JS to implement
sfHover = function() {
	var sfEls = document.getElementById("l-nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

function hideIt(obj)
{
	if (obj.parentNode.parentNode.nextSibling.nextSibling.style.display == 'none') {
		obj.parentNode.parentNode.nextSibling.nextSibling.style.display = '';
		}
	else {
		obj.parentNode.parentNode.nextSibling.nextSibling.style.display = 'none';
		}
}

//Pulled from http://www.switchonthecode.com/tutorials/javascript-tutorial-simple-fade-animation
function animateFade(lastTick, eid)
{
  var curTick = new Date().getTime();
  var elapsedTicks = curTick - lastTick;

  var element = document.getElementById(eid).getElementsByTagName("ul");
  element=element[0]; 
  if(element.FadeTimeLeft <= elapsedTicks)
  {
    element.style.opacity = element.FadeState == 1 ? '1' : '0';
    element.style.filter = 'alpha(opacity = '
        + (element.FadeState == 1 ? '100' : '0') + ')';
    element.FadeState = element.FadeState == 1 ? 2 : -2;
    return;
  }

  element.FadeTimeLeft -= elapsedTicks;
  var newOpVal = element.FadeTimeLeft/TimeToFade;
  if(element.FadeState == 1)
    newOpVal = 1 - newOpVal;

  element.style.opacity = newOpVal;
  element.style.filter = 'alpha(opacity = ' + (newOpVal*100) + ')';

  setTimeout("animateFade(" + curTick + ",'" + eid + "')", 33);
}

var TimeToFade = 400.0;

function fade(eid)
{
  //for 1511 we need the <ul> that is a child of our current <li>
  var element = document.getElementById(eid).getElementsByTagName("UL");
  if(element[0] == null)
    return;
  element = element[0];
  if(element.FadeState == null)
  {
    if(element.style.opacity == null
        || element.style.opacity == ''
        || element.style.opacity == '1')
    {
      element.FadeState = -2;
      element.style.opacity='0';
    }
    else
    {
      element.FadeState = 2;
    }
  }
   
  if(element.FadeState == 1 || element.FadeState == -1)
  {
    element.FadeState = element.FadeState == 1 ? -1 : 1;
    element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
  }
  else
  {
    element.FadeState = element.FadeState == -2 ? 1 : -1;
    element.FadeTimeLeft = TimeToFade;
    setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')", 33);
  }  
}
