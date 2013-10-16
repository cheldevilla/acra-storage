function(doc) {
    if(doc.USER_CRASH_DATE) {
        var crashDate = new Date(doc.USER_APP_START_DATE);
        emit[crashDate, 1]
    }
}