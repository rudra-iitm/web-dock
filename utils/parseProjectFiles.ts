/* eslint-disable @typescript-eslint/no-explicit-any */
import { TreeViewElement } from "@/components/ui/file-tree";

export function parseProjectFiles(projectFiles: Record<string, any>): any[] {
  const result: TreeViewElement[] = [];
  let id = 0;

  const isDirectory = (obj: Record<string, any>): boolean =>
    obj && typeof obj === "object" && "directory" in obj && typeof obj.directory === "object";

  function traverse(obj: Record<string, any>, path: string[] = []): any {
    const name = path[path.length - 1] || "root";

    const item: any = {
      id: (++id).toString(),
      name,
      isSelectable: false,
      children: [],
      filePath: path.join("/"),
    };

    if (isDirectory(obj)) {
      item.children = Object.entries(obj.directory).map(([key, value]) =>
        traverse(value as Record<string, any>, [...path, key])
      );
    } else if (obj && typeof obj === "object" && "file" in obj) {
      item.isSelectable = true;
    }
    return item;
  }

  Object.entries(projectFiles).forEach(([key, value]) => {
    result.push(traverse(value, [key]));
  });

  return result;
}
