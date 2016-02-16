Listag
========

@todo describe


#### The main class for Listag

    class Listag
      C: 'Listag'
      toString: -> '[object Listag]'

      constructor: (config={}) ->
        M = "/listag/src/Listag.litcoffee
          Listag()\n  "




Properties
----------


#### `nodes <object>`
Contains all objects currently held by this Listag instance. 

        @nodes = {}


#### `length <object>`
@todo describe

        @length = { all:0 }


#### `first <object>`
@todo describe

        @first = { all:null }


#### `last <object>`
@todo describe

        @last = { all:null }




Methods
-------


#### `add()`
- `node <object>`           `listagL/R` properties will be added to this
- `id <string>`             (optional) an identifier (generated if missing)
- `tags <array of string>`  (optional) @todo prevent the special string 'all'
- `<string>`                returns the newly-added object’s identifier

Records an object in `nodes`. 

      add: (node, id, tags) ->
        M = "/listag/src/Listag.litcoffee
          Listag::add()\n  "

Check that the arguments are ok, and that `id` is unique. 

        v = _o.validator M + "argument ", { node:node, id:id }
        node = v 'node <object>'
        id   = v 'id <string ^[a-z]\\w{1,23}$>', _o.uid()

        unless _o.isU @nodes[id] then throw RangeError M + "
          a node with id '#{id}' already exists"

        _o.vArray M + "argument tags", tags, 
          '<array of string ^[a-z]\\w{1,23}$>', []

        tmp = {}
        for tag,i in (tags || [])
          if 'all' == tag then throw RangeError M + "
            argument tags[#{i}] is the special tag 'all'"
          if tmp[tag] then throw  RangeError M + "
            argument tags[#{i}] is a duplicate of tags[#{tmp[tag]}]"
          tmp[tag] = i

Apply the `listagL` and `listagR` object properties. 

        node.listagL = if @length.all then { all:@last.all } else { all:null }
        node.listagR = { all:null }

Append the new object to `nodes`. 

        if @length.all
          @last.all.listagR.all = node
        else
          @first.all = node
        @last.all = node
        @nodes[id] = node
        @length.all++

Return `id`, which was either passed in as an argument, or autogenerated. 

        return id




#### `xx()`
- `yy <zz>`      @todo describe
- `<undefined>`  does not return anything

@todo describe

      xx: (yy) ->
        M = "/listag/src/Listag.litcoffee
          Listag::xx()\n  "




Namespaced Functions
--------------------


#### `xx()`
- `yy <zz>`      @todo describe
- `<undefined>`  does not return anything

@todo describe

    Listag.xx = (yy) ->
      M = "/listag/src/Listag.litcoffee
        Listag.xx()\n  "




    ;