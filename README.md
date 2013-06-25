ChineseConverter
================

## Purpose

You can Transform Between Simplified And Traditional Chinese by calling a javascript function.

<hr />

## Usage

First, you should include the two files in your html files

```html
  <script type="text/javascript" src="your_path_to/konoConvert.js"></script>
  <script type="text/javascript" src="your_path_to/transform.js"></script>
```

Then, you can convert your html page to simplified/traditional chinese by doing so

```js
  var converterObject = new Converter();
  converterObject.convert('s');//transform to simplified chinese
  converterObject.convert('t');//transform to traditional chinese
```
### Note:
  The map from traditional chinese to simplified chinese is one to one, but the map from simplified chinese to traditional chinese is one to many. So you have to call 
```js
  converterObject.convert('s');
```
before the call
```js
  converterObject.convert('t');
```
## Test
  I use jasmine-jquery to test. You can open the spec/SpecRunner.html by your browser to check that is there any error occurs.
