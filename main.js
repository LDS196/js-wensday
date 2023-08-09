function anagrams(word, words) {
    let res = []
    for (let i = 0; i < words.length; i++) {
        const example = words[i]
        if ( word.length === example.length) {
            if (word.split('').sort().join(' ') === example.split('').sort().join(' ')){
                res.push(example)
            }
        }
    }
    return res
}

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
