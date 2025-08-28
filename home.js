// console.log("welcome from the js file")

//Call button function work
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

//Heart click count
let totalHcount = 0;
const heartIcon = document.getElementById("heartIcon");
heartIcon.addEventListener("click", function () {
    totalHcount++;
    // console.log(totalHcount)
    document.getElementById("heartCount").innerText = totalHcount;
})
const hIPo = document.getElementById("hIPo");
hIPo.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})
const hIFi = document.getElementById("hIFi");
hIFi.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})
const hIAm = document.getElementById("hIAm");
hIAm.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})
const hIWC = document.getElementById("hIWC");
hIWC.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})
const hIAnti = document.getElementById("hIAnti");
hIAnti.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})
const hIElc = document.getElementById("hIElc");
hIElc.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})
const hIBrac = document.getElementById("hIBrac");
hIBrac.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})
const hIBR = document.getElementById("hIBR");
hIBR.addEventListener("click", function () {
    totalHcount++;
    document.getElementById("heartCount").innerText = totalHcount;
    // console.log(totalHcount)
})

//Copy part

let copyNum = 0;
document.getElementById("btnEmCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnEmCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnEmCopy").addEventListener("mouseout", function () {
    document.getElementById("btnEmCopy").style.backgroundColor = "white"
})

const btnEmCopy = document.getElementById("btnEmCopy");
btnEmCopy.addEventListener("click", function () {
    const emergencyNum = document.getElementById("emergencyNum").innerText;
    // console.log(emergencyNum);
    navigator.clipboard.writeText(emergencyNum)
        .then(() => {
            alert('This number is coping successfully: ' + emergencyNum);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnPoCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnPoCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnPoCopy").addEventListener("mouseout", function () {
    document.getElementById("btnPoCopy").style.backgroundColor = "white"
})

const btnPoCopy = document.getElementById("btnPoCopy");
btnPoCopy.addEventListener("click", function () {
    const policeNum = document.getElementById("policeNum").innerText;
    navigator.clipboard.writeText(policeNum)
        .then(() => {
            alert('This number is coping successfully: ' + policeNum);
            copyNum++;
            console.log(copyNum)
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnFiCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnFiCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnFiCopy").addEventListener("mouseout", function () {
    document.getElementById("btnFiCopy").style.backgroundColor = "white"
})

const btnFiCopy = document.getElementById("btnFiCopy");
btnFiCopy.addEventListener("click", function () {
    const fireNumber = document.getElementById("fireNumber").innerText;
    navigator.clipboard.writeText(fireNumber)
        .then(() => {
            alert('This number is coping successfully: ' + fireNumber);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnAmCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnAmCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnAmCopy").addEventListener("mouseout", function () {
    document.getElementById("btnAmCopy").style.backgroundColor = "white"
})

const btnAmCopy = document.getElementById("btnAmCopy");
btnAmCopy.addEventListener("click", function () {
    const ambulanceNum = document.getElementById("ambulanceNum").innerText;
    navigator.clipboard.writeText(ambulanceNum)
        .then(() => {
            alert('This number is coping successfully: ' + ambulanceNum);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnWCCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnWCCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnWCCopy").addEventListener("mouseout", function () {
    document.getElementById("btnWCCopy").style.backgroundColor = "white"
})

const btnWCCopy = document.getElementById("btnWCCopy");
btnWCCopy.addEventListener("click", function () {
    const wcNumber = document.getElementById("wcNumber").innerText;
    navigator.clipboard.writeText(wcNumber)
        .then(() => {
            alert('This number is coping successfully: ' + wcNumber);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnAntiCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnAntiCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnAntiCopy").addEventListener("mouseout", function () {
    document.getElementById("btnAntiCopy").style.backgroundColor = "white"
})

const btnAntiCopy = document.getElementById("btnAntiCopy");
btnAntiCopy.addEventListener("click", function () {
    const antiNumber = document.getElementById("antiNumber").innerText;
    navigator.clipboard.writeText(antiNumber)
        .then(() => {
            alert('This number is coping successfully: ' + antiNumber);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnElcCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnElcCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnElcCopy").addEventListener("mouseout", function () {
    document.getElementById("btnElcCopy").style.backgroundColor = "white"
})

const btnElcCopy = document.getElementById("btnElcCopy");
btnElcCopy.addEventListener("click", function () {
    const elcNumber = document.getElementById("elcNumber").innerText;
    navigator.clipboard.writeText(elcNumber)
        .then(() => {
            alert('This number is coping successfully: ' + elcNumber);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnBracCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnBracCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnBracCopy").addEventListener("mouseout", function () {
    document.getElementById("btnBracCopy").style.backgroundColor = "white"
})

const btnBracCopy = document.getElementById("btnBracCopy");
btnBracCopy.addEventListener("click", function () {
    const ngoNumber = document.getElementById("ngoNumber").innerText;
    navigator.clipboard.writeText(ngoNumber)
        .then(() => {
            alert('This number is coping successfully: ' + ngoNumber);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})

document.getElementById("btnBRCopy").addEventListener("mouseenter", function () {
    document.getElementById("btnBRCopy").style.backgroundColor = "lightgray"
})
document.getElementById("btnBRCopy").addEventListener("mouseout", function () {
    document.getElementById("btnBRCopy").style.backgroundColor = "white"
})

const btnBRCopy = document.getElementById("btnBRCopy");
btnBRCopy.addEventListener("click", function () {
    const brNumber = document.getElementById("brNumber").innerText;
    navigator.clipboard.writeText(brNumber)
        .then(() => {
            alert('This number is coping successfully: ' + brNumber);
            copyNum++;
            document.getElementById("copyC").innerText = copyNum;
        })
        .catch(err => {
            console.error('Failed to copy number: ', err);
        });
})