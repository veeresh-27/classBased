import React from 'react';
import ProductData from '../ProductData'
import classes from './ProductDesc.module.css'

function ProductDesc(props) {
    const colorOption = props.data.colorOptions.map((item,pos)=>{
        const classArr =[classes.productImage]
        if(pos==props.currentPreviewImagePos){
            classArr.push(classes.productImageSelected)
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=> props.onColorOptionClick(pos)}/>
        );
    })

    const featureList = props.data.featureList.map( (item,pos)=>{
        const btnArr = [classes.featureItem]
        if(pos== props.heartBeat){
            btnArr.push(classes.featureItemSelected)
        }
        return(
            <button key={pos} className={btnArr.join(' ')} onClick={()=>props.onClickFeatureBtn(pos)} >{item}</button>
        )
    })

    
  return <div className={classes.productDesc}>
      <h1 className={classes.productTitle}>
                    {props.data.title}
                    </h1>
                    <p className={classes.productDetail}>{ProductData.description}</p>
                   <h3 className={classes.selectHeading}>Select Color</h3>
                   <div>
                      {colorOption}
                       
                   </div>
                   <h3 className={classes.selectHeading}>Features</h3>
                   <div>
                       {featureList}
                    </div>
                   <button className={classes.productBuy}>Buy Now</button>
    </div>

    ;
}

export default ProductDesc;
