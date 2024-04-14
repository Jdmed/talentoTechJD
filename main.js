function validateName(){
    let name = document.getElementById("name").value;
    let formato = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    let nameFlag = 0;
    if(name==""){
        document.getElementById("errorName").style.display="block";
        document.getElementById("errorName").innerHTML="Name is mandatory"
    } else if(!(formato.test(name))){
        document.getElementById("errorName").style.display="block";
        document.getElementById("errorName").innerHTML="Invalid name characters"
    }else {
        document.getElementById("errorName").style.display="none";
        nameFlag = 1;
    }
    return nameFlag;
}

function validatePhone(){
    let phone = document.getElementById("phone").value;
    let formato = /^3[0-9]{2}-[0-9]{4}-[0-9]{3}$/;
    let phoneFlag = 0;
    if(phone==""){
        document.getElementById("errorPhone").style.display="block";
        document.getElementById("errorPhone").innerHTML="Phone is mandatory"
    } else if(!(formato.test(phone))){
        document.getElementById("errorPhone").style.display="block";
        document.getElementById("errorPhone").innerHTML="Invalid phone format"
    }else {
        document.getElementById("errorPhone").style.display="none";
        phoneFlag = 1;
    }
    return phoneFlag;
}
function priceVehicle(){
    let vehicle = document.getElementById("vehiculo").value;
    let costVehicle = 0;
    switch (vehicle){
        case "automovil":
            costVehicle = 100000;
        break;
        case "camioneta":
            costVehicle = 200000;
        break;
        case "motocicleta":
            costVehicle = 50000;
        break;
        case "microbus":
            costVehicle = 500000;
        break;
    }
    return costVehicle;
}
function towTruckValues(){
    let severity = document.getElementById("severidad").value;
    var towTruck = {
        model: "Ford",
        time: 0,
        cost: 0,
      };
    switch (severity){
        case "baja":
            towTruck.cost = priceVehicle()*1.2;
            towTruck.time = 90;
        break;
        case "media":
            towTruck.cost = priceVehicle()*1.5;
            towTruck.time = 60;
        break;
        case "urgente":
            towTruck.cost = priceVehicle()*2;
            towTruck.time = 30;
        break;
    }
    return towTruck;
}
function truckAlert(){
    const grua = towTruckValues();
    window.alert(`Se enviará una grúa marca ${grua.model} en aproximadamente ${grua.time} minutos con un valor de $${grua.cost}`);
    console.log(priceSeverity());
}

function validateFields(){
    let nameFlag = validateName();
    let phoneFlag = validatePhone();
    if(nameFlag && phoneFlag){
        truckAlert();
    }
}


document.getElementById("btnSend").addEventListener("click", validateFields);