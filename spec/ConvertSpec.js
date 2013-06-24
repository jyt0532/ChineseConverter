jasmine.getFixtures().fixturesPath = 'fixtures'

describe("convert test with cache", function(){
  var converter;

  beforeEach(function(){
    converter = new Converter;
  });

  it('returns correct value', function(){
    jasmine.getFixtures().containerId = 'test-input';
    loadFixtures('input.html');
    converter.convert('s');
    
    jasmine.getFixtures().containerId = 'test-output';
    loadFixtures('output.html');
    
    expect($('#test-output').html()).toEqual($('#test-input').html());
    
    $('#test-input').remove();
  });

  it("invokes convert._setNodeList the first time", function(){
    spyOn(converter, "_setNodeList");
    converter.convert('s');

    expect(converter._setNodeList).toHaveBeenCalled();
  });

  it("does NOT invoke convert._setNodeList after the first invocation"
    , function(){
      converter.convert('s');
      spyOn(converter, "_setNodeList");
      converter.convert('t');

      expect(converter._setNodeList).not.toHaveBeenCalled();
  });

});
