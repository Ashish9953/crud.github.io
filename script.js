var selectedRow = null;
function onFormSubmit(e){

   event.preventDefault();
     
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["studentId"] = document.getElementById("studentId").value;
    formData["studentName"] = document.getElementById("studentName").value;
    formData["stream"] = document.getElementById("stream").value;
    formData["marks"] = document.getElementById("marks").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var data1 = newRow.insertCell(0);
        data1.innerHTML = data.studentId;
    var data2 = newRow.insertCell(1);
        data2.innerHTML = data.studentName;
    var data3 = newRow.insertCell(2);
        data3.innerHTML = data.stream;
    var  data4 = newRow.insertCell(3);
        data4.innerHTML = data.marks;
    var data5= newRow.insertCell(4);
        data5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentId').value = selectedRow.cells[0].innerHTML;
    document.getElementById('studentName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('stream').value = selectedRow.cells[2].innerHTML;
    document.getElementById('marks').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.studentId;
    selectedRow.cells[1].innerHTML = formData.studentName;
    selectedRow.cells[2].innerHTML = formData.stream;
    selectedRow.cells[3].innerHTML = formData.marks;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('stream').value = '';
    document.getElementById('marks').value = '';
}


//filter function
function searchDetails()
 
    {
       let filter=document.getElementById("idSearch").value.toUpperCase();
       let myTable=document.getElementById("storeList").getElementsByTagName('tbody')[0];
        let tr=myTable.getElementsByTagName('tr');

        for(var i=0;i<tr.length;i++)
        {
            let td=tr[i].getElementsByTagName('td')[0];


            if(td)
            {
                let textvalue=(td.textContent || td.innerHTML);
                if(textvalue.toUpperCase().indexOf(filter)>-1)
                {
                    tr[i].style.display="";
                }
                else
                {
                  tr[i].style.display="none";
                }
                
            }
        }

    }
    //clear data in input form
    function clearData()

    {     let myTable=document.getElementById("storeList").getElementsByTagName('tbody')[0];   
         let tr=myTable.getElementsByTagName('tr');
        document.getElementById("idSearch").value = "";
         for(var i=0;i<tr.length;i++)
         {
            tr[i].style.display="";
         }
    }

