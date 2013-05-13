function Convert(){
  var nodeList;
  var currentType = 't';
  this.convertToWithCache = function(type){
    if (!nodeList){
      nodeList = [];
      nodeList = getNodeListByRecursive("undefined", nodeList);
    }
    if(type === "s" && currentType ==='t'){
      for ( var i = 0; i < nodeList.length; i++ ){	
        nodeList[i].s2t = nodeList[i].data;
        nodeList[i].data = t2s(nodeList[i].data); 
      };
      currentType = 's';
    }else if(type === "t" && currentType ==='s'){
      for ( var i = 0; i < nodeList.length; i++ ){	
        if(!!nodeList[i].s2t){
          nodeList[i].data = nodeList[i].s2t;
        }
      }
      currentType = 't';
    }
  }
}
function getNodeListByRecursive(targetObj, nodeList){
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
      nodeList.push(currentObj);
    }else{
      getNodeListByRecursive(currentObj, nodeList);
    }
  }
  return nodeList;
}
