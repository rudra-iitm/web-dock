/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { WebContainer } from '@webcontainer/api';
import { useEffect, useRef, useState } from 'react';
import '@xterm/xterm/css/xterm.css';
import CodeEditor from '@/components/code-editor';
import { FileTree } from '@/components/file-tree';
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/IDE/header';
import { Resizable } from 're-resizable';
import { StatusBar } from '@/components/IDE/status-bar';

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
    <div className="h-screen flex flex-col">
      <Header
        iframeUrl={iframeUrl}
        webcontainerInstance={webcontainerInstance.current}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <Resizable
          defaultSize={{ width: '240px', height: '100%' }}
          minWidth="160px"
          maxWidth="400px"
          enable={{ right: true }}
          className="border-r border-border"
        >
          <FileTree projectFiles={projectFiles} setCurrentFile={setCurrentFile} />
        </Resizable>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 min-h-0">
            <CodeEditor content={content} setContent={setContent}/>
          </div>
        </div>
      </div>
      <StatusBar activeFile={currentFile} />
    </div>
  );
}
