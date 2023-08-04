function add_leading_zero(number)
{
    if(number<10)
    {
        return "0"+number.toString();
    }
    else{
        return number.toString();
    }
}

window.setInterval(function(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.getElementById("hour").innerHTML = add_leading_zero(h);
    document.getElementById("minute").innerHTML = add_leading_zero(m);
    document.getElementById("second").innerHTML = add_leading_zero(s);
},1000);

