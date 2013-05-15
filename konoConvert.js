function Converter(){
  this.nodeList = [];
  this.type = 't';
  this.convert = function(type){
    if (this.nodeList.length === 0){
      this._setNodeList();
    }
    if(type === "s" && this.type ==='t'){
      for ( var i = 0; i < this.nodeList.length; i++ ){	
        this.nodeList[i].s2t = this.nodeList[i].data;
        this.nodeList[i].data = t2s(this.nodeList[i].data); 
      };
      this.type = 's';
    }else if(type === "t" && this.type ==='s'){
      for ( var i = 0; i < this.nodeList.length; i++ ){	
        if(!!this.nodeList[i].s2t){
          this.nodeList[i].data = this.nodeList[i].s2t;
        }
      }
      this.type = 't';
    }
  };

  this._setNodeList = function(targetObj){
    var currentObj;
    targetObj = targetObj || document.body;
    var allObjs = targetObj.childNodes;

    for ( var i = 0; i < allObjs.length; i++ ){	
      currentObj = allObjs.item(i);
      if( currentObj.nodeType === 3 ){
        this.nodeList.push(currentObj);
      }else{
        this._setNodeList(currentObj);
      }
    }
  }; 


}

// module.exports = {
//   convertTo: convertTo
//   , getNodeListByRecursive: getNodeListByRecursive
// };
