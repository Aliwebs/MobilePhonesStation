let fs = require('fs');

fs.readdir(__dirname, (err, result) => {
    if (err) throw err;
    result = result.filter(item => item !== 'index.js')
    result.forEach(subdir => {
        let files = fs.readdirSync(subdir, 'utf-8');
        files.forEach(filename => {
            fs.rename(__dirname + '/' + subdir + '/' + filename, './' + subdir + '/' + filename.toLocaleLowerCase(), err => {
                if (err) throw err;
            })
        })
    })
})