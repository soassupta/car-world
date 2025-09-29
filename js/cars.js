const searchInput =document.getElementById("search");
const carCards=document.querySelectorAll(".car");

 searchInput.addEventListener("keyup",() =>{
    const query = searchInput.value.toLowerCase();

    carCards.forEach(car=>{
        const carName=car.getAttribute("data-name").toLowerCase();
        car.style.display=carName.includes(query)? "block":"none";
    });
 });

 function filterCars(type){
    carCards.forEach(car=>{
        const carType =car.getAttribute("data-type");

        if(type==="all"||carType === type){
            car.style.display="block";
        }else{car.style.display="none"}
    });
    searchInput.value="";
 }