describe("convert test with cache", function(){
  var converter;

  beforeEach(function(){
    converter = new Converter;
  });

  it('returns correct value', function(){
    expect(1).toEqual(1);
  });

  it("invokes convert._setNodeList the first time", function(){

    spyOn(converter, "_setNodeList");

    converter.convert('s');

    expect(converter._setNodeList).toHaveBeenCalled();
  });

  it("does NOT invoke convert.getNodeListByRecursive after the first invocation"
    , function(){

      converter.convert('s');
      spyOn(converter, "_setNodeList");
      converter.convert('t');

      expect(converter._setNodeList).not.toHaveBeenCalled();
  });

});
