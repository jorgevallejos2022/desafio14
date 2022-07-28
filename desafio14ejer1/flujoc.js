let flujodecaja = [ ["enero",1500,1500],
                    ["febrero",2500,2500],
                    ["marzo",84683,1155],
                    ["abril",135353,1533],
                    ["mayo",1535,5434],
                    ["junio",4343354,5434543],
                    ["julio",435453,4534],
                    ["agosto",78351,7816],
                    ["septiembre",1878,95634],
                    ["octubre",48483,9433],
                    ["noviembre",35483,53133],
                    ["diciembre",3843,348133]
                ]; 
let tingreso = 0
let tegreso = 0
let resultado = 0

for (let i = 0; i < flujodecaja.length; i++) {
 tingreso = tingreso + flujodecaja[i][1]
 tegreso = tegreso + flujodecaja[i][2]
}      
resultado = tingreso - tegreso

if(resultado>0){
   console.log("1")
}else if(resultado<0){
   console.log("-1")
}else{
   console.log("0")
}