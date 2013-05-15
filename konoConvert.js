function Converter(){
  this.textNodeList = [];
  this.inputNodeList = [];
  this.type = 't';
  this.convert = function(type){
    if (this.textNodeList.length === 0 && this.inputNodeList.length === 0){
      this._setNodeList();
    }
    if(type === "s" && this.type ==='t'){
      for(var i = 0; i < this.textNodeList.length; i++){	
        this.textNodeList[i].s2t = this.textNodeList[i].data;
        this.textNodeList[i].data = t2s(this.textNodeList[i].data); 
      };
      for(var i = 0; i < this.inputNodeList.length; i++){	
        this.inputNodeList[i].s2t = this.inputNodeList[i].value;
        this.inputNodeList[i].value = t2s(this.inputNodeList[i].value); 
        $(this.inputNodeList[i]).attr('value', this.inputNodeList[i].value);
      };
      this.type = 's';
    }else if(type === "t" && this.type ==='s'){
      for(var i = 0; i < this.textNodeList.length; i++){	
        if(!!this.textNodeList[i].s2t){
          this.textNodeList[i].data = this.textNodeList[i].s2t;
        }
      }
      for(var i = 0; i < this.inputNodeList.length; i++){	
        if(!!this.inputNodeList[i].s2t){
          this.inputNodeList[i].value = this.inputNodeList[i].s2t;
          $(this.inputNodeList[i]).attr('value', this.inputNodeList[i].value);
        }
      };
      this.type = 't';
    }
  };

  this._setNodeList = function(targetObj){
    var currentObj;
    targetObj = targetObj || document.body;
    var allObjs = targetObj.childNodes;

    for(var i = 0; i < allObjs.length; i++){	
      currentObj = allObjs.item(i);
      if("|INPUT|input|".indexOf("|" + currentObj.tagName + "|") > -1){
        this.inputNodeList.push(currentObj);
      }else if(currentObj.nodeType === 3){
        this.textNodeList.push(currentObj);
      }else{
        this._setNodeList(currentObj);
      }
    }
  }; 


}

