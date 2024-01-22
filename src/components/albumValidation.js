const albumValidation = (albumForm) => {
    let validationErrors = [];

    if (String(albumForm.name).trim() === '') {
        validationErrors.push("A name for the album must be specified");
    }

    if (isNaN(new Date(albumForm.releaseDate).getTime())) {
        validationErrors.push("Please select a valid releasedate");
    }

    return validationErrors;
};

export default albumValidation; 