import React, { Component } from 'react'

import Box from './Box'

import styles from './BoxContainer.module.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 15
    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box />
        ))
        return <div className={styles.BoxContainer}>{boxes}</div>
    }
}

export default BoxContainer
