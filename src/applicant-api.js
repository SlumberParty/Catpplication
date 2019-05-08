const applicantApi = {
    storage: localStorage,
    save(applicant) {
        //get our applicant array
        const applicants = applicantApi.getAll();
        //add applicant to array
        applicants.push(applicant);
        // serialize to json
        const json = JSON.stringify(applicants);
        // save to local storage
        applicantApi.storage.setItem('applicants', json);
    },
    get() {
        // use get all to fetch applicants
        const applicants = applicantApi.getAll();
        //return it
        //tomorrow we will find the "right" one
        return applicants[0];
    },
    getAll() {
        // get from local storage
        const json = applicantApi.storage.getItem('applicants');
        //deserialize to object
        let applicants = JSON.parse(json);
        if(!applicants) {
            applicants = [];
        }

        return applicants;
    }
};

export default applicantApi;