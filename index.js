function togglegrid() {
  let grid = document.getElementById("grid");
  let grid1 = document.getElementById("grid1");
  if (grid1.style.display != "none") {
    grid1.style.display = "none";
  } else {
    grid1.style.display = "block";
  }
}

function togglelist() {
  let lis = document.getElementById("lis");
  let listt = document.getElementById("listt");
  if (listt.style.display != "none") {
    listt.style.display = "none";
  } else {
    listt.style.display = "block";
  }
}
let users = [
  {
    eno: 900,
    name: "Yashodhan",
    skills: "HTML , CSS",
    img: "male.jpg",
    project: "Cognizant Internal ",
    HCM: "ALex",
  },
  {
    eno: 1400,
    name: "Apoorva",
    skills: "React, MongoDB",
    img: "female.jpg",
    project: "Cognizant Internal",
    HCM: "Alex",
  },

  {
    eno: 1100,
    name: "Anmol",
    skills: "Angular,JavaScript ",
    project: "Cognizant Internal ",
    img: "male.jpg",
    HCM: "Alex",
  },
  {
    eno: 1200,
    name: "Pratiksha",
    skills: "Angular, TypeScript",
    project: "Cognizant Internal ",
    img: "female.jpg",
    HCM: "Alex",
  },
  {
    eno: 1600,
    name: "Sayali",
    skills: "MYSQL, NodeJs",
    img: "female.jpg",
    project: "Cognizant Internal",
    HCM: "ALex",
  },

  {
    eno: 1000,
    name: "Aniket",
    skills: "React, Express JS",
    img: "male.jpg",
    project: "Cognizant Internal ",
    HCM: "Alex",
  },

  {
    eno: 1500,
    name: "Pooja",
    skills: "Django, Swift",
    img: "female.jpg",
    project: "Cognizant External",
    HCM: "Alex",
  },

  {
    eno: 1700,
    name: "Omkar",
    img: "male.jpg",
    skills: "Spring, SASS",
    project: "Cognizant Internal",
    HCM: "Alex",
  },
  {
    eno: 1300,
    name: "Manasa",
    skills: "BootStrap, CSS, HTML",
    project: "Cognizant Internal ",
    img: "female.jpg",
    HCM: "Alex",
  },
  {
    eno: 1800,
    name: "Pratik",
    skills: "Angular, SQL, PL/SQL",
    img: "male.jpg",
    project: "Cognizant External",
    HCM: "ALex",
  },
];

//  *********  *************CARD VIEW***************
function renderUsersGrid() {
  // console.log(users);

  // console.log("here", toggle);
  let html = "";

  for (let y = 0; y < users.length; y++) {
    let htmlSegment = `<div class="col ml-2  mt-4 bird"  >
                                  <div class="card">
                                          <i class="fal fa-times text-danger h1 x "  onclick="delBoth(${y})" ></i>  
                                          <img src="${users[y].img}" width="200px" height="220px" alt="">
                                              <div class="card-body">

                                                <table class="table">
                                                  <tr>
                                                    <td><b> Name </b></td>
                                                    <td><b>:</b></td>
                                                    <td> ${users[y].name}</td>

                                                  </tr>  
                                                  <tr>
                                                    <td><b> ID:</b></td>
                                                    <td><b>:</b></td>
                                                    <td> ${users[y].eno}</td>
                                                  </tr>  
                                                  <tr>
                                                    <td> <b>Skills</b></td>
                                                    <td><b>:</b></td>
                                                    <td>  <span id="id${y}"> ${users[y].skills}</span></td>
                                                  </tr>  
                                                  <tr>
                                                    <td> <b>Project</b></td>
                                                    <td><b>:</b></td>
                                                    <td> ${users[y].project}  </td>
                                                  </tr>
                                                  <tr>
                                                    <td> <b>HCM</b></td>
                                                    <td><b>:</b></td>
                                                    <td> ${users[y].HCM}</td>
                                                  </tr>
                                                </table>  
                                                             
                                      <button class="btn   text-primary  ml-auto" id="bte${y}" onclick="editSkill(${y})">Edit Skills</button>
                                 <button class="btn text-primary save" id="bts${y}" onclick="saveSkill(${y})" >Save</button>
                                 <button class="btn text-primary cancel button" style="display:none"  id="btc${y}" onclick="cancelSkill(${y})" >Cancel</button>
                                    
                          </div>
                      </div>
                  </div>`;

    html += htmlSegment;
  }
  let contai = document.querySelector(".contai");
  contai.innerHTML = html;
}
renderUsersGrid();
// ************ LIST DISPLAY***************

