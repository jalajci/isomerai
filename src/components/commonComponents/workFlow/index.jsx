import React from 'react'
import ReactFlow from 'react-flow-renderer'
import PropTypes from 'prop-types';

import './workflow.scss'

const WorkFlow = ({ elements, className }) => (
    <div className={`workFlow__wrapper ${className}`}>
        <ReactFlow elements={elements} />
    </div>
)

WorkFlow.defaultProps = {
    elements: [],
    className: ''
}

WorkFlow.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string
}

export default WorkFlow;