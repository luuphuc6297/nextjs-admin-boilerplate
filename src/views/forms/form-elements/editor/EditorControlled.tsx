// ** React Imports
import { useState } from 'react'

// ** Third Party Imports
import ReactDraftWysiwyg from '@/core/components/react-draft-wysiwyg'
import { EditorState } from 'draft-js'

const EditorControlled = () => {
    // ** State
    const [value, setValue] = useState(EditorState.createEmpty())

    return <ReactDraftWysiwyg editorState={value} onEditorStateChange={(data) => setValue(data)} />
}

export default EditorControlled
