var tile = new SimpleImage(256,256);

function setcolor(p,r,g,b){
    p.setRed(r);
    p.setGreen(g);
    p.setBlue(b);
    return p;
}

function draw(pixel,image,r){
    x=pixel.getX();y=pixel.getY();
    rr=Math.pow(r-1,2);
    a=Math.pow(x,2);b=Math.pow(y,2);
    c=Math.pow(255-x,2);d=Math.pow(255-y,2);
    e=Math.pow(x-127,2);f=Math.pow(y-127,2);
    s=(Math.sqrt(3)-1)*128;ss=Math.pow(s,2);
    color=Math.sqrt(e+f);
    if (a+b < rr && c+d < rr){
        p=setcolor(p,255,x,y);
    }
    else if (b+c < rr && a+d < rr){
        p=setcolor(p,255,x,y);
    }
    else{
        p=setcolor(p,color,color,color);
    }
    if (e+f < ss){
        p=setcolor(p,255,137,color);
    }
    return p;
}

for (var p of tile.values()){
    var x=p.getX();
    var y=p.getY();
    p=draw(p,tile,256);
} 

print(tile);