function sleepsort() {
    return [];
}
function sleepsort(array, callback) {
    return process.nextTick(function() {callback([]);});
}
module.exports = sleepsort;