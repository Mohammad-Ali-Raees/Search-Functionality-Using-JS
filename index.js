let Timeout;
let DataArray = [];
let FilteredData;


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

    FilteredData = DataArray.filter(elem => {
        return (
            elem.Fname.toLowerCase().includes(e.target.value) || elem.Name.toLowerCase().includes(e.target.value)
        )
    })

    Spinner(); // When Data Not Display Show Spinner
    //* Show Result After 1 Second
    Timeout = setTimeout(() => {
        DisplayData(FilteredData)
        clearTimeout(Timeout)
    }, 1000);

})

// Call Data From Json Using FETCH API
async function DataFromdatabase() {
    try {
        let Data = await fetch(`http://127.0.0.1:5500/data.json`)
        let response = await Data.json();
        response.MyData.map(elem => DataArray.push(elem));
    } catch (error) {
        console.log(error)
    }


}


//* Display Array Data
async function DisplayData(data) {
    await DataFromdatabase() // Call Async Function
    let html = '';
    data.forEach(e => {
        html +=
            `
     <div class="col-md-4 ">
     <div class="mb-3 border p-2 rounded">
     <div class="card">
     <div class="card-body">
     <h5 class="card-title display-5">${e.Name}</h5>
     <p class="card-text">${e.Fname}</p>
     <p class="card-text">${e.age}</p>
     <p class="card-text">${e.email}</p>
     <p class="card-text">${e.location}</p>
     </div>
     </div>
     </div>    
     </div>

      `
    })

    document.querySelector(".Database_Data").innerHTML = html
}


DisplayData(DataArray)