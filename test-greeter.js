
YUI({ useBrowserConsole: false }).use("arrow-greeter", "test", function(Y) {
    var suite = new Y.Test.Suite("Our First Test Suite"),
        A = Y.Assert,
        OA = Y.ObjectAssert;

    suite.add(new Y.Test.Case({

        "test greet": function() {
            var greeter = new Y.Arrow.Greeter();
            A.areEqual(greeter.greet("Joe", "Smith"), "Smith, Joe");
        }
        /*
        "test title of page": function() {
            var title = document.title,
                body = document.body;

            A.areEqual('Powered by XX Mojito/Bigpipe 0.2', title, 'wrong title');
        }
        */
    }));

    Y.Test.Runner.add(suite);
});
