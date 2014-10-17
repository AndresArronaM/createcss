(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    if (document.styleSheets.length > 0) {
      for( i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].disabled) {
          continue
        }
        var media = document.styleSheets[i].media
        mediaType = typeof media

        if (mediaType == "string") {
          if (media == "" || (media.indexOf("screen") != -1)) {
            styleSheet = document.styleSheets[i]
          }
        } else if (mediaType == "object") {
          if (media.mediaText == "" || (media.mediaText.indexOf("screen") != -1)) {
            styleSheet = document.styleSheets[i]
          }
        }

        if ( typeof styleSheet != "undefined") {
          break
        }
      }
    }

    if ( typeof styleSheet == "undefined") {
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
    }

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
},{}],2:[function(require,module,exports){
var createcss = require('../index.js')

createcss.selector('.test', 'background: blue;')
},{"../index.js":1}]},{},[2])