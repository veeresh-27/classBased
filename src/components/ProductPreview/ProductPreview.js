import React from 'react';
import classes from './ProductPreview.module.css'

function ProductPreview(props) {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return <div className={classes.productPreview}>
        <img src={props.currentPreviewImage} alt="img" />
        {
            props.heartBeat ? <div className={classes.hearBeat}>
                                <i className="fas fa-heartbeat"></i>
                                    <p >78</p>
                            </div>
                            : 
                                <div className={classes.time}>
                                    <p>{`${currentHour}:${currentMinute}`}</p>
                                </div>
            }
    </div>;
}

export default ProductPreview;
