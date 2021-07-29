// Solving problems using array functions on rest countries data. using index.html and script.js file (using rest countries api)
// 1.- Get all the countries from Asia continent /region using Filter function

// 2. - Get all the countries with population of less than 2 lacs using Filter function

// 3. - Print the country which use US Dollars (USD)as currency.

// 4.- print the sum of the total population of the  countries by using reduce function


var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function() {
    var data =JSON.parse(this.response);
   // console.log(data[0].region);
   console.log(data);

    var result  = data.filter((ele)=>ele.region==="Asia");
    var population =data.filter((ele)=>ele.population<900000);
    var currency =data.filter((ele)=>{
    for(let i in ele.currencies){
        if(ele.currencies[i].code==='USD'){
            return true;
        }
    }
    });
   console.log(result);
   console.log(population);
   console.log(currency);

   var s = data.map((ele)=>{
       return (ele.population)
   })
   let sum = s.reduce(function (accumulator, current) {
    return accumulator + current;
});
console.log(sum);

}
    //var result = data.filter((ele)=>data[i].region==='Asia');
    //console.log(result);
       
//    for(var i=0; i<data.length; i++){
//     //     console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
 
        
//    }