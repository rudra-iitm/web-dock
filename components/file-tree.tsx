/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react";
import { File, Folder, Tree, TreeViewElement } from "@/components/ui/file-tree";
import { parseProjectFiles } from "@/utils/parseProjectFiles";

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
        return <File key={item.id} value={item.id} handleSelect={() => setCurrentFile(item.filePath) }>{item.name}</File>;
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
