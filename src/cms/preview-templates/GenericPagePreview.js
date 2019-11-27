import React from 'react'
import PropTypes from 'prop-types'
import { GenericPageTemplate } from '../../templates/generic-page'

const GenericPagePreview = ({ entry, widgetFor }) => (
  <GenericPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

GenericPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GenericPagePreview
