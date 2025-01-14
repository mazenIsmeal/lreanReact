import React, {Fragment} from "react";
import ReactDom from 'react-dom'
import styles from './Model.module.css'




const BackDrop = ({close}) => {
    return (
        <div className={styles.backDrop} onClick={close}></div>
    )
}

const OverLay = ({children}) => {
    return (
        <div className={styles.overLay}>
            {children}
        </div>
    )
}

const Model = ({show, close, children}) => {
    return (
        show && ( 
        <Fragment>
            {
                ReactDom.createPortal(<Fragment><BackDrop close={close} /> <OverLay>{children}</OverLay></Fragment>, document.getElementById('model'))
            }
        </Fragment>
        )
    )
}

export default Model