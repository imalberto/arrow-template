
/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI,window*/

/**
 * Those are integration test to verify content from reference mojito app
 */
YUI({useConsole: true}).use("event", "node", "test", function(Y) {
    var suite = new Y.Test.Suite("Test Simple1 Page"),
        A = Y.Assert,
        OA = Y.ObjectAssert;

    suite.add(new Y.Test.Case({
        // verify that frame binder is set
        "test mojito frame mojit binder exist": function() {
            var frameNode = Y.one('#mojito_mojit_bigpipe_frame_node');
            A.isNotNull(frameNode, 'wrong frameNode');
        },
        
        // verify that window.bigpipe.cache is empty (all has been processed)
        "test window.bigpipe.cache is empty if set": function() {
            if (window.bigpipe &&
                    window.bigpipe.cache &&
                    Y.Lang.isArray(window.bigpipe.cache)) {
                A.isTrue(0 === window.bigpipe.cache.length, 'wrong length');
            }
        },

        "test child node is set": function() {
            A.isNotNull(Y.one('#child'), 'missing child node');
        },

        "test blockOne node is set": function() {
            A.isNotNull(Y.one('#blockOne'), 'missing blockOne node');
        }
        
    }));

    Y.Test.Runner.add(suite);

    //
    // Y.Test.Runner.run();
});
