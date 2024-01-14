function calcSphere(){
    let volum;
    let radius = document.getElementById("radius").value;
    radius = Math.abs(radius);
    volum = (4/3) * Math.PI * Math.pow(radius, 3);
    volum = volum.toFixed(4);
    document.getElementById("volum").value = volum;
    return false;
}

window.onload = document.getElementById("calcF").onsubmit = calcSphere;