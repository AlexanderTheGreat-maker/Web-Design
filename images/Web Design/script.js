 function orderNow() {
 document.getElementById("order-form").scrollIntoView({
    behavior: "smooth"
    }) ;
 }

 function viewMeals() {

 document.getElementById("meals").scrollIntoView({
    behavior: "smooth"
 });
}

 const mealPrices = {
    
 };

function updatePrice() {

    let total = 0;

    const menu = [

        // MAIN MEALS
        { id:"jollofChicken", qty:"jollofChickenQty", price:5000 },
        { id:"friedChicken", qty:"friedChickenQty", price:5500 },
        { id:"jollofTurkey", qty:"jollofTurkeyQty", price:6000 },
        { id:"friedTurkey", qty:"friedTurkeyQty", price:6000 },
        { id:"nativeRiceTurkey", qty:"nativeRiceTurkeyQty", price:8500 },
        { id:"nativePastaTurkey", qty:"nativePastaTurkeyQty", price:8500 },
        { id:"nativeRiceChicken", qty:"nativeRiceChickenQty", price:7500 },
        { id:"nativePastaChicken", qty:"nativePastaChickenQty", price:7500 },

        // BBQ
        { id:"bbqChicken", qty:"bbqChickenQty", price:7000 },
        { id:"bbqTurkey", qty:"bbqTurkeyQty", price:8000 },
        { id:"bbqFish", qty:"bbqFishQty", price:15000 },
        { id:"fullBbqChicken", qty:"fullBbqChickenQty", price:25000 },

        // SHAWARMA
        { id:"shawarmaOne", qty:"shawarmaOneQty", price:3500 },
        { id:"shawarmaTwo", qty:"shawarmaTwoQty", price:4000 },

        // SMALL CHOPS
        { id:"smallChopsCup", qty:"smallChopsCupQty", price:2500 },
        { id:"smallChopsZobo", qty:"smallChopsZoboQty", price:3000 },
        { id:"chinChin", qty:"chinChinQty", price:3000 },
        { id:"plantainChips", qty:"plantainChipsQty", price:2000 },

        // PLATTERS
        { id:"platter5", qty:"platter5Qty", price:12000 },
        { id:"platter10", qty:"platter10Qty", price:24000 },
        { id:"stew2L", qty:"stew2LQty", price:20000 },

        // SOUPS
        { id:"ogbonoSoup", qty:"ogbonoSoupQty", price:25000 },
        { id:"efoRiroSoup", qty:"efoRiroSoupQty", price:25000 },
        { id:"edikaikongSoup", qty:"edikaikongSoupQty", price:30000 },
        { id:"egusiSoup", qty:"egusiSoupQty", price:25000 },
        { id:"poundedYamMeal", qty:"poundedYamMealQty", price:6000 },
        { id:"amalaMeal", qty:"amalaMealQty", price:5000 }

    ];

    menu.forEach(item => {

        if(document.getElementById(item.id).checked){

            const qty = parseInt(document.getElementById(item.qty).value) || 1;

            total += item.price * qty;

        }

    });

    // Extras

    if(document.getElementById("extraEgg").checked)
        total += 500;

    if(document.getElementById("extraPlantain").checked)
        total += 500;

    if(document.getElementById("extraSausage").checked)
        total += 500;

    if(document.getElementById("extraBeef").checked)
        total += 1000;

    document.getElementById("totalPrice").textContent = total.toLocaleString();

}

 function placeOrder(event) {
    event.preventDefault();

    let name =
 document.getElementById("name").value;

    let phone =
document.getElementById("phone").value;

    let address =
document.getElementById("address").value;

    let note = 
 document.getElementById("note").value;

    let meals = [];
    let total = 0;
    let extras = [];
    
    const menu = [

    // MAIN MEALS
    { id:"jollofChicken", qty:"jollofChickenQty", name:"Jollof Rice with Chicken", price:5000 },
    { id:"friedChicken", qty:"friedChickenQty", name:"Fried Rice with Chicken", price:5500 },
    { id:"jollofTurkey", qty:"jollofTurkeyQty", name:"Jollof Rice with Turkey", price:6000 },
    { id:"friedTurkey", qty:"friedTurkeyQty", name:"Fried Rice with Turkey", price:6000 },
    { id:"nativeRiceTurkey", qty:"nativeRiceTurkeyQty", name:"Native Rice with Turkey & Egg", price:8500 },
    { id:"nativePastaTurkey", qty:"nativePastaTurkeyQty", name:"Native Pasta with Turkey & Egg", price:8500 },
    { id:"nativeRiceChicken", qty:"nativeRiceChickenQty", name:"Native Rice with Chicken & Egg", price:7500 },
    { id:"nativePastaChicken", qty:"nativePastaChickenQty", name:"Native Pasta with Chicken & Egg", price:7500 },

    // BBQ
    { id:"bbqChicken", qty:"bbqChickenQty", name:"BBQ Chicken", price:7000 },
    { id:"bbqTurkey", qty:"bbqTurkeyQty", name:"BBQ Turkey", price:8000 },
    { id:"bbqFish", qty:"bbqFishQty", name:"BBQ Fish", price:15000 },
    { id:"fullBbqChicken", qty:"fullBbqChickenQty", name:"Full BBQ Chicken", price:25000 },

    // SHAWARMA
    { id:"shawarmaOne", qty:"shawarmaOneQty", name:"Shawarma (1 Sausage)", price:3500 },
    { id:"shawarmaTwo", qty:"shawarmaTwoQty", name:"Shawarma (2 Sausages)", price:4000 },

    // SMALL CHOPS
    { id:"smallChopsCup", qty:"smallChopsCupQty", name:"Small Chops per Cup", price:2500 },
    { id:"smallChopsZobo", qty:"smallChopsZoboQty", name:"Small Chops with Zobo", price:3000 },
    { id:"chinChin", qty:"chinChinQty", name:"Chin Chin", price:3000 },
    { id:"plantainChips", qty:"plantainChipsQty", name:"Plantain Chips", price:2000 },

    // PLATTERS
    { id:"platter5", qty:"platter5Qty", name:"Platter for 5", price:12000 },
    { id:"platter10", qty:"platter10Qty", name:"Platter for 10", price:24000 },
    { id:"stew2L", qty:"stew2LQty", name:"2 Litres of Stew", price:20000 },

    // SOUPS
    { id:"ogbonoSoup", qty:"ogbonoSoupQty", name:"2 Litres of Ogbono", price:25000 },
    { id:"efoRiroSoup", qty:"efoRiroSoupQty", name:"2 Litres of Efo Riro", price:25000 },
    { id:"edikaikongSoup", qty:"edikaikongSoupQty", name:"2 Litres of Edikaikong", price:30000 },
    { id:"egusiSoup", qty:"egusiSoupQty", name:"2 Litres of Egusi", price:25000 },
    { id:"poundedYamMeal", qty:"poundedYamMealQty", name:"Pounded Yam with Soup", price:6000 },
    { id:"amalaMeal", qty:"amalaMealQty", name:"Amala, Gbegiri & Ewedu", price:5000 }

];

    menu.forEach(item => {
        if
    (document.getElementById(item.id).checked) {
            let qty =
    Number(document.getElementById(item.qty).value);
            meals.push(`${item.name} x${qty}`);
            total += item.price * qty;
    }
});


// Extras
if(document.getElementById("extraEgg").checked){
    extras.push("Extra Egg");
    total += 500;
}

if(document.getElementById("extraPlantain").checked){
    extras.push("Extra Plantain");
    total += 500;
}

if(document.getElementById("extraSausage").checked){
    extras.push("Extra Sausage");
    total += 500;
}

if(document.getElementById("extraBeef").checked){
    extras.push("Extra Beef");
    total += 1000;
}


    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (phone ===  "") {
        alert("Please enter your phone number");
        return;
    }

    if (address === "") {
        alert("Please enter your delivery address.");
        return;
    }
       
   let orderMessage =
   document.getElementById("orderMessage");

   orderMessage.style.display = "block";

   orderMessage.innerHTML = `🎉 Thank you, <b>${name}</b><br><br>


   📞 Phone: <b>${phone}</b>
   
   📍 Address: <b>${address}</b><br><br>

   We'll contact you shortly.
   `;

   let message = `Hello! I want to place an order.

   Name: ${name}
   Phone: ${phone}
   Address: ${address}

   Meals Ordered:
   ${meals.join('\n')}

   Extras:
   ${extras.length ? extras.join('/n') : "None"}

   Total Price: ₦${total.toLocaleString()}

   Extra Instruction: ${note}`;

   const url =
   `https://wa.me/2347018016765?text=${encodeURIComponent(message)}`;

   window.open(url, "_blank");

   // Reset the whole form
document.getElementById("order-form").reset();

// Reset all quantity boxes back to 1
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.value = 1;
});

// Reset total price
document.getElementById("totalPrice").textContent = "0";
 }

 updatePrice();

 document.getElementById("order-form").addEventListener("submit", placeOrder);