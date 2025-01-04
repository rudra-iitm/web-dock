/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { WebContainer } from '@webcontainer/api';
import { useEffect, useRef, useState } from 'react';
import '@xterm/xterm/css/xterm.css';
import CodeEditor from '@/components/code-editor';
import { FileTree } from '@/components/file-tree';
import { useSearchParams } from 'next/navigation'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { TerminalDrawer } from '@/components/terminal-drawer';
import { MiniBrowserDialog } from '@/components/mini-browser-drawer';

const fetchProjectTree = async (template: string) => {
    const res = await fetch(`/api/projects?template=${template}`);
    if (!res.ok) {
        throw new Error('Failed to fetch project tree');
    }
    return res.json();
};

export default function CodePage() {
  const webcontainerInstance = useRef<WebContainer | null>(null);
  const [projectFiles, setProjectFiles] = useState<Record<string, any>>({});
  const [currentFile, setCurrentFile] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const searchParams = useSearchParams()
  const template = searchParams.get('template') || 'vite';
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
          webcontainerInstance.current = await WebContainer.boot();
          const projectFiles = await fetchProjectTree(template);
          setProjectFiles(projectFiles);
          await webcontainerInstance.current.mount(projectFiles);
          webcontainerInstance.current.on('server-ready', (port, url) => {
            console.log('Server ready:', port, url);
            console.log('Setting iframe src:', url);
            setIframeUrl(url);
            });
        })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (currentFile) {
        console.log('Reading file:', currentFile);
        const fileContent = await webcontainerInstance.current?.fs.readFile(currentFile, 'utf-8');
        if (fileContent !== undefined) {
          setContent(fileContent);
        }

      }
    })();
  }, [currentFile]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (currentFile) {
          (async () => {
            if (currentFile) {
              console.log('Writing file:', currentFile);
              await webcontainerInstance.current?.fs.writeFile(currentFile, content, 'utf-8');
            }
          })();
        }
      }
    };

    const timer = setTimeout(() => {
      if (currentFile) {
        (async () => {
          if (currentFile) {
            console.log('Writing file:', currentFile);
            await webcontainerInstance.current?.fs.writeFile(currentFile, content, 'utf-8');
          }
        })();
      }
    }, 2000);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div className='h-screen'>
      <div className="flex items-center gap-3">
              <MiniBrowserDialog url={iframeUrl}/>
              {webcontainerInstance.current && <TerminalDrawer webcontainerInstance={webcontainerInstance.current} />}
      </div>
        <ResizablePanelGroup direction="horizontal" 
        className="min-h-[200px] h-full w-full border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={20}>
                <FileTree projectFiles={projectFiles} setCurrentFile={setCurrentFile} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={80}>
                <CodeEditor content={content} setContent={setContent}/>
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>
  );
}
