import React from 'react'
import '../../../styles/SelectInput.css'
export default function SelectInput({ height, width, type,placeholder }) {
    const options=['Text','Compiler','Graph','Drawing','Graph']
    const styles = {
        input: {
            height: height && height,
            minHeight: "30px",
            minWidth: '170px',
            width: width && width,
        }
    }

    return (
        <select name="select" style={styles.input}>
            {
                options.map(option=>(
                    <option value="">{option}</option>
                ))
            }
        </select>
    )
}