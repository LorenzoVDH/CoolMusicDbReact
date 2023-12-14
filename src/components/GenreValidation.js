const genreValidation = (genreForm) => {
    console.log(genreForm);

    let validationErrors = [];

    if (String(genreForm.name).trim() === '') {
        validationErrors.push("A name for the genre must be specified");
    }

    // if (genreForm.countryCodes === null || undefined || genreForm.countryCodes?.length === 0) {
    //     validationErrors.push("Please select one or more countries of origin");
    // }    

    if (isNaN(new Date(genreForm.dateOfOrigin).getTime())) {
        validationErrors.push("Please select a valid date of origin");
    }

    if (String(genreForm.description).trim() === '') {
        validationErrors.push("Please enter a description");
    }

    return validationErrors;
};

export default genreValidation; 