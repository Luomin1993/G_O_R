
function getParaData(accParas)
{ 
   var dataroot="sql/ElectromagneticPart.json"; 
   $.getJSON(dataroot, function(data){ 
   B        = data.para1[0]; 
   E        = data.para2[0];
   e        = data.para3[0];
   b        = data.para4[0];

   tps_Ivol = data.para1[1];

   Va       = data.para1[2];
   omiga    = data.para2[2];
   })    
}


/* GLOBAL */
var B,E,e,b,tps_Ivol,Va,omiga;
getParaData();