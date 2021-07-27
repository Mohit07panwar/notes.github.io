DisplayAddNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    let text = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(text.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    text.value = '';
    //console.log(notesobj);

    DisplayAddNotes();

});
function DisplayAddNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";

    notesobj.forEach(function (element, index) {
        html += `
         <div class="cardNote my-2 mx-2 card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5>
           <p class=" card-text">${element}</p>
           <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
         </div>
       </div> `
    });

    let nodelem = document.getElementById("notes");
    if (notesobj.length != 0) {
        nodelem.innerHTML = html;
    }
    else {
        nodelem.innerHTML = `Nothig to show! Use "Add a note" section to add notes.`
    }
}

function deleteNode(index) {
    // console.log("i am deleting",index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    DisplayAddNotes();
}

let searchTxt = document.getElementById("searchTxt");

searchTxt.addEventListener("input", () => {
    let inputVal = searchTxt.value.toLowerCase();
    let cardNote = document.getElementsByClassName("cardNote");
    Array.from(cardNote).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);

    });
    // console.log(cardNode);
    // console.log(inputVal);

})



