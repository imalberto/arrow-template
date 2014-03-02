

var s = "abc";

function insertCharAt(word, c, pos) {
    var start = word.substring(0, pos);
    var end =  word.substring(pos);
    return start + 'c' + end;
}

// returns an array of string
function permute(s) {

    var c,
        str,
        words, // array of string
        i,
        permutations = [];

    if (typeof s === "undefined") {
        throw new Error('invalid base case');
    }
    if (0 === s.length) {
        // base case
        permutations.push('');
        return permutations;
    }

    if (1 === s.length) {
       c = s;
       str = '';
    } else {
        c = s.substring(0, 1);
        str = s.substring(1);
    }

    console.log(c, str);
    words = permute(str);
    console.log(words);
    for (var word in words) {
        console.log(word);
        for (i=0; i<word.length; i++) {
            console.log('insert ' + c + ' at position ' + i + ' in word ' + word);
            permutations.push(insertCharAt(word, c, i));
        }
    }
    return permutations;
}


permute(s);