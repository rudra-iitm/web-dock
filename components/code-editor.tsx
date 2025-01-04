import React from 'react'
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = ({content, setContent}: { content: string, setContent: React.Dispatch<React.SetStateAction<string>> }) => {
  const onChange = React.useCallback((val: React.SetStateAction<string>) => {
    setContent(val);
  }, [setContent]);
  return (
    <div className='w-full h-full'>
        <ReactCodeMirror value={content} height='900px' theme='dark' autoFocus  extensions={[javascript({ jsx: true })]} onChange={onChange} />
    </div>
  )
}

export default CodeEditor;