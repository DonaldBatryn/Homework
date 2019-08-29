import React from 'react';
import { Link } from 'react-router-dom';

class ItemDetail extends React.Component {



    componentDidUpdate(prevProps){
      
    }

    render(){
        let item = this.props.item
       
        return (
            <div>
                <img src={item.image_url} className="item-img" />
                {item.name}
                {item.price}
                {item.happiness}
            </div>
        )
    }
}

export default ItemDetail;