var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function() {
    var countrydata = JSON.parse(this.response);
    //console.log(countrydata);
    var region = countrydata.filter((x)=>x["region"]=="Asia");
    console.log("Asian countries:",region);

    var population=countrydata.filter((x)=>x["population"]<200000);
    console.log("countries with population of less than 2 lacs:",population);

    countrydata.forEach(element => {console.log(element["name"],element["capital"],element["flag"]);});

    var curr = countrydata.filter((x)=>x["currencies"][0]["code"]=="USD");
    console.log(curr);




    

    }