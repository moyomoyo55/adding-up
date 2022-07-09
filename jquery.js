javascript: void (function (f) {
  // jQueryの存在チェックとバージョンチェック
  if (window.jQuery && jQuery().jquery > "1.8") {
    // jQueryが存在していればそれをそのまま使う
    f(jQuery);
  } else {
    var script = document.createElement("script");
    script.src = "//code.jquery.com/jquery-3.2.1.min.js";

    script.onload = function () {
      var $ = jQuery.noConflict(true);
      f($);
    };

    document.body.appendChild(script);
  }
})(function ($, undefined) {
  // バージョン確認
  console.log("jQuery: ", $().jquery);

  /*
  var xpath =
    "/html/body/table/tbody/tr/td/div/center/table/tbody/tr[2]/th/h3/text()[1]";
  var value = document;
  var nodesSnapshot = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.STRING_TYPE,
    null
  );
  console.log(nodesSnapshot.stringValue);
*/
  //console.log($("h3").get(0).innerText);

  var indiaUrl = "http://www.mitomori.co.jp/hanazukan/hanazukan2.5.21indo.html";
  var aodamoUrl = "http://www.mitomori.co.jp/hana3/hana2.7.346aodamo.html";
  var hamayuuUrl = "http://www.mitomori.co.jp/hana3/hana2.12.18hamayu.html";

  var urlArray = Array();
  urlArray[0] = hamayuuUrl;
  urlArray[1] = indiaUrl;
  urlArray[2] = aodamoUrl;

  for (const iterator of urlArray) {
    $.ajax({
      url: iterator, // 表示させたいコンテンツがあるページURL
      cache: false,
      datatype: "html",
      beforeSend: function (xhr) {
        xhr.overrideMimeType("text/html;charset=Shift_JIS");
      },
      success: function (html) {
        console.log($(html).find("h3").get(0).innerText);
      },
    });
  }
});
