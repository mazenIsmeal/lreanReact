import React, {useState} from "react";
import styles from './filter.module.css'

const Filter = ({filtration}) => {
    const [filter, setFilter] = useState('')

    const filterHandler = (e) => {
        let name = e.target.value
        setFilter(name)
        filtration(name)
    }

    return(
        <div className={styles.mainFilter}>
            <input type='text' placeholder='test' value={filter} onChange={filterHandler} />
        </div>
    )
}

export default Filter