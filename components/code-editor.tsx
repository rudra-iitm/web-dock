import React from 'react'
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: React.SetStateAction<string>) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <div className='w-full h-full'>
        <ReactCodeMirror value={value} height='900px' theme='dark' autoFocus  extensions={[javascript({ jsx: true })]} onChange={onChange} />
    </div>
  )
}

export default CodeEditor;