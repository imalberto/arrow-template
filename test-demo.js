
YUI().use("event", "node", "test", function(Y) {
    var suite = new Y.Test.Suite("Demo Page"),
        A = Y.Assert,
        OA = Y.ObjectAssert;

    suite.add(new Y.Test.Case({
        "test title of page": function() {            
            Y.use('node', 'event', function(YY) {
                var title = document.title,
                    body = document.body;
                    
                A.areEqual('Powered by Mojito 0.2', title, 'wrong title');
            });
        },
        "test ul count": function() {
            var ulList = Y.all('ul');
            Y.log(ulList);
            A.isNotUndefined(ulList, 'wrong ulList');
            A.areEqual(5, ulList.getDOMNodes().length, 'wrong length');
            
            // Y.use('node', 'event', function(YY) {
            //     // Assert that there are 5 <ul>
            //     var ulList = YY.all('ul');
            //     Y.log(ulList);
            //     A.isNotUndefined(ulList, 'wrong ulList');
            //     A.areEqual(5, ulList.getDOMNodes().length, 'wrong length');
            // });
        }
        
    }));

    Y.Test.Runner.add(suite);

    //
    // Y.Test.Runner.run();
});
