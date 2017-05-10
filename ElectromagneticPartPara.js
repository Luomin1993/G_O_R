var Paras ={ 
    Evol : {}, 
    Ivol: {}, 
    Vvol: {} 
    } 
    

function initAreaData(accParas)
{ 
   var dataroot="sql/ElectromagneticPart.json"; 
   $.getJSON(dataroot, function(data){ 
   accParas.Evol =data.para1; 
   accParas.Ivol =data.para2; 
   accParas.Vvol =data.para3; 
   })
   return accParas;     
}

res = initAreaData(areadata);

/* GLOBAL */
