// takes in string returns string.
// hashing input, shorter output
// unique each time, also consistent


// create math op, take index of given character
// string.length of original
// allCharaters.length => choices num


// let url = www.google.com/search?hkw987rw47h98w4f90w4f

function myUrlShortener(url){
    let allCharacters = 'abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let urlMid = Math.floor(url.length / 3)
    let halfUrl = url.slice(urlMid * 2)
    // store original url to server/database
    // check if DB has seen this url, if so, return shortUrl stored with it

    let shortUrl = 'www.tiny.com/'
    for (let i = 0; i < halfUrl.length; i++) {
        let idx = allCharacters.indexOf(halfUrl[i])
        shortUrl = `${shortUrl}${idx}`
    }
    return shortUrl
}

// www.tiny.com/3957632957570