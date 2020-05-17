for(let ele of document.getElementsByClassName("delete")){
    ele.onclick=function(e){
        let target=e.target;
        
        let row=target.parentElement.parentElement;
        console.log(row);
        if(confirm("are you sure to delete")){
        row.remove();
        }
    }
}