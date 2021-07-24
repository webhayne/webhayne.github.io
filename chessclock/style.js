var m,ml,mr,s,sl,sr,click=null;

function key() {
    if (click!=null){
        if (click=='left'){
            clicky('right');
            return 0;
        }
        if (click=='right'){
            clicky('left');
            return 0;
        }
    }
}
function clicky(d){
    click=d;
    if(d=='left'){
        left();
    }
    if(d=='right'){
        right();
    }
}
function start() {
    if (m==null && s==null){
        m=document.getElementById('m').value;
        s=document.getElementById('s').value;
        ml=m;
        mr=m;
        sl=s;
        sr=s;
        msl=0;
        msr=0;
    }
    document.getElementById('ml').innerHTML=ml;
    document.getElementById('mr').innerHTML=mr;
    document.getElementById('sl').innerHTML=sl;
    document.getElementById('sr').innerHTML=sr;
    document.getElementById('msl').innerHTML=msl;
    document.getElementById('msr').innerHTML=msr;
}
function left() {
    if(msl==-1 && click=='left'){
        msl=999;
        sl-=1;
    }
    if(sl==-1 && click=='left'){
        sl=59;
        ml-=1;
    }
    if(ml==-1){
        alert("Hết giờ");
        return 0;
    }
    if(click=='right'){
        return 0;
    }
    document.getElementById('ml').innerHTML=ml;
    document.getElementById('sl').innerHTML=sl;
    document.getElementById('msl').innerHTML=msl;
    timeout = setTimeout(function(){
        msl--;
        left();
    }, 1);
}
function right(){
    if(msr==-1 && click=='right'){
        msr=999;
        sr-=1;
    }
    if(sr==-1 && click=='right'){
        sr=59;
        mr-=1;
    }
    if(mr==-1){
        alert("Hết giờ");
        return 0;
    }
    if(click=='left'){
        return 0;
    }
    document.getElementById('sr').innerHTML=sr;
    document.getElementById('mr').innerHTML=mr;
    document.getElementById('msr').innerHTML=msr;
    timeout = setTimeout(function(){
        msr--;
        right();
    }, 1);
}
