import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import Row from 'react-bootstrap/esm/Row';
import Item from './Item';
import '../App.css'

const ItemList = observer(({search}) => {

    const {item} = useContext(Context)
    
    return (
        <div className="centerItem">
            <Row className="centerItem" style={{padding: '2% 0 2% 0'}}>
                {!search ? 
                item.items.map(item => 
                    <Item key={item.id} item={item} />
                ) : 
                item.items.map(item => {
                    if (item.name.includes(search)) {
                        return <Item key={item.id} item={item} />
                    }
                })}
            </Row>
        </div>
    );
});

export default ItemList;