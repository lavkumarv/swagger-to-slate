function convertToMd(rs, output) {
    rs.pipe(concat(function(buf) {
        const str = String(buf)

        const html = main(str, argv)
        process.stdout.write(util.format(html) + '\n')
    }))
}

module.exports = convertToMd;