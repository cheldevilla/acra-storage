function(doc) {

    // !code vendor/acra-storage/utils.js
    var result = utils.digestReport(doc);
    if(result) {
        var reportDate = new Date(doc.USER_APP_START_DATE);
        var key = [doc.ANDROID_VERSION, reportDate];
        emit(key, result);
    }
};