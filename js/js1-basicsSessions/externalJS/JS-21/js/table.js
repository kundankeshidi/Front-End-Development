let employees=[
    {"id":101, "name":"kundan", "designation": "Manager", "salary":839000},
    {"id":102, "name":"Akhil", "designation": "Director", "salary":800000},
    {"id":103, "name":"Naveen", "designation": "Developer", "salary":29990},
    {"id":104, "name":"Rahul", "designation": "Sr. Developer", "salary":834000},
    {"id":105, "name":"Bellam", "designation": "Analyst", "salary":89000}
]
let table=document.createElement("table");
document.body.appendChild(table);
let tr=document.createElement("tr");
    table.appendChild(tr);
tr.innerHTML="<th>EmpId</th><th>EmpName</th><th>Designation</th><th>Salary</th><th>Operations</th>"
for(let emp of employees){
    let tr=document.createElement("tr");
    table.appendChild(tr);
    tr.innerHTML=`<td><input type="text" value="${emp.id}"></td>
                <td><input type="text" value="${emp.name}"></td>
                <td><input type="text" value="${emp.designation}"></td>
                <td><input type="text" value="${emp.salary}"></td>
                <td><button type="button" class="edit">Edit</button>
                    <button type="button" class="update">Update</button>
                    <button type="button" class="delete">Delete</button>
                </td>`;
}
table.style.border="solid 2px green"
table.style.borderCollapse="collapse";