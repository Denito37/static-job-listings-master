const box = document.querySelectorAll('.item');
const logo = document.querySelectorAll('.logo');
const company = document.querySelectorAll('.Company');
const tag = document.querySelectorAll(".Company .tag")
const title = document.querySelectorAll('.title');
const details = document.querySelectorAll('.details');
const icons = document.querySelectorAll('.icons');
const info = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

for(let i = 0; i< company.length; i++){
    company[i].innerHTML = info[i].company;
    if(info[i].new === 'true'){tag[i].innerHTML = 'new';}
    title[i].innerHTML = info[i].position;
    details[i].innerHTML= info[i].postedAt + info[i].contract + info[i].location;
    // * Filter buttons
    const btn = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const btn4 = document.createElement("button");
    const btn5 = document.createElement("button");
    const btn6 = document.createElement("button");
    const btn7 = document.createElement("button");
    btn.innerHTML = info[i].role;
    btn2.innerHTML = info[i].level;
    btn3.innerHTML = info[i].languages[0];
    btn4.innerHTML = info[i].languages[1];
    btn5.innerHTML = info[i].languages[2];
    btn6.innerHTML = info[i].tools[0];
    btn7.innerHTML = info[i].tools[1];
    icons[i].appendChild(btn);
    icons[i].appendChild(btn2);
    icons[i].appendChild(btn3);
    icons[i].appendChild(btn4);
    icons[i].appendChild(btn5);
    icons[i].appendChild(btn6);
    icons[i].appendChild(btn7);
    if(btn4.innerHTML == 'undefined'){
        icons[i].removeChild(btn4);
    }
    if(btn5.innerHTML == 'undefined'){
        icons[i].removeChild(btn5);
    }
    if(btn6.innerHTML == 'undefined'){
        icons[i].removeChild(btn6);
    }
    if(btn7.innerHTML == 'undefined'){
        icons[i].removeChild(btn7);
    }
    icons[i].addEventListener('click', () =>{
        console.log('object');
        // * add filter function
        if(contains(icons.value)){}
    });
}



/*
const data = fetch("./data.json")
    .then((response) => response.json() )
    .then((json) => console.log(json));

async function getData(){
    let response = await fetch("./data.json")
    let text = await response.json()
}
*/
