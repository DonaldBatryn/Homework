const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
 
    this.render();
    this.$el.on("click", this.handleClick.bind(this)); 
    
  }

    render() {
        if (this.followState === "unfollowed") {
            // debugger
            this.$el.html("Follow!");
        } else if (this.followState === "followed"){
            this.$el.html("Unfollow!");
        }
    };

    handleClick(event) {
        event.preventDefault();
        
        let reqType;
        if (this.followState === "unfollowed") {
            reqType = "POST";
        } else {
            reqType = "DELETE";
        }
        const that = this;
        $.ajax({
            type: `${reqType}`,
            url: `/users/${that.userId}/follow`,
            dataType : 'json',
            // Accept: 
            // respond_to(json)
            success(data) {
                if (reqType === 'POST') {
                that.followState = 'followed';
                } else {
                that.followState = 'unfollowed';
                }
            //    debugger
                that.render();
                // debugger
            },
            error() {
                console.log("Something went wrong...")
            }
        })
    }

}

// handleClick(event) {
//     event.preventDefault();
//     if (this.followState === "followed") {
//         this.followState = "unfollowing";
//         this.render();
//         // debugger
//         APIUtil.unfollowUser(this.userId).then(
//             this.successUnfollowed.bind(this), this.error
//         );
//     } else if (this.followState === "unfollowed") {
//         this.followState = "following";
//         this.render();
//         APIUtil.followUser(this.userId).then(
//             this.successFollowed.bind(this), this.error
//         );
//     }
// }

module.exports = FollowToggle;