$(function()
{
  function f()
  {
    /*e.css("color","rgb("+t+","+n+","+r+")")*/
    Global_1 = 500 + (t+n+r)/3;
  }

  function l()
  {
    /*e.css("opacity",i)*/
    Global_2 =300 + i;
  }

  function change_g2()
  {
    /*e.css("opacity",i)*/
    Global_2 =300 + 100*i;
  }
  
  var egc=0,bic=0,hvdvc=0,hvdvoc=0;
  function change_ElectronGunCtrl(){ElectronGunCtrl = egc;}
  function change_BeamIntensityCtrl(){BeamIntensityCtrl = bic;}
  function change_HighVoltageDoublingVoltageCtrl(){HighVoltageDoublingVoltageCtrl = hvdvc;}
  function change_HighVoltageDoublingVoltageOmigaCtrl(){HighVoltageDoublingVoltageOmigaCtrl = hvdvoc;}

  var e=$("#test"),t=0,n=0,r=0,i=1,s,o,u,a,c=$.YBslider
  (
      {
        slidBox:".YB-slider",
        slidWidth:200,
        showRange:!0,
        showValue:1,
        editValue:1,
        showRange:1,
        blockClick:function(){a=0},
        valueChange:function(i,s,o)
                    {
                      o===0&&e.css("fontSize",i),o>0&&(o===1?t=i:o===2?n=i:o===3&&(r=i),f())
                    }
      }
  ),

  h=$.YBslider({slidBox:".YB-slider-2",slidWidth:200,showRange:!0,showValue:1,editValue:1,showRange:1});
  h.YBslider[0].valueChange(function(e,t,n){c.YBslider[0].keepMove(t)});
  var p=c.YBslider[1],d=c.YBslider[2],v=c.YBslider[3];
  h.YBslider[1].valueChange(function(e,t,n)
  	                       {
  	                       	 !a&&(s=p.percent(),o=d.percent(),u=v.percent()),a=1,p.keepMove(s+t),d.keepMove(o+t),v.keepMove(u+t)}),h.YBslider[2].valueChange(function(e,t,n)
  	                       	                                                                                                                                 {
  	                       	                                                                                                                                 	c.YBslider[1].keepMove(t),c.YBslider[2].keepMove(t),c.YBslider[3].keepMove(t),a=0
  	                       	                                                                                                                                 }
  	                       	                                                                                                                                );
  	                       	 var m=$.YBslider
  	                       	   ({
  	                       	 		slidMain:"<span class='s-m' style='display:none' />",
  	                       	 		slidBar:"<i class='s-bar' />",slidBarBg:"<i class='s-b-b' />",
  	                       	 		slidBlock:"<a class='s-btn' href='javascript:;' />",
  	                       	 		slidValueShowBox:"<span class='s-v-b' />",
  	                       	 		slidBox:"#ui_test",
  	                       	 		slidWidth:200,
  	                       	 		setValue:[0,1,1],
  	                       	 		showRange:!0,
  	                       	 		valueChange:function(e,t){i=t,l()}
  	                       	 	}),
  	                       	     ElectronGunCtrl_=$.YBslider
  	                       	   ({
  	                       	 		slidMain:"<span class='s-m' style='display:none' />",
  	                       	 		slidBar:"<i class='s-bar' />",slidBarBg:"<i class='s-b-b' />",
  	                       	 		slidBlock:"<a class='s-btn' href='javascript:;' />",
  	                       	 		slidValueShowBox:"<span class='s-v-b' />",
  	                       	 		slidBox:"#EGC",
  	                       	 		slidWidth:200,
  	                       	 		setValue:[0,100,10],
  	                       	 		showRange:!0,
  	                       	 		valueChange:function(e,t){egc=t,change_ElectronGunCtrl()}
  	                       	 	}),
  	                       	     BeamIntensityCtrl_=$.YBslider
  	                       	   ({
  	                       	 		slidMain:"<span class='s-m' style='display:none' />",
  	                       	 		slidBar:"<i class='s-bar' />",slidBarBg:"<i class='s-b-b' />",
  	                       	 		slidBlock:"<a class='s-btn' href='javascript:;' />",
  	                       	 		slidValueShowBox:"<span class='s-v-b' />",
  	                       	 		slidBox:"#BIC",
  	                       	 		slidWidth:200,
  	                       	 		setValue:[0,100,10],
  	                       	 		showRange:!0,
  	                       	 		valueChange:function(e,t){bic=t,change_BeamIntensityCtrl()}
  	                       	 	}),
  	                       	     HighVoltageDoublingVoltageCtrl_=$.YBslider
  	                       	   ({
  	                       	 		slidMain:"<span class='s-m' style='display:none' />",
  	                       	 		slidBar:"<i class='s-bar' />",slidBarBg:"<i class='s-b-b' />",
  	                       	 		slidBlock:"<a class='s-btn' href='javascript:;' />",
  	                       	 		slidValueShowBox:"<span class='s-v-b' />",
  	                       	 		slidBox:"#HVDVC",
  	                       	 		slidWidth:200,
  	                       	 		setValue:[0,100,10],
  	                       	 		showRange:!0,
  	                       	 		valueChange:function(e,t){hvdvc=t,change_HighVoltageDoublingVoltageCtrl()}
  	                       	 	}),
  	                       	     HighVoltageDoublingVoltageOmigaCtrl_=$.YBslider
  	                       	   ({
  	                       	 		slidMain:"<span class='s-m' style='display:none' />",
  	                       	 		slidBar:"<i class='s-bar' />",slidBarBg:"<i class='s-b-b' />",
  	                       	 		slidBlock:"<a class='s-btn' href='javascript:;' />",
  	                       	 		slidValueShowBox:"<span class='s-v-b' />",
  	                       	 		slidBox:"#HVDVOC",
  	                       	 		slidWidth:200,
  	                       	 		setValue:[0,100,10],
  	                       	 		showRange:!0,
  	                       	 		valueChange:function(e,t){hvdvoc=t,change_HighVoltageDoublingVoltageOmigaCtrl()}
  	                       	 	}),
  	                       	     g=$.YBslider
  	                       	 ({
  	                       	 	slidMain:"<span class='s-m2' style='display:none' />",
  	                       	 	slidMainIn:"<span class='s-m-i2' />",
  	                       	 	slidBar:"<i class='s-bar2' />",
  	                       	 	slidBarBg:"<i class='s-b-b2' />",
  	                       	 	slidBlock:"<a class='s-btn2' href='javascript:;' />",
  	                       	 	slidValueShowBox:"<span class='s-v-b2' />",
  	                       	 	slidBox:"#ui_test_2",slidWidth:200,setValue:[0,1,.5],
  	                       	 	showValue:1,
  	                       	 	editValue:1,
  	                       	 	valueFloat:1,
  	                       	 	valueSuf:"可改变反馈发生的快慢",showRange:!0});
  	                       	    g.YBslider[0].valueChange(function(e,t){m.YBslider[0].keepMove(t)})
  	                       	});
