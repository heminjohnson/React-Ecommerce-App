import React from 'react'

import './collection.styles.scss'

const CollectionPage = ({match}) => {
  console.log(match.params.collectionId)
  return (
    <div className={'collection-page'}>
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}

export default CollectionPage
