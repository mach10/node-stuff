/*
what I discovered here was that turning off the proxy within WebStorm (via Preferences) had no effect on this script.
Running this script from the command line was influenced by environment variables. So unsetproxies would result
in 'undefined' being returned.
However, that had no effect on the script being run here.  The http_proxy value was always set.
 */

var httpProxy = process.env.http_proxy;

console.log("---------")
console.log(httpProxy)
console.log("---------")