function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}
	}
	htp.send(null);
}

getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);

	profile(data.profile);
	career(data.career);
	edu(data.education);
	language(data.languages);
})


var left=document.querySelector(".leftdiv");
function profile(p)
{
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);
	var proll=document.createElement("p");
	proll.textContent=p.roll;
	left.appendChild(proll);
	var ph5=document.createElement("p");
	ph5.textContent=p.institute;
	left.appendChild(ph5);
	var ph6=document.createElement("p");
	ph6.textContent=p.place;
	left.appendChild(ph6);
}
var right=document.querySelector(".rightdiv");
function career(car){
	var hc=document.createElement("h1");
	hc.innerHTML="Resume";
	right.appendChild(hc);

	var cc=document.createElement("h2");
	cc.innerHTML="career objective:";
	right.appendChild(cc);
	var chr=document.createElement("hr");
	right.appendChild(chr);
	var pinfo=document.createElement("p");
	pinfo.textContent=car.info;
	right.appendChild(pinfo);
}



var right=document.querySelector(".rightdiv");
function edu(e)
{
	var ed=document.createElement("h2");
	ed.innerHTML="Education detailes:";
	right.appendChild(ed);
	var ehr=document.createElement("hr");
	right.appendChild(ehr);
	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>s.no</td><td>degree</td><td>institute</td><td>yop</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++)
	{
		tr2=tr2+"<tr><td>"+e[i].s+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yearofpassing+"</td></tr>";
	}
	etable.innerHTML=tr1+tr2;
	right.appendChild(etable);

}

var right=document.querySelector(".rightdiv");
function language(lang){
	var la=document.createElement("h2");
	la.innerHTML="languages known";
	right.appendChild(la);
	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td><h3>types of languages</h3></td></tr>";
	var tr2="";
	for(i=0;i<lang.length;i++)
	{
		tr2=tr2+"<tr><td>"+lang[i].lang+"</td></tr>";
	}
	etable.innerHTML=tr1+tr2;
	right.appendChild(etable);

}

