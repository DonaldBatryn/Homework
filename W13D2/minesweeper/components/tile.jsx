import React from 'react'

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
    this.state = { status: ""}
    // let status;
  }

  handleClick(e){
    e.preventDefault();
    let altkeyBoolean = e.altKey;
    this.props.updateGame(this.props.tile, altkeyBoolean);
    
  }

  // gameOverRender(prop){
    
  //    if (this.props.tile.bombed) {
  //      this.state.status = "💣"
  //    }
  // //   render({bombs:true})
  // }
  render() {
   
    let classname = 'default';
    if (this.props.tile.bombed){
      if (this.props.board.lost()){
        this.state.status = "💣"
        classname = "bombed"
      } else {
        this.state.status = ""; 
        classname = 'bombed';
      }
      
    } else if (this.props.tile.flagged) {
      this.state.status = "🚩";
      classname = 'flagged';
      
    } else if (this.props.tile.explored && this.props.tile.adjacentBombCount() > 0) {
      this.state.status = this.props.tile.adjacentBombCount();
      classname = 'revealed';
    }
   
    
    return (
      <div className={`tile-${classname}`} onClick={this.handleClick} >{ this.state.status }</div>  
    )
  }
}
// unicode for red flag   ==> U + 1F6A9
// onAuxClick= {handleFlagClick}
// bomb ‎U+1F4A3	  