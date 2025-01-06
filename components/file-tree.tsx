/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react";
import { File, Folder, Tree, TreeViewElement } from "@/components/ui/file-tree";
import { parseProjectFiles } from "@/utils/parseProjectFiles";
import { FaFileCode, FaReact, FaNodeJs, FaCss3 } from 'react-icons/fa';
import { FaStar } from "react-icons/fa6";
import { BiSolidFileJson } from "react-icons/bi";
import { RiNpmjsFill } from "react-icons/ri";
import { SiSvg, SiTypescript, SiJavascript, SiVite, SiNextdotjs, SiMarkdown, SiGitignoredotio } from 'react-icons/si';


interface FileTreeProps {
  projectFiles: Record<string, any>;
  setCurrentFile: (fileName: string) => void;
}

export function FileTree({ projectFiles, setCurrentFile }: FileTreeProps) {
  const [elements, setElements] = useState<TreeViewElement[]>([]);

  useEffect(() => {
    const parsedFiles = parseProjectFiles(projectFiles);
    parsedFiles.forEach((file) => {
      file.name = file.name.split('/')[file.name.split('/').length - 1];
    });
    setElements(parsedFiles);
  }, [projectFiles]);

  const renderTreeItems = (items: any[]) => {
    return items.map((item) => {
      item.name = item.name.split('/')[item.name.split('/').length - 1];
      if (item.children && item.children.length > 0) {
        return (
          <Folder key={item.id} element={item.name} value={item.id}>
            {renderTreeItems(item.children)}
          </Folder>
        );
      } else {
        return <File key={item.id} value={item.id} fileIcon={getFileIcon(item.name)} handleSelect={() => setCurrentFile(item.filePath) }>{item.name}</File>;
      }
    });
  };

  return (
    <div className="relative flex h-full w-full flex-col items-start justify-start overflow-auto p-4 md:shadow-xl">
      {elements.length > 0 && (
        <Tree
          className="w-full"
          elements={elements}
        >
          {renderTreeItems(elements)}
        </Tree>
      )}
    </div>
  );
}

const fileIcons = {
  json: <BiSolidFileJson style={{ color: '#cbcb41' }} />,      // JSON file
  js: <SiJavascript style={{ color: '#f7df1e' }} />,  // JavaScript file
  jsx: <FaReact style={{ color: '#61dafb' }} />,      // React JSX file
  ts: <SiTypescript style={{ color: '#3178c6' }} />,  // TypeScript file
  tsx: <FaReact style={{ color: '#3178c6' }} />,      // React TSX file
  vite: <SiVite style={{ color: '#646cff' }} />,      // Vite config
  next: <SiNextdotjs style={{ color: '#000' }} />,    // Next.js file
  react: <FaReact style={{ color: '#61dafb' }} />,    // React component
  md: <SiMarkdown style={{ color: '#4f4f4f' }} />,    // Markdown file
  gitignore: <SiGitignoredotio style={{ color: '#f34f29' }} />, // .gitignore
  node: <FaNodeJs style={{ color: '#68a063' }} />,    // Node.js config
  css: <FaCss3 style={{ color: 'red' }} />,           // CSS file
  ico: <FaStar style={{ color: 'yellow' }} />,        // Icon file
  mjs: <RiNpmjsFill style={{color: 'red'}} />,
  svg: <SiSvg style={{color: 'yellow'}}/>,
  default: <FaFileCode />,                            // Default for other files
};


export const getFileIcon = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase() || '';
  // @ts-expect-error: fileIcons object may not have the key for the given extension
  return fileIcons[extension] || fileIcons.default;
};