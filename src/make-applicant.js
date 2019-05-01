function getApplicant(formData) {
    //convert data to variables
    const isTimingGood = formData.get('meow-time') === 'yes';
    const howWillingToDie = parseInt(formData.get('die'));
    const howManyLives = parseInt(formData.get('lives'));

    //make our object literal
    const applicant = {
        name: formData.get('name'),
        meowTime: isTimingGood,
        die: howWillingToDie,
        lives: howManyLives,
    };
    return applicant;
}

export default getApplicant;