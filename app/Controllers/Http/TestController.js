'use strict'

class TestController {
   //Extracting the view class of the HTTP context
    myview({ view }) {
        return view.render("myview");
    }
}

module.exports = TestController