function generateObject() {
    let x = ""
    let Objs = getObj()
    for (let i = 0; i < Objs.length; i++) {
        x += `
        <div id="Objs">
        <div id="ObjCoun${Objs[i].id}t">
        <i id="Up" class="fa-solid fa-angle-up"></i>
        <span>${Objs[i].Count}</span>
        <i class="fa-solid fa-angle-down"></i>
        </div>
        <div id="ObjName${Objs[i].id}">
        <p>${Objs[i].Name}</p>
        </div>
        <div id="ObjPrice${Objs[i].id}">
        <p>${Objs[i].Price}$</p>
        </div>
        </div>`;
    }
    document.getElementById("Objects").innerHTML = x
}
function createObj() {
    let input1 = document.getElementById("name")
    let input2 = document.getElementById("count")
    let input3 = document.getElementById("price")
    
    let biggestObjId = 0
    let Objs = getObj()
    for (let i = 0; i < Objs.length; i++) {
        if (Objs[i].id > biggestObjId) {
            biggestObjId = Objs[i].id
        }
    }
    let newObj = {
        id: biggestObjId + 1,
        Name: input1.value,
        Count: input2.value,
        Price: input3.value,
    }
    Objs.push(newObj)
    setObj(Objs)
    generateObject()
    input1.value = ""
    input2.value = ""
    input3.value = ""
}
function setObj(arr) {
    localStorage.setItem('Objects', JSON.stringify(arr));
}
function getObj() {
    return JSON.parse(localStorage.getItem("Objects") || "[]")
}