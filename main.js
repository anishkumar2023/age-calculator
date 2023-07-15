                   // get the section
let section = document.getElementById("section")
section.setAttribute("class","text-center mt-5")

                         // created the div

let divone=document.createElement("div")
section.appendChild(divone)

                            // created the input-2

let inputdate=document.createElement("input")
divone.appendChild(inputdate)
inputdate.setAttribute("type","number")
inputdate.style="width:3%;margin:7px;"
inputdate.setAttribute("placeholder","date")


                            // created the input-2

let inputmon=document.createElement("input")
divone.appendChild(inputmon)
inputmon.style="width:3%;margin:7px;"
inputmon.setAttribute("type","number")
inputmon.setAttribute("placeholder","month")

                             // created the input

let input=document.createElement("input")
divone.appendChild(input)
input.setAttribute("type","number")
input.setAttribute("placeholder","Enter the year")


                                    // created the button

let inputone=document.createElement("button")
section.appendChild(inputone)
inputone.innerHTML="Enter"
inputone.setAttribute("onclick","show()")	
inputone.setAttribute("class","mt-3")
let para=document.getElementById("para")




function show(){
let date=new Date
let year=date.getFullYear()
let month=date.getMonth()+1
let dated=date.getDate()
let value=year-input.value
let datevalue=inputdate.value
let monthvalue=inputmon.value
// para.innerHTML=value
   
if(inputdate.value!==""&&input.value!==""&&inputmon.value!==""){
	if(inputmon.value<=month&&inputdate.value<=dated){
		para.innerHTML=value
		console.log(inputmon.value)
	console.log(inputdate.value)
	console.log(month)
	console.log(dated)
	}
	else{
		para.innerHTML=value-1
	console.log(inputmon.value)	
	console.log(inputdate.value)
	console.log(month)
	console.log(dated)
	}
}
}