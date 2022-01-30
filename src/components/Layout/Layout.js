import React, { Component } from 'react';
import classes from './Layout.module.css'
import ProductPreview from '../ProductPreview/ProductPreview';
import ProductDesc from '../ProductDesc/ProductDesc';
import ProductData from '../ProductData';

class Layout extends Component {
    state ={
        productData: ProductData,
        currentPreviewImagePos:0,
        heartBeat: false,
    }
    onColorOptionClick = (pos)=>{
        this.setState({currentPreviewImagePos:pos})
    }

    onClickFeatureBtn = (pos)=>{
        let updatedState = false;
        if(pos==1){
            updatedState=true;
        }
        
        this.setState({heartBeat:updatedState})
    }
    
    render() {
        
        return (
            <div className={classes.layout}>
                <div className={classes.productPreview}>
                    <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} heartBeat={this.state.heartBeat}/>
                </div>
                <div className={classes.productDesc}>
                    <ProductDesc data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
                    currentPreviewImagePos={this.state.currentPreviewImagePos} onClickFeatureBtn={this.onClickFeatureBtn} heartBeat={this.state.heartBeat}/>
                </div>
            </div>
        );
    }
}

export default Layout;