
var value = "off";
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var arr = req.url.split("/");
    if(arr[1] == "set"){
        value = arr[2];
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: value
    };
}