$(function(){
    let color1=10, color2=30, color3=40;
    setInterval(function () {
        color1+=1, color2+=2, color3+=3;
        if(color1>=255 || color1<= -255) color1 = -color1
        if(color2>=255 || color3<= -255) color2 = -color2
        if(color3>=255 || color3<= -255) color3 = -color3
        $('body').css("background-color", `rgb(${Math.abs(color1)}, ${Math.abs(color2)}, ${Math.abs(color3)})`);
    }, 200)
})