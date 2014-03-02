
YUI({useConsole: true}).use("test", function(Y) {
    var suite = new Y.Test.Suite("Test Simple Page"),
        A = Y.Assert,
        OA = Y.ObjectAssert;

    suite.add(new Y.Test.Case({
        "test mojito frame mojit binder exist": function() {
            var frameNode = YY.one('#mojito_mojit_bigpipe_frame_node');
            A.isNotNull(frameNode, 'wrong frameNode');
            // Y.use(function(YY) {
            //     var frameNode = YY.one('#mojito_mojit_bigpipe_frame_node');
            //     A.isNotNull(frameNode, 'wrong frameNode');                
            // });
        }
    }));

    Y.Test.Runner.add(suite);

    //
    // Y.Test.Runner.run();
});
