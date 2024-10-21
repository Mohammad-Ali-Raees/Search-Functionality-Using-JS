
let Timeout;
let MyData = [
    {
        Name: "Abdur Rehman",
        Fname: "Jawad Ahmed"
    },
    {
        Name: "Abdur Raheem",
        Fname: "Jawad Ahmed"
    },
    {
        Name: "Anabia",
        Fname: "Zakir Ahmed"
    },
    {
        Name: "Mohammad Ali",
        Fname: "Raees Ahmed"
    },
    {
        Name: "Hassan",
        Fname: "Shoiab Ahmed"
    },
    {
        Name: "Ahmed",
        Fname: "Shoaib Ahmed"
    },
    {
        Name: "Hamza",
        Fname: "Shoaib Ahmed"
    },
    {
        Name: "Harry Potter",
        Fname: "James Potter"
    },
    {
        Name: "Dom Nick",
        Fname: "Toreto"
    }
];



//* Spinner Loader
function Spinner() {
    document.querySelector(".Database_Data").innerHTML =
        `
     <div class="spinner-grow text-light" role="status">
     <span class="visually-hidden">Loading...</span>
     </div>     
    `
}


//* Find Data Usign Keyup
document.querySelector(".SearchBar").addEventListener("keyup", (e) => {

    const FilteredData = MyData.filter(elem => {
        return (
            elem.Fname.toLowerCase().trim().includes(e.target.value) || elem.Name.toLowerCase().trim().includes(e.target.value)
        )
    })



    Spinner(); // When Data Not Display Show Spinner
    //* Show Result After 1 Second
    Timeout = setTimeout(() => {
        DisplayData(FilteredData)
        clearTimeout(Timeout)
    }, 1000);

})



//* Display Array Data
function DisplayData(Data) {
    let html = '';
    Data.forEach(e => {
        html +=
            `
     <div class="col-md-4 ">
     <div class="mb-3 border p-2 rounded">
     <div class="card" >
     <div class="card-body">
     <h5 class="card-title">${e.Name}</h5>
     <p class="card-text">${e.Fname}</p>
     </div>
     </div>
     </div>    
     </div>

      `
    })

    document.querySelector(".Database_Data").innerHTML = html
}


DisplayData(MyData)
