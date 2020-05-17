for(let ele of document.getElementsByClassName("edit")){
    ele.onclick=function(e){
        let target=e.target;
        target.style.display="none";
        target.nextElementSibling.style.display="inline-block";
        let row=target.parentElement.parentElement;
        console.log(row);
        for(let i=0;i<row.children.length-1;i++){
            row.children[i].children[0].disabled=false;
        }
    }
}