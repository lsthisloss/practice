"use strict";
//chart
var maleCounter = 0;
var femaleCounter = 0;
var color = false;
var blockOn = -1;
function showChart() {
    modal.style.display = 'block';
}
function closeChart() {
    modal.style.display = 'none';
}
//addition info showing and hiding
function showInfo(id) {
    var element = document.getElementById("uniq_"+id);
	if(blockOn !== -1 && blockOn !== id)
	fullInfoClose(blockOn);
    if (element.style.display === "none") {
        element.style.display = "table-row";
		      document.getElementById("unique_"+id).src = 'minus.png';
		blockOn = id;
  } else {
    element.style.display = "none";
		fullInfoClose(id);

  }
}
function fullInfoClose(id) {
    var fullInfo = document.getElementById('uniq_' + id);
    fullInfo.style.display = 'none';
    document.getElementById('unique_'+id).src = 'plus.png';
    blockOn = -1;
}
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td,tds, i;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
	  
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
	
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "table-row";
			tr.innerHTML =td;
      } else {
        tr[i].style.display = "none";


      }

    }

  }
  	
}
//do request to api
    const response = fetch("https://randomuser.me/api/?results=27").then(
	 res=>{res.json()
	 .then(data=>{console.log(data);
	 var buf = "";
	 data.results.forEach((element)=>{
//count females and males
	if (element.gender ==='male') maleCounter++; else femaleCounter++; 
//color of rows
	 if(color==false){
        buf+="<tr style=\"cursor: pointer; background-color:#cccccc;\"id="+element.login.uuid+" onclick=\"showInfo(this.id)\" >";
        color = true;
    }
else{
	 buf+="<tr style=\"cursor: pointer; background-color:#ededed;\"id="+element.login.uuid+" onclick=\"showInfo(this.id)\">";
	 color = false;
	}
//adding elements (short info)
	buf+="<td><img class=\"pic\" src="+element.picture.thumbnail+"></td>";
	 buf+="<td class=\"lc\">"+element.name.last+"</td>";
	 	 buf+="<td>"+element.name.first+"</td>";
		 	 buf+="<td>"+element.login.username+"</td>";
			 	 buf+="<td>"+element.cell+"</td>";
					buf+="<td>"+element.location.city+"</td>";
					buf+="<td id="+element.login.uuid+"><img class=\"imgs\" src=\'plus.png\' id=\"unique_"+element.login.uuid+"\"></td></tr>";
					
//full info
                    buf+="<tr class=\"full-info\" id=\"uniq_"+element.login.uuid+"\" style=\"display:none\">";
                        buf+="<td colspan=\"7\" style=\"background-color: #ededed;\">"
                            buf+="<div style=\"margin-left:5%; margin-top:20px;\">";
                                buf+="<p style=\"font-size:40px; color:#666666;\">";
//icon male or female
                                 buf+=element.name.first;
                                  buf+="<img src="+element.gender+".png"+">";
                                buf+="</p>";
                                buf+="<table style=\"width: 80%;float: left;\">";
//first row
                                    buf+="<tr>";
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Username: ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
                                                    buf+=element.login.username;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Address ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
                                                    buf+=element.location.street.number+" "+element.location.street.name;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
										
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Birthday ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
												const dates = new Date(element.dob.date).toISOString().slice(0,10);
                                                    buf+=dates;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
                                    buf+="</tr>";
//second row
                                    buf+="<tr>";
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Registered: ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
												const bdates = new Date(element.registered.date).toISOString().slice(0,10);
												buf+=bdates;

                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="City ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
                                                    buf+=element.location.city;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Phone ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
                                                    buf+=element.phone;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
                                    buf+="</tr>";
//third row
                                    buf+="<tr>";
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Email: ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
                                                    buf+=element.email;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Zip code ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
                                                    buf+=element.location.postcode;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
                                        buf+="<td>";
                                            buf+="<p>";
                                                buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                                    buf+="Cell ";
                                                buf+="</strong>"
                                                buf+="<p style=\"display:inline;\">";
                                                    buf+=element.cell;
                                                buf+="</p>"
                                            buf+="</p>"
                                        buf+="</td>"
										  buf+="<tr>";
                                        buf+="<td>";
                          
                                        buf+="</td>"
                       
                                    buf+="</tr>";
                                buf+="</table>";
//big picture
								buf+="<p>";
                                    buf+="<strong style=\"display:inline; font-weight:bold;\">";
                                         buf+="<img class=\"big-avatar\" src="+element.picture.large+">";

                                    buf+="</strong>"
                                    
                                buf+="</p>"
                            buf+="</div>"
                        buf+="</td>"
                    buf+="</tr>";
}
)

//google chart
		google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Gender', 'Value'],
                ['Male', maleCounter],
                ['Female', femaleCounter],
            ]);
            var options = {
                title: 'Gender users',
                colors:['#7bb4eb', '#434247'],
                height: 500,
                width: 900,
                legend:{
                    position:'labeled'
                },
                pieSliceTextStyle: {
                    color: 'transparent',
                }
            };
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
        }

document.getElementById("data").innerHTML =buf;


}
)
})
//end of script
