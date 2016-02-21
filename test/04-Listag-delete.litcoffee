04 Listag::delete()
===================


    tudor.add [
      "04 Listag::delete()"
      tudor.is




      "`delete()` is a function which does not return anything"

Prepare a test-instance. 

      -> [new Listag]


      "`delete()` is a function"
      oo.F
      (listag) -> listag.delete


      "`delete()` is not writable"
      oo.F
      (listag) ->
        listag.delete = 123
        listag.delete


      "`delete()` is not configurable"
      oo.F
      (listag) ->
        try
          Object.defineProperty listag, 'delete', { writable:true }
        catch e
        listag.delete = 123
        listag.delete


      "`delete('the_first')` returns `undefined`"
      oo.U
      (listag) ->
        listag.add (new Date), 'the_first'
        listag.delete 'the_first'

      tudor.equal

      "After deletion, `total.node` is zero"
      0
      (listag) ->
        Object.keys(listag.total).length




      "The `id` argument accepts a string as expected"


      "Shortest possible id"
      0
      (listag) ->
        listag.add {}, 'a1'
        listag.delete 'a1'
        Object.keys(listag.total).length


      "Longest possible id"
      0
      (listag) ->
        listag.add {}, 'abcdefghijklMNOPQRST123_'
        listag.delete 'abcdefghijklMNOPQRST123_'
        Object.keys(listag.total).length


      "An autogenerated id"
      0
      (listag) ->
        id = listag.add {}
        listag.delete id
        Object.keys(listag.total).length




      "`id` exceptions"
      tudor.throw


      "Is boolean"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        argument id is type boolean not string"""
      (listag) -> listag.delete true


      "Too short"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.delete 'a'


      "Too long"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.delete 'aBcDeFgHiJkLmNoPqRsT123_X'


      "Underscore is an invalid first character"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.delete '_abc'


      "Number is an invalid first character"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.delete '1abc'


      "Uppercase is an invalid first character"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.delete 'Abc'


      "Must not contain a hyphen"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.delete 'ab-c'


      "Must exist"
      """
      /listag/src/Listag.litcoffee Listag::delete()
        the node with id 'non_existant' does not exist"""
      (listag) ->
        listag.delete 'non_existant'




    ];

