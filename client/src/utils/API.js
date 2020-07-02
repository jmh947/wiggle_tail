import axios from "axios";

export default {

    // User's input information
    signUp : function(userInfo) {
        return axios.post("/api/ownerprofile", userInfo).then(result => result.data);
    },

    LogIn: function(id) {
        return axios.get("/api/ownerprofile" + id)
        .then(result => result.data);
    }



}