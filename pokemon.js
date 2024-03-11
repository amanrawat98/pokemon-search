let input = document.getElementById("input");
let btn = document.querySelector("#button");

let url = "https://pokeapi.co/api/v2/pokemon/ditto";

let inputdata = "";

let saveData = () => {
  inputdata = input.value.toLowerCase();
  console.log(inputdata);
  fetchdata();
  input.value = '';
};

let fetchdata = async () => {
  try {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputdata}`);
    if (data.ok == true) {
      let latestdata =  await data.json();
      console.log("latest",latestdata);
      let url = latestdata.sprites.front_default;
      console.log(url);
      let imgtag = document.querySelector("#pokemon-img");
      imgtag.src = url;
      imgtag.style.display = "block";
      //inputdata.value = '';

      

    } else {
      throw new Error("no data found");
    }
    console.log("data is", data);
  } catch (error) {
    let imgtag = document.querySelector("#pokemon-img");
    imgtag.src = url;
    imgtag.style.display = "none";
    console.log(error);
  }
};

btn.addEventListener("click", saveData);
