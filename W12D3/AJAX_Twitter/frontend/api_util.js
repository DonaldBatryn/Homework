const APIUtil = {
  followUser: id => {
    // ...
    $.ajax({
        type: "POST",
        url: `/users/${id}/follow`,
        dataType: 'json',
        success(data){
            console.log("it worked")
        },
        error() {
            console.log("error in apiUtil")
        }
       
    })
  },

  unfollowUser: id => {
    // ...
    $.ajax({
      type: "DELETE",
      url: `/users/${id}/follow`,
      dataType: 'json',
      success(data) {
        console.log("it worked")
      },
      error() {
        console.log("error in apiUtil")
      }

    })
  }
};

module.exports = APIUtil;