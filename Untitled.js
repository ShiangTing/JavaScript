console.log(window);  //它是一個頂層物件,而不是另一個物件的屬性，即表示瀏覽器中開啟的視窗。Document 對象代表整個 XML 文檔,當瀏覽器載入 HTML 文檔, 它就會成為 document 對象。

console.log(window.document);
console.log(document);
console.dir(document);

//每个载入浏览器的 HTML 文档都会成为 Document 对象。

//Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。