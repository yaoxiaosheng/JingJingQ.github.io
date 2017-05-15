;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M883.662253 350.691127C724.74587 453.608102 743.701594 676.243715 911.479809 752.542448c-7.397481 18.605753-14.240329 37.611619-22.399149 56.034201-26.343995 59.459207-61.572334 113.405863-105.184621 161.483858-49.260937 54.299697-100.763938 64.22986-168.597883 36.827767-24.365944-9.841136-49.704029-18.431791-75.405387-23.514553-35.075867-6.934946-69.496817 0.185218-102.480023 13.737886-13.837146 5.685489-27.630291 11.510148-41.661865 16.675798-47.611367 17.526165-90.51962 9.631358-128.346133-24.475438-41.580001-37.492916-73.5399-82.739423-100.983949-130.836861-57.851593-101.392248-90.00899-210.178907-84.288708-327.84991 4.311189-88.702228 33.871435-167.038364 105.397469-224.257553 50.262754-40.20877 108.026342-60.442604 172.751482-51.364855 25.098631 3.520173 49.26196 13.951757 73.728188 21.630646 9.498328 2.979868 18.820648 6.671956 27.935236 10.694573 26.839275 11.843746 53.002145 10.787694 80.409354 0.252757 33.215496-12.765745 66.791196-25.770943 101.353362-33.634028C731.377918 233.997382 836.310805 277.364075 883.662253 350.691127z"  ></path>' +
    '' +
    '<path d="M698.311825 4.744048c14.432711 112.555495-88.633666 241.689574-202.001667 233.157247C468.845643 144.646378 591.140966 2.964518 698.311825 4.744048z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M863.906815 356.291682 163.636894 356.291682c-18.294668 0-33.248242 14.953573-33.248242 33.248242 0 18.293645 14.953573 33.247218 33.248242 33.247218l700.269921 0c18.294668 0 33.247218-14.953573 33.247218-33.247218C897.154034 371.245256 882.201483 356.291682 863.906815 356.291682L863.906815 356.291682z"  ></path>' +
    '' +
    '<path d="M863.906815 588.708056 163.636894 588.708056c-18.294668 0-33.248242 14.792914-33.248242 33.247218s14.953573 33.248242 33.248242 33.248242l700.269921 0c18.294668 0 33.247218-14.793938 33.247218-33.248242S882.201483 588.708056 863.906815 588.708056L863.906815 588.708056z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M872.834 819.031l-0.021-0.020v0.020h0.021c6.611 7.724 9.929 16.273 9.929 25.645 0 10.485-3.728 19.446-11.186 26.902-6.683 6.903-16.034 11.188-26.387 11.188-0.189 0-0.376-0.002-0.564-0.006-4.4 0-8.664-0.7-12.804-2.079-6.214-2.076-11.451-5.687-15.438-10.387l0.112 0.893-204.607-206.068c-49.128 34.771-104.085 52.135-164.831 52.135-6.077 0-12.277-0.268-18.622-0.803-12.503-1.101-23.947-3.154-35.015-6.127-34.433-2.314-79.83-21.736-117.236-50.923-22.673-13.314-53.59-46.129-76.785-86.976-18.876-31.629-31.618-69.022-35.597-108.993 2.099 24.518-2.324-3.171-2.664-31.839 0.219 9.819 0.022 3.726 0.022-2.411 0-17.23 1.554-34.097 4.529-50.469 7.223-45.086 25.601-86.609 52.198-121.533 13.217-24.748 55.417-62.558 105.78-85.633-26.24 10.779 0.95-4.114 31.044-14.598 27.503-9.971 59.247-15.738 92.338-15.738 0.003 0 0.006 0 0.007 0 13.266 0 25.953 0.824 38.128 2.493 32.566 4.409 63.753 14.337 93.58 29.785 48.239 25.143 87.102 62.529 113.335 108.106-9.518-21.469 10.215 10.521 23.749 47.495 13.533 36.974 19.486 74.485 17.818 112.552-2.204 63.464-24.018 120.564-65.441 171.319l205.41 206.068h-0.803zM690.599 440.818c0.21-3.697 0.33-8.022 0.33-12.373 0-31.328-6.205-61.208-17.456-88.475-13.231-34.958-34.583-65.86-61.735-90.484 21.143 20.301 6.93 4.997-9.343-8.537-30.272-25.39-67.305-43.731-107.998-51.99 25.734 4.367-9.068-3.862-45.794-3.862-9.87 0-19.603 0.595-29.162 1.749-1.639-0.081-4.336 0.248-6.931 0.839l-4.358 0.695c-44.686 7.108-84.078 25.889-116.086 53.095-23.983 14.957-55.634 55.983-72.075 104.063-2.047-6.829-13.232 30.701-15.189 72.084-1.936 41.383 5.645 79.738 22.782 115.043 20.889 45.873 54.812 82.768 97.015 106.791-0.152 5.549 43.151 25.628 90.828 31.684 1.539 3.059 37.155 4.997 73.039-1.081 30.977-5.587 58.609-16.326 83.316-31.388 8.622-1.65 39.887-25.597 64.428-55.302-9.505 15.858 17.567-17.681 35.063-56.467-25.001 44.533-14.64 28.672-6.36 11.575v0.021c15.865-30.484 25.376-66.489 25.885-104.668z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)