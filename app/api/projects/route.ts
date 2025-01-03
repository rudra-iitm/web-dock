/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs/promises';
import path from 'path';
import { type NextRequest } from 'next/server'

const templateDir = path.join(process.cwd(), 'public', 'templates');

const processDirectory = async (dirPath: string): Promise<Record<string, any>> => {
    const files = await fs.readdir(dirPath, { withFileTypes: true });
    const tree: Record<string, any> = {};
    for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        if (file.isDirectory()) {
            tree[file.name] = {
                directory: await processDirectory(filePath),
            };
        } else if (file.isSymbolicLink()) {
            const symlinkTarget = await fs.readlink(filePath);
            tree[file.name] = {
                file: {
                    symlink: symlinkTarget,
                },
            };
        } else {
            const contents = await fs.readFile(filePath, 'utf-8');
            tree[file.name] = {
                file: {
                    contents,
                    filePath: filePath.replace(templateDir, '').split('/').slice(2).join('/'),
                },
            };
        }
    }
    return tree;
};

export async function GET(
        request: NextRequest,
    ) {
    try {
        const searchParams = request.nextUrl.searchParams

        const template = searchParams.get('template');
        if (!template) {
            throw new Error('Template parameter is missing');
        }
        const templatePath = path.join(templateDir, template);

        const tree = await processDirectory(templatePath);

        return Response.json(tree);
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to generate project tree' });
    }
}