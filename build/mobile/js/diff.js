$(document).ready(function(){$("*").off("click mousemove mousedown mouseup mouseleave").on("click mousemove mousedown mouseup mouseleave",function(a){a.preventDefault}),$('a[href^="http"]').tap(function(a){a.preventDefault();{var b=$(this).attr("href");new MozActivity({name:"view",data:{type:"url",url:b}})}return!1}).click(function(a){return a.preventDefault(),!1}),$('a[href^="mailto"]').tap(function(a){a.preventDefault();new MozActivity({name:"new",data:{type:"mail",url:$(this).attr("href")}});return!1}).click(function(a){return a.preventDefault(),!1}),window.save=function(){var a=c.getImageData(0,0,width(),height());switch(save.background){case"white":c.fillStyle="white",c.globalCompositeOperation="destination-over",c.fillRect(0,0,width(),height()),c.fillStyle=settings.color,c.globalCompositeOperation=settings.composite;break;case"current color":c.fillStyle=settings.bg,c.globalCompositeOperation="destination-over",c.fillRect(0,0,width(),height()),c.globalCompositeOperation=settings.composite}var b=$c[0].toDataURL();if("sketchy project"==save.type){var d,e=JSON.parse(localStorage.getItem("projects"));e&&e.some(function(a,b){return a.name==save["file name"]?(d=b,!0):!1})?confirm("A sketch with this name already exists. Do you want to overwrite "+save["file name"]+"?")&&(console.log(d),e[d]={name:save["file name"],data:b,points:window.points,settings:settings},localStorage.setItem("projects",JSON.stringify(e))):(e?e.push({name:save["file name"],data:b,points:window.points,settings:settings}):e=[{name:save["file name"],data:b,points:window.points,settings:settings}],localStorage.setItem("projects",JSON.stringify(e)))}else{var f=navigator.getDeviceStorage("pictures"),g=dataToBlob(b),h=f.addNamed(g,save["file name"]+".png");h.onsuccess=function(){alert("Your Sketch was saved successfuly: "+this.result)},h.onerror=function(){alert("Something bad happened trying to save your sketch "+save["file name"]+"\n Possible reasons:\n Duplicate Name \n Not enough permission")}}c.putImageData(a,0,0)},window.load=function(){var a=JSON.parse(localStorage.getItem("projects")).filter(function(a){return a.name==load.file})[0],b=document.createElement("img");b.src=a.data,b.onload=function(){c.clearRect(0,0,width(),height()),c.drawImage(b,0,0),window.points=a.points,window.points.history=[{data:c.createImageData($c.width(),$c.height()),points:[]},{data:c.getImageData(0,0,width(),height()),points:a.points}],$c.first().css("background",a.settings.bg),window.settings.bg=a.settings.bg}},localStorage.getItem("sawVote")||($(".vote").removeClass("hidden"),localStorage.setItem("sawVote",!0))});