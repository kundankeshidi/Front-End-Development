for(let ele of document.getElementsByClassName("update")){
    ele.style.display="none";
    ele.onclick=function(e){
        let target=e.target;
        target.style.display="none";
        target.previousElementSibling.style.display="inline-block";
        let row=target.parentElement.parentElement;
        console.log(row);
        for(let i=0;i<row.children.length-1;i++){
            row.children[i].children[0].disabled=true;
        }
    }
}