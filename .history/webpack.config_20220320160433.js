module.exports = 
{
    resolve:
    {
        fallback : { process: require.resolve('util/'), crypto: require.resolve("crypto-browserify")},
    },
}; 