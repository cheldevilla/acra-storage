function(doc) {
    if (doc.SIGNATURE && doc.SIGNATURE.digest && (typeof doc.APP_VERSION_CODE !== 'undefined') && doc.USER_APP_START_DATE) {
        // This is a report, compute stats
        var key = [ doc.APP_VERSION_CODE, doc.SIGNATURE.digest ];
        if (doc.SIGNATURE.rootCause) {
            key.push(doc.SIGNATURE.rootCause)
        } else {
            key.push("");
        }
        var reportDate = new Date(doc.USER_APP_START_DATE);
        var value = { latest: reportDate, count: 1 };
        emit(key, value);
    } else if (doc.type == "solved_signature") {
        // This is a "solved" marker, mark it as solved
        var key = [ doc.APP_VERSION_CODE, doc.digest ];
        if (doc.rootCause) {
            key.push(doc.rootCause)
        } else {
            key.push("");
        }
        var value = { solved: doc.solved };
        if (doc.description) {
            value.description = doc.description;
        } else {
            value.description = "";
        }
        // TODO: maybe we should emit as many markers as there APP_VERSION_CODE possible anterior values
        emit(key, value);
    }
}