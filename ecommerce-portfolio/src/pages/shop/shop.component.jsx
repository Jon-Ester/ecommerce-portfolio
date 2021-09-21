import React from 'react';
import ShopData from  './shop.data.js'
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';

class ShopPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collections: ShopData
    }
  }

  render (){
    const {collections} =this.state;
    return <div className ="shop-page">
      {
        collections.map(({id, title, routeName, items}) =>(
          <PreviewCollection key ={id} title = {title} routeName = {routeName} items = {items}/>
        ))
      }

    </div>
  }
}

export default ShopPage;