function Create_Club(club_name, club_leader, club_details){
    if(club_name.constructor !== String){
        return "Club name must be a string";
    }
    if(club_leader.constructor !== String){
        return "Club leader must only be alphabetical characters";
    }
    if(club_details.constructor !== String){
        return "Club details must be a string";
    }
    if (club_name.length > 0 && club_name.length <= 50 && club_leader.length > 0 && club_details.length >= 25 && club_details.length <= 500){
        return true;
    }
    if(club_name.length == 0){
        return "Club name cannot be empty";
    }
    if(club_name.length > 50){
        return "Club name must be less than 50 characters";
    }
    if(club_leader.length == 0){
        return "Club leader cannot be empty";
    }
    if(club_details.length == 0){
        return "Club details cannot be empty";
    }
    if(club_details.length > 500){
        return "Club details cannot be more than 500 characters";
    }
    return false;    
}

module.exports = Create_Club;