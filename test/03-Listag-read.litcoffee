03 Listag::read()
=================


    tudor.add [
      "03 Listag::read()"
      tudor.is




      "`read()` is a function which returns an object"

Prepare a test-instance. 

      -> [new Listag]


      "`read()` is a function"
      _o.F
      (listag) -> listag.read


      "`read('the_first')` returns a Date with the correct type"
      'date'
      (listag) ->
        listag.add (new Date), 'the_first'
        listag.read 'the_first'

      tudor.equal

      "A returned number is the same as the `cargo` argument passed to `add()`"
      4.56
      (listag) ->
        listag.add 4.56, 'the_second'
        listag.read 'the_second'

      "A returned object is the same as the `cargo` argument passed to `add()`"
      true
      (listag) ->
        cargo = {}
        listag.add cargo, 'the_third'
        cargo == listag.read 'the_third'




      "The `id` argument accepts a string as expected"


      "Shortest possible id"
      11
      (listag) ->
        listag.add {x:11}, 'aB'
        listag.read('aB').x


      "Longest possible id"
      22
      (listag) ->
        listag.add {x:22}, 'abcdefghijklMNOPQRST123_'
        listag.read('abcdefghijklMNOPQRST123_').x


      "An autogenerated id (the `add()` `id` argument can be `null`)"
      44
      (listag) ->
        id = listag.add {x:44}, null
        listag.read(id).x




      "`id` exceptions"
      tudor.throw


      "Is boolean"
      """
      /listag/src/Listag.litcoffee Listag::read()
        argument id is type boolean not string"""
      (listag) -> listag.read true


      "Too short"
      """
      /listag/src/Listag.litcoffee Listag::read()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.read 'a'


      "Too long"
      """
      /listag/src/Listag.litcoffee Listag::read()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.read 'aBcDeFgHiJkLmNoPqRsT123_X'


      "Underscore is an invalid first character"
      """
      /listag/src/Listag.litcoffee Listag::read()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.read '_abc'


      "Number is an invalid first character"
      """
      /listag/src/Listag.litcoffee Listag::read()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.read '1abc'


      "Uppercase is an invalid first character"
      """
      /listag/src/Listag.litcoffee Listag::read()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.read 'Abc'


      "Must not contain a hyphen"
      """
      /listag/src/Listag.litcoffee Listag::read()
        argument id fails ^[a-z]\\w{1,23}$"""
      (listag) -> listag.read 'ab-c'


      "Must exist"
      """
      /listag/src/Listag.litcoffee Listag::read()
        the node with id 'non_existant' does not exist"""
      (listag) ->
        listag.read 'non_existant'




    ];
