function Create_Post(header, description){
    if(header.constructor !== String){
        return "Header must be a string";
    }
    if(description.constructor !== String){
        return "Description must be a string";
    }
    if (header.length > 0 && header.length <= 50 && description.length >= 25 && description.length <= 500){
        return true;
    }
    if(header.length == 0){
        return "Header cannot be empty";
    }
    if(header.length > 50){
        return "Header cannot be more than 50 characters";
    }
    if(description.length == 0){
        return "Description cannot be empty";
    }
    if(description.length > 500){
        return "Description cannot be more than 500 characters";
    }
    return false;    
}
module.exports = Create_Post;