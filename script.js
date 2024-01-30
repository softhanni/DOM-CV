
var body = document.body;

body.style.backgroundColor = "black";

var h1 = document.createElement ("h1");

var h1Content = document.createTextNode("Muhammad Hanif")

h1.appendChild(h1Content);
h1.style.color = "red";
// h1.style.boxShadow = "rgba(228, 247, 247,0.1)";
body.appendChild(h1);

h1.style.paddingLeft= "500px"


var img = document.createElement("img");
img.src = "hanif.webp";
img.style.marginLeft ="489px";
img.style.borderRadius = "50%";
// img.style.boxShadow= "rgba(228, 247, 247,0.1)";
body.appendChild(img);


var edu = document.createElement("h1");

var eduContent = document.createTextNode("Education");
edu.style.color = "red";
edu.style.paddingLeft="552PX";
edu.appendChild(eduContent);
body.appendChild(edu);

var ul = document.createElement("ul");
var bsc = document.createTextNode("BSc : SAU TandoJam : \(1st Division)");
ul.style.paddingLeft = "410px";
ul.style.fontSize ="30px";
ul.style.color = "white";
ul.appendChild(bsc);
body.appendChild(ul);


var ul = document.createElement("ul");
var college = document.createTextNode("Intermediate : Noor Shah Bukhari : \(B Grade)");
ul.style.paddingLeft = "355px";
ul.style.fontSize ="30px";
ul.style.color = "white";
ul.appendChild(college);
body.appendChild(ul);


var ul = document.createElement("ul");
var school = document.createTextNode("Matric : Al-Mehmood: \(B Grade)");
ul.style.paddingLeft = "430px";
ul.style.fontSize ="30px";
ul.style.color = "white";
ul.appendChild(school);
body.appendChild(ul);


var h1 = document.createElement("h1");
var skills = document.createTextNode("Skills");
h1.style.color = "red";
h1.style.paddingLeft="585PX";
h1.appendChild(skills);
body.appendChild(h1);


var ul = document.createElement("ul");
var skill = document.createTextNode("HTML, CSS, JavaScript");
ul.style.paddingLeft = "485px";
ul.style.fontSize ="30px";
ul.style.color = "white";
ul.appendChild(skill);
body.appendChild(ul);


var h1 = document.createElement("h1");
var contact = document.createTextNode("Contact");
h1.style.color = "red";
h1.style.paddingLeft="575PX";
h1.appendChild(contact);
body.appendChild(h1);


var p = document.createElement("p");
var email = document.createTextNode("softhanni@gmail.com");
p.style.color="white";
p.style.fontSize="30px"
p.style.paddingLeft="500px";
p.appendChild(email);
body.appendChild(p);






