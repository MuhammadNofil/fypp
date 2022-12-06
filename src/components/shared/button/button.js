import React from 'react'

export default function FlatButton({ height, width, border, title,borderRadius }) {

    const styles = {
        button: {
            width,
            height,
            border,
            borderRadius,
            cursor: 'pointer',
        }
    }

    return (
        <button style={styles.button}>
            {title}
        </button>
    )
}