function Createcss () {

}

Createcss.prototype = {
  selector: function(selector, style) {
    if (!document.styleSheets) {
      return
    }

    if (document.getElementsByTagName("head").length == 0) {
      return
    }

    var stylesheet
    var mediaType

    var styleSheetElement = document.createElement("style")
    styleSheetElement.type = "text/css"

    document.getElementsByTagName("head")[0].appendChild(styleSheetElement)

    for( i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].disabled) {
        continue
      }
      styleSheet = document.styleSheets[i]
    }

    var media = styleSheet.media
      mediaType = typeof media

    if (mediaType == "string") {
      for( i = 0; i < styleSheet.rules.length; i++) {
        if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
          styleSheet.rules[i].style.cssText = style
          return
        }
      }

      styleSheet.addRule(selector, style)
    } else if (mediaType == "object") {
      for( i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
          styleSheet.cssRules[i].style.cssText = style
          return
        }
      }

      styleSheet.insertRule(selector + "{" + style + "}", 0)
    }
  }
}

module.exports = new Createcss()