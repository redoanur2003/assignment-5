// console.log("welcome from the js file")

let coin = parseInt(document.getElementById("coinCount").innerText);

const btnEmCall = document.getElementById("btnEmCall");
btnEmCall.addEventListener("click", function () {
    // console.log("call click")
    const s = document.getElementById("naEm").innerText;
    const t = document.getElementById("emergencyNum").innerText;

    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)

        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }

})

const btnPoCall = document.getElementById("btnPoCall");
btnPoCall.addEventListener("click", function () {
    const s = document.getElementById("Pname").innerText;
    const t = document.getElementById("policeNum").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

const btnFiCall = document.getElementById("btnFiCall");
btnFiCall.addEventListener("click", function () {
    const s = document.getElementById("fname").innerText;
    const t = document.getElementById("fireNumber").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

const btnAmCall = document.getElementById("btnAmCall");
btnAmCall.addEventListener("click", function () {
    const s = document.getElementById("amName").innerText;
    const t = document.getElementById("ambulanceNum").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

const btnWCCall = document.getElementById("btnWCCall");
btnWCCall.addEventListener("click", function () {
    const s = document.getElementById("wc").innerText;
    const t = document.getElementById("wcNumber").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

const btnAntiCall = document.getElementById("btnAntiCall");
btnAntiCall.addEventListener("click", function () {
    const s = document.getElementById("anti").innerText;
    const t = document.getElementById("antiNumber").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

const btnElcCall = document.getElementById("btnElcCall");
btnElcCall.addEventListener("click", function () {
    const s = document.getElementById("elc").innerText;
    const t = document.getElementById("elcNumber").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

const btnBracCall = document.getElementById("btnBracCall");
btnBracCall.addEventListener("click", function () {
    const s = document.getElementById("brac").innerText;
    const t = document.getElementById("ngoNumber").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

const btnBRCall = document.getElementById("btnBRCall");
btnBRCall.addEventListener("click", function () {
    const s = document.getElementById("br").innerText;
    const t = document.getElementById("brNumber").innerText;
    if (coin >= 20) {

        alert("📞 Calling " + s + " " + t)
        // create child
        const newDiv = document.createElement("div");
        const para = document.createElement("p");
        para.innerText = s;
        const para2 = document.createElement("p");
        para2.innerText = t;

        //call parent

        const parentH = document.getElementById("callInfo");
        const parent = document.createElement("div");
        parent.classList.add("common")

        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        parent.appendChild(newDiv);

        // adding main head parent

        parentH.appendChild(parent);

        //getting date
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const time = document.createElement("div");
        const pTime = document.createElement("p");
        pTime.innerText = formattedTime;
        time.appendChild(pTime);
        parent.appendChild(time)

        parentH.appendChild(parent)
        coin = coin - 20;
        document.getElementById("coinCount").innerText = coin;
    }

    else {
        alert("❌ You don't have enough coin for calling.You need minimum 20 coin for calling any service")
    }
})

//clear action
document.getElementById("clear").addEventListener("click", function () {
    // console.log("clear now")
    coin = 100;
    document.getElementById("coinCount").innerText = coin;
    document.getElementById("callInfo").innerHTML = "";

})