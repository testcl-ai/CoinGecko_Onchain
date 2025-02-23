const newman = require('newman');

newman.run({
    collection: require('/Users/genevaroxanneparayno/Documents/CoinGecko/CoinGeckoTests.postman_collection.json'),
    environment: require('/Users/genevaroxanneparayno/Documents/CoinGecko/CoinGeckoEnv.json'),
    folder: 'Security Tests',
    reporters: ['cli', 'json', 'htmlextra'],
    reporter: {
        htmlextra: {
            export: './security-test-report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});
