function convertToSimplifiedChinese(targetObj){
  var allObjs;
  var currentObj;
  if( typeof( targetObj ) == "object" ){
    allObjs = targetObj.childNodes;
  }
  else{ 
    allObjs = document.body.childNodes;
  }
  for ( var i = 0; i < allObjs.length; i++ ){	
    currentObj = allObjs.item(i);
    //TODO input tag
    // if( "INPUT|input".indexOf(currentObj.tagName) > -1  
    //   &&  currentObj.value != '' ){
    //   currentObj.s2t = currentObj.value;
    //   currentObj.value = t2s(currentObj.value);
    if( currentObj.nodeType == 3 ){
      currentObj.s2t = currentObj.data;
      currentObj.data = t2s(currentObj.data); 
    }else{
      convertToSimplifiedChinese(currentObj);
    }
  }
}
function convertToTraditionalChinese(targetObj){	
  var allObjs;
  var currentObj;
  if( typeof( targetObj ) == "object" ){
    allObjs = targetObj.childNodes;
  }
  else{ 
    allObjs = document.body.childNodes;
  }
  for ( var i = 0; i < allObjs.length; i++ ){	
    currentObj = allObjs.item(i);
    if( currentObj.nodeType == 3 ){
      if(!!currentObj.s2t){
        currentObj.data = currentObj.s2t;
      }
    }else{
      convertToTraditionalChinese(currentObj);
    }
  }
}