function renderUsersList() {
  let html2 = "";
  for (let y = 0; y < users.length; y++) {
    //  String/segment Concatination
    let htmlSegment2 = `
          <tr class="tRowDelete">
      
           <td>${users[y].name}</td>
           <td>${users[y].eno}</td>
                
           <td> <span id="sd1${y}"> ${users[y].skills}</span> </td>
            <td>${users[y].project}</td>
            <td>${users[y].HCM}</td>
           <td>   <button class="btn text-primary fad fa-edit h4" id="bte2${y}" onclick="editSkill(${y})"></button> &nbsp;
                                 <button class="btn text-primary save" id="bts2${y}" onclick="saveTable(${y})" >Save</button>
                                 <button class="btn text-primary cancel button" style="display:none"  id="btc2${y}" onclick="cancelSkill(${y})" >Cancel</button> 
                                 <i class="far fa-minus-octagon text-danger del h4" onclick="delBoth(${y})"></i>
                                 </td>
                                
                                 
                                 </tr>                            
          `;

    html2 += htmlSegment2;
  }

  let tableRow = document.querySelector(".tableRow");
  tableRow.innerHTML = html2;
  //  console.log(html2);
}
renderUsersList();
orderArray = [];
let lastElementIndex;
// ******************Edit functionality *****************************

function editSkill(index) {
  // renderUsersList();
  // renderUsersGrid();

  //  console.log("success "+index);

  // *************** edit for card**********
  let span, input, text;
  //  let id;

  //  id=index.toString();
  span = document.getElementById("id" + index);
  //  span.innerHTML
  // console.log(span.innerHTML);
  data1 = span.innerHTML;

  orderArray.push(data1);

  span.innerHTML =
    "<input type='text' class='form-control' id='dt" + index + "'>";
  let button = (document.getElementById("bte" + index).style.display = "none");
  let save = (document.getElementById("bts" + index).style.display = "inline");
  let cancel = (document.getElementById("btc" + index).style.display =
    "inline");
  lastElementIndex = orderArray.length - 1;

  // *********** Edit for table***************

  let span2, input2, text2;
  span2 = document.getElementById("sd1" + index);
  data2 = span2.innerHTML;
  span2.innerHTML = "<input type='text' id='dt2" + index + "'>";
  let button2 = (document.getElementById("bte2" + index).style.display =
    "none");
  let save2 = (document.getElementById("bts2" + index).style.display =
    "inline");
  let cancel2 = (document.getElementById("btc2" + index).style.display =
    "inline");

  //  input = document.createElement("input");
  //  document.querySelectorAll("span")[index]=
  //  console.log(span,input);
}
// *****************SAVE SKILLS****************************
function saveSkill(index) {
  let editButton = (document.getElementById("bte" + index).style.display =
    "inline");
  let data = document.getElementById("dt" + index).value;
  let save = (document.getElementById("bts" + index).style.display = "none");
  let span = document.getElementById("id" + index);
  this.document.getElementById("btc" + index).style.display = "none";
  span.innerHTML = data;
  users[index].skills = data;
  renderUsersList();
}
function saveTable(index) {
  let beta = document.getElementById("dt2" + index).value;
  this.document.getElementById("bte2" + index).style.display = "inline";
  this.document.getElementById("btc2" + index).style.display = "none";
  this.document.getElementById("bts2" + index).style.display = "none";
  this.document.getElementById("dt2" + index).style.display = "none";
  users[index].skills = beta;

  renderUsersGrid();
  renderUsersList();
}

function saveSkill2(index) {
  let editButton2 = (document.getElementById("bte2" + index).style.display =
    "inline");
  let data3 = document.getElementById("dt2" + index).value;
  let save2 = (document.getElementById("bts2" + index).style.display = "none");
  let span2 = document.getElementById("id2" + index);

  span2.innerHTML = data3;
  users[index].skills = data3;
  renderUsersList();
  // console.log(data);
}
function delBoth(index) {
  myFunctionList(index);
  myFunction(index);
}

function myFunction(index) {
  // console.log(index);

  // this.document.querySelector("#initial").style.display="none";
  this.document.querySelectorAll(".bird")[index].style.display = "none";
}
function myFunctionList(index) {
  this.document.querySelectorAll(".tRowDelete")[index].style.display = "none";
  // console.log(aree);
}

//  ******************Cancel Button*************************
function cancelSkill(index) {
  let span = document.getElementById("id" + index);

  span.innerHTML = orderArray[lastElementIndex--];

  console.log(span.innerHTML);
  this.document.getElementById("bts" + index).style.display = "none";
  let editButton = (document.getElementById("bte" + index).style.display =
    "inline");
  let cancel = (document.getElementById("btc" + index).style.display = "none");

  let span2 = document.getElementById("sd1" + index);

  span2.innerHTML = data2;
  this.document.getElementById("bts2" + index).style.display = "none";
  let editButton2 = (document.getElementById("bte2" + index).style.display =
    "inline");
  let cancel2 = (document.getElementById("btc2" + index).style.display =
    "none");

  
}

