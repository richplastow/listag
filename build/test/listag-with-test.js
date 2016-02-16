// Generated by CoffeeScript 1.9.2
(function(_oG) {
/*! Listag 0.0.4 //// MIT Licence //// http://listag.richplastow.com/ */
var Listag, Tudor, _o, _oT, _oV, tudor,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

_oT = 'Listag';

_oV = '0.0.4';

_o = {};

Listag = (function() {
  Listag.prototype.C = 'Listag';

  Listag.prototype.toString = function() {
    return '[object Listag]';
  };

  function Listag(config) {
    var M;
    if (config == null) {
      config = {};
    }
    M = "/listag/src/Listag.litcoffee Listag()\n  ";
    this.nodes = {};
    this.length = {};
    this.first = {};
    this.last = {};
  }

  Listag.prototype.add = function(node, id, tags) {
    var M, i, j, k, len, len1, tag, tmp, v;
    if (tags == null) {
      tags = [];
    }
    M = "/listag/src/Listag.litcoffee Listag::add()\n  ";
    v = _o.validator(M + "argument ", {
      node: node,
      id: id
    });
    node = v('node <object>');
    id = v('id <string ^[a-z]\\w{1,23}$>', _o.uid(_o.type(node)));
    if (!_o.isU(this.nodes[id])) {
      throw RangeError(M + ("a node with id '" + id + "' already exists"));
    }
    _o.vArray(M + "argument tags", tags, '<array of string ^[a-z]\\w{1,23}$>', []);
    tmp = {};
    for (i = j = 0, len = tags.length; j < len; i = ++j) {
      tag = tags[i];
      if ('all' === tag) {
        throw RangeError(M + ("argument tags[" + i + "] is the special tag 'all'"));
      }
      if (!_o.isU(tmp[tag])) {
        throw RangeError(M + ("argument tags[" + i + "] is a duplicate of tags[" + tmp[tag] + "]"));
      }
      tmp[tag] = i;
    }
    tags.push('all');
    node.listagL = node.listagL || {};
    node.listagR = node.listagR || {};
    for (k = 0, len1 = tags.length; k < len1; k++) {
      tag = tags[k];
      node.listagL[tag] = this.length[tag] ? this.last[tag] : null;
      node.listagR[tag] = null;
      if (this.length[tag]) {
        this.last[tag].listagR[tag] = node;
      } else {
        this.first[tag] = node;
        this.length[tag] = 0;
      }
      this.last[tag] = node;
      this.length[tag]++;
    }
    this.nodes[id] = node;
    return id;
  };

  Listag.prototype.xx = function(yy) {
    var M;
    return M = "/listag/src/Listag.litcoffee Listag::xx()\n  ";
  };

  return Listag;

})();

Listag.xx = function(yy) {
  var M;
  return M = "/listag/src/Listag.litcoffee Listag.xx()\n  ";
};

if ('undefined' === typeof console || !console.log) {
  _o = function() {};
} else if ('object' === typeof console.log) {
  _o = Function.prototype.bind(console.log, console);
} else {
  _o = console.log.bind(console);
}

_o.A = 'array';

_o.B = 'boolean';

_o.D = 'document';

_o.E = 'error';

_o.F = 'function';

_o.N = 'number';

_o.O = 'object';

_o.R = 'regexp';

_o.S = 'string';

_o.U = 'undefined';

_o.X = 'null';

_o.G = _oG;

_o.T = _oT;

_o.V = _oV;

_o.is = function(c, t, f) {
  if (t == null) {
    t = true;
  }
  if (f == null) {
    f = false;
  }
  if (c) {
    return t;
  } else {
    return f;
  }
};

_o.isU = function(x) {
  return _o.U === typeof x;
};

_o.isX = function(x) {
  return null === x;
};

_o.type = function(a) {
  var ta;
  if (_o.isX(a)) {
    return _o.X;
  }
  ta = typeof a;
  if ({
    undefined: 1,
    string: 1,
    number: 1,
    boolean: 1
  }[ta]) {
    return ta;
  }
  if (!a.nodeName && a.constructor !== Array && /function/i.test('' + a)) {
    return _o.F;
  }
  return {}.toString.call(a).match(/\s([a-z0-9]+)/i)[1].toLowerCase();
};

_o.ex = function(x, a, b) {
  var pos;
  if (-1 === (pos = a.indexOf(x))) {
    return x;
  } else {
    return b.charAt(pos);
  }
};

_o.has = function(h, n, t, f) {
  if (t == null) {
    t = true;
  }
  if (f == null) {
    f = false;
  }
  if (-1 !== h.indexOf(n)) {
    return t;
  } else {
    return f;
  }
};

_o.uid = function(p, l) {
  var c;
  if (p == null) {
    p = 'id';
  }
  if (l == null) {
    l = 8;
  }
  c = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return p + '_' + ((function() {
    var results;
    results = [];
    while (l--) {
      results.push(c.charAt(Math.floor(Math.random() * 62)));
    }
    return results;
  })()).join('');
};

_o.insert = function(basis, overlay, offset) {
  return basis.slice(0, offset) + overlay + basis.slice(offset + overlay.length);
};

_o.redefine = function(obj, name, value, kind) {
  switch (kind) {
    case 'constant':
      return Object.defineProperty(obj, name, {
        value: value,
        enumerable: true
      });
    case 'private':
      return Object.defineProperty(obj, name, {
        value: value,
        enumerable: false
      });
  }
};

_o.vArray = function(M, arr, signature, fallback) {
  var i, j, k, len, len1, matches, max, min, pass, ref, ref1, results, rule, tv, type, types, value;
  matches = signature.match(/^<array of ([|a-z]+)\s*(.*)>$/i);
  if (!matches) {
    throw RangeError("/listag/src/_o-helpers.litcoffee _o.vArray()\n  signature " + signature + " is invalid");
  }
  signature = matches[0], types = matches[1], rule = matches[2];
  if (!arr) {
    return fallback;
  }
  if (_o.A !== _o.type(arr)) {
    throw RangeError(M + (" is type " + (_o.type(arr)) + " not array"));
  }
  results = [];
  for (i = j = 0, len = arr.length; j < len; i = ++j) {
    value = arr[i];
    tv = _o.type(value);
    pass = false;
    ref = types.split('|');
    for (k = 0, len1 = ref.length; k < len1; k++) {
      type = ref[k];
      if ((_o.N === type || _o.I === type) && _o.N === tv) {
        if (_o.I === type && value % 1) {
          throw RangeError(M + ("[" + i + "] is a number but not an integer"));
        }
        if (rule) {
          ref1 = rule.split('-'), min = ref1[0], max = ref1[1];
          if (value < min || value > max) {
            throw RangeError(M + ("[" + i + "] is " + value + " (must be " + rule + ")"));
          }
        }
        pass = true;
        break;
      }
      if (type === tv) {
        if (_o.S === tv && rule) {
          if (!RegExp(rule).test(value)) {
            throw RangeError(M + ("[" + i + "] fails " + rule));
          }
        }
        pass = true;
        break;
      }
      if (/^[A-Z]/.test(type)) {
        if (_o.O === tv) {
          if (eval("value instanceof " + type)) {
            pass = true;
            break;
          }
        }
      }
    }
    if (pass) {
      continue;
    }
    throw TypeError(M + ("[" + i + "] is type " + tv + " not " + types));
  }
  return results;
};

_o.validator = function(M, obj) {
  return function(signature, fallback) {
    var j, key, len, matches, max, min, ref, ref1, rule, tv, type, types, value;
    matches = signature.match(/^([_a-z][_a-z0-9]*)\s+<([|a-z]+)\s*(.*)>$/i);
    if (!matches) {
      throw RangeError("/listag/src/_o-helpers.litcoffee _o.validator()\n  signature " + signature + " is invalid");
    }
    signature = matches[0], key = matches[1], types = matches[2], rule = matches[3];
    value = obj[key];
    tv = _o.type(value);
    if (_o.U === tv) {
      if (2 === arguments.length) {
        return fallback;
      }
      throw TypeError(M + key + " is undefined and has no fallback");
    }
    ref = types.split('|');
    for (j = 0, len = ref.length; j < len; j++) {
      type = ref[j];
      if ((_o.N === type || _o.I === type) && _o.N === tv) {
        if (_o.I === type && value % 1) {
          throw RangeError(M + key + " is a number but not an integer");
        }
        if (rule) {
          ref1 = rule.split('-'), min = ref1[0], max = ref1[1];
          if (value < min || value > max) {
            throw RangeError(M + key + (" is " + value + " (must be " + rule + ")"));
          }
        }
        return value;
      }
      if (type === tv) {
        if (_o.S === tv && rule) {
          if (!RegExp(rule).test(value)) {
            throw RangeError(M + key + (" fails " + rule));
          }
        }
        return value;
      }
      if (/^[A-Z]/.test(type)) {
        if (_o.O === tv) {
          if (eval("value instanceof " + type)) {
            return value;
          }
        }
      }
    }
    throw TypeError(M + key + (" is type " + tv + " not " + types));
  };
};

if (_o.F === typeof define && define.amd) {
  define(function() {
    return Listag;
  });
} else if (_o.O === typeof module && module && module.exports) {
  module.exports = Listag;
} else {
  _o.G.Listag = Listag;
}

Tudor = (function() {
  Tudor.prototype.I = 'Tudor';

  Tudor.prototype.toString = function() {
    return "[object " + I + "]";
  };

  Tudor.prototype.articles = [];

  function Tudor(opt) {
    this.opt = opt != null ? opt : {};
    this["do"] = bind(this["do"], this);
    switch (this.opt.format) {
      case 'html':
        this.pageHead = function(summary) {
          return "<style>\n  body     { font-family: sans-serif; }\n  a        { outline: 0; }\n  b        { display: inline-block; width: .7em }\n\n  b.pass              { color: #393 }\n  b.fail              { color: #bbb }\n  article.fail b.pass { color: #bbb }\n  section.fail b.pass { color: #bbb }\n\n  pre      { padding: .5em; margin: .2em 0; border-radius: 4px; }\n  pre.fn   { background-color: #fde }\n  pre.pass { background-color: #cfc }\n  pre.fail { background-color: #d8e0e8 }\n\n  article  { margin-bottom: .5rem }\n  article h2 { padding-left:.5rem; margin:0; font-weight:normal }\n  article.pass { border-left: 5px solid #9c9 }\n  article.fail { border-left: 5px solid #9bf }\n  article.fail h2 { margin-bottom: .5rem }\n  article.pass >div { display: none }\n\n  section  { margin-bottom: .5rem }\n  section h3   { padding-left: .5rem; margin: 0; }\n  section.pass { border-left: 3px solid #9c9 }\n  section.fail { border-left: 3px solid #9bf }\n  section.fail h3 { margin-bottom: .5rem }\n  section.pass >div { display: none }\n\n  article.fail section.pass { border-left-color: #ccc }\n\n  div      { padding-left: .5em; }\n  div.fail { border-left: 3px solid #9bf; font-size: .8rem }\n  div h4   { margin: 0 }\n  div h4 { font: normal .8rem/1.2rem monaco, monospace }\n  div.fail, div.fail h4 { margin: .5rem 0 }\n\n</style>\n<h4><a href=\"#end\" id=\"top\">\u2b07</a>  " + summary + "</h4>";
        };
        this.pageFoot = function(summary) {
          return "<h4><a href=\"#top\" id=\"end\">\u2b06</a>  " + summary + "</h4>\n<script>\n  document.title='" + (summary.replace(/<\/?[^>]+>/g, '')) + "';\n</script>";
        };
        this.articleHead = function(heading, fail) {
          return ("<article class=\"" + (fail ? 'fail' : 'pass') + "\">") + ("<h2>" + (fail ? this.cross : this.tick) + heading + "</h2><div>");
        };
        this.articleFoot = '</div></article>';
        this.sectionHead = function(heading, fail) {
          return ("<section class=\"" + (fail ? 'fail' : 'pass') + "\">") + ("<h3>" + (fail ? this.cross : this.tick) + heading + "</h3><div>");
        };
        this.sectionFoot = '</div></section>';
        this.jobFormat = function(heading, result) {
          return ("<div class=\"" + (result ? 'fail' : 'pass') + "\">") + ("<h4>" + (result ? this.cross : this.tick) + heading + "</h4>") + ("" + (result ? this.formatError(result) : '')) + "</div>";
        };
        this.tick = '<b class="pass">\u2713</b> ';
        this.cross = '<b class="fail">\u2718</b> ';
        break;
      default:
        this.pageHead = function(summary) {
          return "" + summary;
        };
        this.pageFoot = function(summary) {
          return "\n" + summary;
        };
        this.articleHead = function(heading, fail) {
          return "\n" + (fail ? this.cross : this.tick) + " " + heading + "\n===" + (new Array(heading.length).join('=')) + "\n";
        };
        this.articleFoot = '';
        this.sectionHead = function(heading, fail) {
          return "\n" + (fail ? this.cross : this.tick) + " " + heading + "\n---" + (new Array(heading.length).join('-')) + "\n";
        };
        this.sectionFoot = '';
        this.jobFormat = function(heading, result) {
          return ((result ? this.cross : this.tick) + " " + heading) + ("" + (result ? '\n' + this.formatError(result) : ''));
        };
        this.jobFoot = '';
        this.tick = '\u2713';
        this.cross = '\u2718';
    }
  }

  Tudor.prototype.add = function(lines) {
    var article, i, line, runner, section;
    article = {
      sections: []
    };
    runner = null;
    section = null;
    if (_o.A !== _o.type(lines)) {
      throw Error("`lines` isn’t an array");
    }
    if (0 === lines.length) {
      throw Error("`lines` has no elements");
    }
    if (_o.S !== _o.type(lines[0])) {
      throw Error("`lines[0]` isn’t a string");
    }
    article.heading = lines.shift();
    i = 0;
    while (i < lines.length) {
      line = lines[i];
      switch (_o.type(line)) {
        case _o.O:
          if (!line.runner) {
            throw new Error("Errant object");
          }
          runner = line.runner;
          break;
        case _o.F:
          section.jobs.push(line);
          break;
        case _o.S:
          if (this.isAssertion(lines[i + 1], lines[i + 2])) {
            if (!section) {
              throw new Error("Cannot add an assertion here");
            }
            section.jobs.push([runner, line, lines[++i], lines[++i]]);
          } else {
            section = {
              heading: line,
              jobs: []
            };
            article.sections.push(section);
          }
      }
      i++;
    }
    return this.articles.push(article);
  };

  Tudor.prototype["do"] = function() {
    var actual, art, artFail, artPass, article, e, error, expect, heading, j, job, k, len, len1, len2, m, mock, mockFail, pge, pgeFail, pgePass, ref, ref1, ref2, result, runner, sec, secFail, secPass, section, summary;
    pge = [];
    mock = [];
    pgePass = pgeFail = mockFail = 0;
    ref = this.articles;
    for (j = 0, len = ref.length; j < len; j++) {
      article = ref[j];
      art = [];
      artPass = artFail = 0;
      ref1 = article.sections;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        section = ref1[k];
        sec = [];
        secPass = secFail = 0;
        ref2 = section.jobs;
        for (m = 0, len2 = ref2.length; m < len2; m++) {
          job = ref2[m];
          switch (_o.type(job)) {
            case _o.F:
              try {
                mock = job.apply(this, mock);
              } catch (_error) {
                e = _error;
                error = e.message;
              }
              if (error) {
                mockFail++;
                secFail++;
                sec.push(this.formatMockModifierError(job, error));
              }
              break;
            case _o.A:
              runner = job[0], heading = job[1], expect = job[2], actual = job[3];
              result = runner(expect, actual, mock);
              if (!result) {
                sec.push(this.jobFormat("" + (this.sanitize(heading))));
                pgePass++;
                artPass++;
                secPass++;
              } else {
                sec.push(this.jobFormat("" + (this.sanitize(heading)), result));
                pgeFail++;
                artFail++;
                secFail++;
              }
          }
        }
        sec.unshift(this.sectionHead("" + (this.sanitize(section.heading)), secFail));
        sec.push(this.sectionFoot);
        art = art.concat(sec);
      }
      art.unshift(this.articleHead("" + (this.sanitize(article.heading)), artFail));
      art.push(this.articleFoot);
      pge = pge.concat(art);
      summary = pgeFail ? this.cross + " FAILED " + pgeFail + "/" + (pgePass + pgeFail) : this.tick + " Passed " + pgePass + "/" + (pgePass + pgeFail);
      if (mockFail) {
        summary = "\n" + this.cross + " (MOCK FAILS)";
      }
    }
    pge.unshift(this.pageHead(summary));
    pge.push(this.pageFoot(summary));
    return pge.join('\n');
  };

  Tudor.prototype.formatError = function(result) {
    switch (result.length + "-" + this.opt.format) {
      case '2-html':
        return result[0] + "\n<pre class=\"fail\">" + (this.sanitize(result[1].message)) + "</pre>";
      case '2-plain':
        return result[0] + "\n" + (this.sanitize(result[1].message));
      case '3-html':
        return "<pre class=\"fail\">" + (this.sanitize(this.reveal(result[0]))) + "</pre>\n..." + result[1] + "...\n<pre class=\"pass\">" + (this.sanitize(this.reveal(result[2]))) + "</pre>";
      case '3-plain':
        return (this.sanitize(this.reveal(result[0]))) + "\n..." + result[1] + "...\n" + (this.sanitize(this.reveal(result[2])));
      case '4-html':
        return "<pre class=\"fail\">" + (this.sanitize(this.reveal(result[0]))) + " (" + (_o.type(result[0])) + ")</pre>\n..." + result[1] + "...\n<pre class=\"pass\">" + (this.sanitize(this.reveal(result[2]))) + " (" + (_o.type(result[2])) + ")</pre>";
      case '4-plain':
        return (this.sanitize(this.reveal(result[0]))) + " (" + (_o.type(result[0])) + ")\n..." + result[1] + "...\n" + (this.sanitize(this.reveal(result[2]))) + " (" + (_o.type(result[2])) + ")";
      default:
        throw new Error("Cannot process '" + result.length + "-" + this.opt.format + "'");
    }
  };

  Tudor.prototype.formatMockModifierError = function(fn, error) {
    switch (this.opt.format) {
      case 'html':
        return "<pre class=\"fn\">" + (this.sanitize(fn + '')) + "</pre>\n...encountered an exception:\n<pre class=\"fail\">" + (this.sanitize(error)) + "</pre>";
      default:
        return (this.sanitize(fn + '')) + "\n...encountered an exception:\n" + (this.sanitize(error));
    }
  };

  Tudor.prototype.reveal = function(value) {
    return value != null ? value.toString().replace(/^\s+|\s+$/g, function(match) {
      return '\u00b7' + (new Array(match.length)).join('\u00b7');
    }) : void 0;
  };

  Tudor.prototype.sanitize = function(value) {
    switch (this.opt.format) {
      case 'html':
        return value != null ? value.toString().replace(/</g, '&lt;') : void 0;
      default:
        return value;
    }
  };

  Tudor.prototype["throw"] = {
    runner: function(expect, actual, mock) {
      var e, error;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (!error) {
        return [
          'No exception thrown, expected', {
            message: expect
          }
        ];
      } else if (expect !== error.message) {
        return [error.message, 'was thrown, but expected', expect];
      }
    }
  };

  Tudor.prototype.equal = {
    runner: function(expect, actual, mock) {
      var e, error, result;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        result = actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (error) {
        return ['Unexpected exception', error];
      } else if (expect !== result) {
        if (result + '' === expect + '') {
          return [result, 'was returned, but expected', expect, true];
        } else {
          return [result, 'was returned, but expected', expect];
        }
      }
    }
  };

  Tudor.prototype.is = {
    runner: function(expect, actual, mock) {
      var e, error, result;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        result = actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (error) {
        return ['Unexpected exception', error];
      } else if (expect !== _o.type(result)) {
        return ["type " + (_o.type(result)), 'was returned, but expected', "type " + expect];
      }
    }
  };

  Tudor.prototype.match = {
    runner: function(expect, actual, mock) {
      var e, error, result;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        result = actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (error) {
        return ['Unexpected exception', error];
      } else if (_o.F !== typeof expect.test) {
        return [
          '`test()` is not a function', {
            message: expect
          }
        ];
      } else if (!expect.test('' + result)) {
        return ['' + result, 'failed test', expect];
      }
    }
  };

  Tudor.prototype.isAssertion = function(line1, line2) {
    if (_o.F !== _o.type(line2)) {
      return false;
    }
    if ((_o.O === _o.type(line1)) && _o.F === _o.type(line1.runner)) {
      return false;
    }
    return true;
  };

  return Tudor;

})();

tudor = new Tudor({
  format: _o.O === typeof window ? 'html' : 'plain'
});

Listag.runTest = tudor["do"];

tudor.add([
  "01 Listag Constructor", tudor.is, "The class and instance are expected types", function() {
    return [new Listag];
  }, "The Listag class is a function", _o.F, function() {
    return Listag;
  }, "`new` returns an object", _o.O, function(listag) {
    return listag;
  }, "Instance properties as expected", "`Listag::nodes` is an object", _o.O, function(listag) {
    return listag.nodes;
  }, "`Listag::length` is an object", _o.O, function(listag) {
    return listag.length;
  }, "`Listag::first` is an object", _o.O, function(listag) {
    return listag.first;
  }, "`Listag::last` is an object", _o.O, function(listag) {
    return listag.last;
  }, tudor.equal, "`Listag::C` is 'Listag'", 'Listag', function(listag) {
    return listag.C;
  }, "`Listag::toString()` is '[object Listag]'", '[object Listag]', function(listag) {
    return listag + '';
  }, "`Listag::nodes` is empty", 0, function(listag) {
    return Object.keys(listag.nodes).length;
  }, "`Listag::length` is empty", 0, function(listag) {
    return Object.keys(listag.length).length;
  }, "`Listag::first` is empty", 0, function(listag) {
    return Object.keys(listag.first).length;
  }, "`Listag::last` is empty", 0, function(listag) {
    return Object.keys(listag.last).length;
  }
]);

tudor.add([
  "02 Listag::add()", tudor.is, "`add()` is a function which returns a string", function() {
    return [new Listag];
  }, "`add()` is a function", _o.F, function(listag) {
    return listag.add;
  }, "`add({x:'the_first'})` returns a string", _o.S, function(listag) {
    return listag.add({
      x: 'the_first'
    });
  }, "The `node` argument accepts objects as expected", tudor.equal, "A simple object is recorded", 'the_second', function(listag) {
    listag.add({
      x: 'the_second'
    });
    return listag.last.all.x;
  }, "A Listag instance can be recorded in itself", 'the_second', function(listag) {
    listag.add(listag);
    return listag.last.all.listagL.all.x;
  }, "A Listag instance can be recorded in another Listag instance", 100, function(listag) {
    var secondListag;
    secondListag = new Listag;
    secondListag.x = 100;
    listag.add(secondListag);
    return listag.last.all.x;
  }, "`node` exceptions", tudor["throw"], "`node` not provided", "/listag/src/Listag.litcoffee Listag::add()\n  argument node is undefined and has no fallback", function(listag) {
    return listag.add();
  }, "`node` is null", "/listag/src/Listag.litcoffee Listag::add()\n  argument node is type null not object", function(listag) {
    return listag.add(null);
  }, "`node` is a Date object", "/listag/src/Listag.litcoffee Listag::add()\n  argument node is type date not object", function(listag) {
    return listag.add(new Date());
  }, "The `id` argument accepts a string as expected", tudor.equal, "Shortest possible id", 11, function(listag) {
    listag.add({
      x: 11
    }, 'aB');
    return listag.last.all.x;
  }, "Longest possible id", 22, function(listag) {
    listag.add({
      x: 22
    }, 'abcdefghijklmnopqrst123_');
    return listag.last.all.x;
  }, "Can repeat existing id, if case is different", 33, function(listag) {
    listag.add({
      x: 33
    }, 'aBcDeFgHiJkLmNoPqRsT123_');
    return listag.last.all.x;
  }, "`id` exceptions", tudor["throw"], "Is boolean", "/listag/src/Listag.litcoffee Listag::add()\n  argument id is type boolean not string", function(listag) {
    return listag.add({}, true);
  }, "Empty string", "/listag/src/Listag.litcoffee Listag::add()\n  argument id fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, '');
  }, "Too short", "/listag/src/Listag.litcoffee Listag::add()\n  argument id fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, 'a');
  }, "Too long", "/listag/src/Listag.litcoffee Listag::add()\n  argument id fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, 'aBcDeFgHiJkLmNoPqRsT123_X');
  }, "Underscore is an invalid first character", "/listag/src/Listag.litcoffee Listag::add()\n  argument id fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, '_abc');
  }, "Number is an invalid first character", "/listag/src/Listag.litcoffee Listag::add()\n  argument id fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, '1abc');
  }, "Uppercase is an invalid first character", "/listag/src/Listag.litcoffee Listag::add()\n  argument id fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, 'Abc');
  }, "Must not contain a hyphen", "/listag/src/Listag.litcoffee Listag::add()\n  argument id fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, 'ab-c');
  }, "Must be unique", "/listag/src/Listag.litcoffee Listag::add()\n  a node with id 'the_last' already exists", function(listag) {
    listag.add({}, 'the_last');
    return listag.add({}, 'the_last');
  }, "The `tags` argument accepts an array as expected", tudor.equal, "An empty array", 789, function(listag) {
    listag.add({
      x: 789
    }, 'abc', []);
    return listag.last.all.x;
  }, "An array with arbitrary properties", 'leftmost_dog', function(listag) {
    var tags;
    tags = ['dog', 'ok123'];
    tags.thing = 'Unexpected!';
    listag.add({
      x: 'leftmost_dog'
    }, void 0, tags);
    return listag.last.all.x;
  }, "Can be mixed-case 'aLL'", 'rightmost_dog', function(listag) {
    listag.add({
      x: 'rightmost_dog'
    }, 'rightmost_dog', ['cat', 'dog', 'aLL']);
    return listag.last.all.x;
  }, "Can be undefined", 'second_from_last', function(listag) {
    listag.add({
      x: 'second_from_last'
    }, 'ghi', void 0);
    return listag.last.all.x;
  }, "Can be null", 'the_last', function(listag) {
    listag.add({
      x: 'the_last'
    }, 'klm', null);
    return listag.last.all.x;
  }, "`tags` exceptions", tudor["throw"], "A string", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags is type string not array", function(listag) {
    return listag.add({}, void 0, 'nope');
  }, "Contains a number", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags[2] is type number not string", function(listag) {
    return listag.add({}, void 0, ['ok', 'fine', 123456, 'uh_oh']);
  }, "Contains an empty string", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags[3] fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, void 0, ['no', 'empties', 'allowed', '']);
  }, "Contains a string starting with a digit", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags[0] fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, void 0, ['123abc', 'nope']);
  }, "Contains a string starting with an uppercase letter", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags[3] fails ^[a-z]\\w{1,23}$", function(listag) {
    return listag.add({}, void 0, ['must', 'be', 'only', 'Lowercase']);
  }, "Contains the special string 'all'", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags[0] is the special tag 'all'", function(listag) {
    return listag.add({}, void 0, ['all', 'is', 'reserved']);
  }, "Contains duplicate tags at indices 1 and 3", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags[3] is a duplicate of tags[1]", function(listag) {
    return listag.add({}, void 0, ['here', 'again', 'there', 'again']);
  }, "Contains many duplicate tags, including indices 0 and 2", "/listag/src/Listag.litcoffee Listag::add()\n  argument tags[2] is a duplicate of tags[0]", function(listag) {
    return listag.add({}, void 0, ['aa', 'bb', 'aa', 'aa', 'bb']);
  }, "'all' `length`, `first`, `last`, `listagL` and `listagR` as expected", tudor.equal, "13 nodes created during the '02 Listag::add()' test", 13, function(listag) {
    return listag.length.all;
  }, "Traversing rightward from `first` takes 13 steps", 13, function(listag) {
    var i, node;
    i = 0;
    node = listag.first.all;
    while (node) {
      i++;
      node = node.listagR.all;
    }
    return i;
  }, "Traversing leftward from `last` takes 13 steps", 13, function(listag) {
    var i, node;
    i = 0;
    node = listag.last.all;
    while (node) {
      i++;
      node = node.listagL.all;
    }
    return i;
  }, "Traversing rightward from `aB` takes 9 steps", 9, function(listag) {
    var i, node;
    i = 0;
    node = listag.nodes.aB;
    while (node) {
      i++;
      node = node.listagR.all;
    }
    return i;
  }, "The leftmost node is 'the_first'", 'the_first', function(listag) {
    return listag.first.all.x;
  }, "The rightmost node is 'the_last'", 'the_last', function(listag) {
    return listag.last.all.x;
  }, "The leftmost node’s leftward node is null", null, function(listag) {
    return listag.first.all.listagL.all;
  }, "The rightmost node’s rightward node is null", null, function(listag) {
    return listag.last.all.listagR.all;
  }, "The leftmost node’s `listagR.all` is 'the_second'", 'the_second', function(listag) {
    return listag.first.all.listagR.all.x;
  }, "The rightmost node’s `listagL.all` is 'second_from_last'", 'second_from_last', function(listag) {
    return listag.last.all.listagL.all.x;
  }, "'dog' `length`, `first`, `last`, `listagL` and `listagR` as expected", "2 'dog' nodes created during the '02 Listag::add()' test", 2, function(listag) {
    return listag.length.dog;
  }, "Traversing dogs rightward from the leftmost dog takes 2 steps", 2, function(listag) {
    var i, node;
    i = 0;
    node = listag.first.dog;
    while (node) {
      i++;
      node = node.listagR.dog;
    }
    return i;
  }, "Traversing dogs leftward from the rightmost dog takes 2 steps", 2, function(listag) {
    var i, node;
    i = 0;
    node = listag.last.dog;
    while (node) {
      i++;
      node = node.listagL.dog;
    }
    return i;
  }, "Traversing dogs rightward from `rightmost_dog` takes 1 steps", 1, function(listag) {
    var i, node;
    i = 0;
    node = listag.nodes.rightmost_dog;
    _o;
    while (node) {
      i++;
      node = node.listagR.dog;
    }
    return i;
  }, "The leftmost dog node is 'leftmost_dog'", 'leftmost_dog', function(listag) {
    return listag.first.dog.x;
  }, "The rightmost dog node is 'rightmost_dog'", 'rightmost_dog', function(listag) {
    return listag.last.dog.x;
  }, "The leftmost dog’s leftward dog is null", null, function(listag) {
    return listag.first.dog.listagL.dog;
  }, "The rightmost dog’s rightward dog is null", null, function(listag) {
    return listag.last.dog.listagR.dog;
  }, "The leftmost dog’s `listagR.dog` is 'rightmost_dog'", 'rightmost_dog', function(listag) {
    return listag.first.dog.listagR.dog.x;
  }, "The rightmost dog’s `listagL.dog` is 'leftmost_dog'", 'leftmost_dog', function(listag) {
    return listag.last.dog.listagL.dog.x;
  }
]);
}).call(this,this);
