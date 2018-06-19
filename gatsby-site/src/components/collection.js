import React from 'react'
import Link from 'gatsby-link'

// Colection Component
// receives a collection of metadata pertaining to a particular subject
// then organizes that metadata in a list
// required:
//    array of collection objects that contain a collection image and collection name

const Collection = ({ /*Collection Metadata*/ }) => (
<div>
    <ul> {/* onClick activate modal and populate it with the metadata from the clicked collection item */}
        <li>item 1</li>
        <li>item 2</li>
        <li>item 2</li>
    </ul>
</div>

)

export default Collection