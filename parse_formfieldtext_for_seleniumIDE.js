var text = document.querySelector('textarea').innerHTML;
var cells = text.split("&lt;cellName&gt");
var weights = text.split("&lt;weight&gt;");
var cellnames = cells;
for (var i = 1; i < cells.length; i++) {
var locn = cells[i].indexOf("&lt;/c");
    locn = locn - 1;
var locw = weights[i].indexOf("&lt;/wei");
cellnames[i] = cells[i].substr(1,locn);
weights[i] = weights[i].substr(0,locw);
}
var doc = document.implementation.createHTMLDocument('testcellconfig');
doc.open();
doc.write('&lt;?xml version="1.0" encoding="UTF-8"?&gt;' + "<br>" 
+ '&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;' + "<br>"
+ '&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;' + "<br>"
+ '&lt;head profile="http://selenium-ide.openqa.org/profiles/test-case"&gt;' + "<br>"
+ '&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;' + "<br>"
+ '&lt;link rel="selenium.base" href="https://de-stg1.euw.carezen.net/" /&gt;' + "<br>"
+ '&lt;title&gt;testcasesgermany&lt;/title&gt;' + "<br>"
+ '&lt;/head&gt;' + "<br>"
+ '&lt;body&gt;' + "<br>"
+ '&lt;table cellpadding="1" cellspacing="1" border="1"&gt;' + "<br>"
+ '&lt;thead&gt;' + "<br>"
+ '&lt;tr&gt;&lt;td rowspan="1" colspan="3"&gt;testcasesgermany&lt;/td&gt;&lt;/tr&gt;' + "<br>"
+ '&lt;/thead&gt;&lt;tbody&gt;' + "<br>"
+ '&lt;!--Testcells Used for Test (can be modified)--&gt;' + "<br>");
for (var q = 0; q < cellnames.length; q++) {
  if (weights[q] > 0) {
doc.write('&lt;tr&gt;' + "<br>" 
  + '&lt;td&gt;store&lt;/td&gt;' + "<br>" 
  + '&lt;td&gt;/abtest/enterTestCell?test=pricing&amp;cell=' + cellnames[q] + '&lt;/td&gt;' + "<br>" 
  + '&lt;td&gt;pricingcellnumber-' + q + '&lt;/td&gt;' + "<br>"
  + '&lt;/tr&gt;' + "<br>");
}
}
var test = doc.documentElement.innerHTML;
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
download('testcellconfig.html',test);