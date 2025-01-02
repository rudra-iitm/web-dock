/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { WebContainer } from '@webcontainer/api';
import { useEffect, useRef, useState } from 'react';
// import { startShell } from '@/utils/webcontainers';
// import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import CodeEditor from '@/components/code-editor';
import { FileTree } from '@/components/file-tree';
import { useSearchParams } from 'next/navigation'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  

const fetchProjectTree = async (template: string) => {
    const res = await fetch(`/api/projects?template=${template}`);
    if (!res.ok) {
        throw new Error('Failed to fetch project tree');
    }
    return res.json();
};

export default function CodePage() {
  const webcontainerInstance = useRef<WebContainer | null>(null);
//   const iframeEl = useRef<HTMLIFrameElement | null>(null);
//   const terminalRef = useRef<HTMLDivElement | null>(null);
  const [projectFiles, setProjectFiles] = useState<Record<string, any>>({});
  const searchParams = useSearchParams()
  const template = searchParams.get('template') || 'vite';

  useEffect(() => {
    (async () => {
          webcontainerInstance.current = await WebContainer.boot();
          const projectFiles = await fetchProjectTree(template);
          setProjectFiles(projectFiles);
          await webcontainerInstance.current.mount(projectFiles);
        })();
  }, []);
  
  // useEffect(() => {
  //   (async () => {
  //   //   const terminal = new Terminal({
  //   //     convertEol: true,
  //   //   });
  //   //   if (terminalRef.current) {
  //   //     // terminal.open(terminalRef.current);
  //   //   } else {
  //   //     throw new Error('Terminal element is not available');
  //   //   }
  //     const projectFiles = await fetchProjectTree(template);
  //     setProjectFiles(projectFiles);
  //     if (!webcontainerInstance.current) {
  //       // webcontainerInstance.current = await WebContainer.boot();
  //       console.log('webcontainerInstance.current:', webcontainerInstance.current);
  //     }
  //     await webcontainerInstance.current.mount(projectFiles);
  //   //   if (iframeEl.current) {
  //   //     webcontainerInstance.current.on('server-ready', (port, url) => {
  //   //       if (iframeEl.current) {
  //   //         iframeEl.current.src = url;
  //   //       }
  //   //     });
  //   //   } else {
  //   //     throw new Error('iframe element is not available');
  //   //   }
  //   //   startShell(webcontainerInstance.current, terminal);
  //   })();
  // }, []);

  return (
    <div className='h-screen'>
        <ResizablePanelGroup direction="horizontal" 
        className="min-h-[200px] h-full w-full rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={20}>
                <FileTree projectFiles={projectFiles} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={80}>
                <CodeEditor />
            </ResizablePanel>
        </ResizablePanelGroup>
      {/* <iframe ref={iframeEl} className='w-full h-96' />
      <div ref={terminalRef} className='w-full h-96' /> */}
    </div>
  );
}
