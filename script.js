function waitLoad(){
    return new Promise((resolve) =>{
        document.addEventListener("DOMContentLoaded",() =>{
            resolve();
        });
    });
}

function waitClick(element,text){
    return new Promise(resolve => {
        const btn = document.createElement("button");
        btn.innerText = text;
        btn.addEventListener("click",() => {
            btn.remove();
            resolve();
        });
        element.appendChild(btn);
    });
}

async function count() {
    await waitLoad();
    await waitClick(document.body.querySelector("div"), "1");
    console.log(1)
}

count();

async function waitClik3(){
    await waitClick(document.body,"Раз")
    await waitClick(document.body,"Два")
    await waitClick(document.body,"Три")
}

async function main(){
    await Promise;
    await waitClik3()
    console.log("Гуд")
}
main()