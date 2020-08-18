const switchPage = function(id){

    document.querySelectorAll(".GroupDetailPage").forEach(
        (i)=>{
            i.classList.add("hide");
        }

    )

    document.querySelector(`#${id}`).classList.remove("hide");
}







let nodeList = document.querySelectorAll(".GroupLink");
// console.log(nodeList);

nodeList.forEach(
    (i)=>{
        i.addEventListener(
            'click',(e)=>{
                let tid = e.currentTarget.getAttribute("value");
                // console.log(e.currentTarget, tid);
                switchPage(tid);
            }
        )
    }
)