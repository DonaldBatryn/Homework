import React from 'react'


const BenchIndexItem = (props) => {

    let descrip = props.bench.description
    return (
        <div>
            
            -{descrip}
        </div>
    )
    
}

export default BenchIndexItem;