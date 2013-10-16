function(doc) {
    if(doc.REPORT_ID) {
        var crashDate = new Date(doc.USER_APP_START_DATE);
        emit(crashDate, doc._rev);
    }
}