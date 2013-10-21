var matchesHitch = {
    name: "matches",
    base: "*",
    type: "selector",
    filter: function(el, selectorArgs){
        var i, len,
          match = false,
          args = selectorArgs.split(','),
          list = el.parentElement;

        for (i = 0, len = args.length; i < len; i++) {
          var q = list.querySelector(args[i].trim());
          if (q && q === el) {
            match = true;
          } else {
            match = false;
          }
        }

        return match;
    }
};
Hitch.add(matchesHitch);