// 'use client';
// import { WebContainer } from '@webcontainer/api';
// import { useEffect, useRef } from 'react';
// import { startShell } from '@/utils/webcontainers';
// import { Terminal } from '@xterm/xterm';
// import '@xterm/xterm/css/xterm.css';

// const projectFiles = {
//   'index.js': {
//     file: {
//       contents: `
// import express from 'express';
// const app = express();
// const port = 3111;

// app.get('/', (req, res) => {
//   res.send('Welcome to a WebContainers app! 🥳');
// });

// app.listen(port, () => {
//   console.log(\`App is live at http://localhost:\${port}\`);
// });`,
//     },
//   },
//   'package.json': {
//     file: {
//       contents: `
// {
//   "name": "example-app",
//   "type": "module",
//   "dependencies": {
//     "express": "latest",
//     "nodemon": "latest"
//   },
//   "scripts": {
//     "start": "nodemon --watch './' index.js"
//   }
// }`,
//     },
//   },
// };

export default function Home() {

  // const webcontainerInstance = useRef<WebContainer | null>(null);
  // const iframeEl = useRef<HTMLIFrameElement | null>(null);
  // const terminalRef = useRef<HTMLDivElement | null>(null);
  
  // useEffect(() => {
  //   (async () => {
  //     const terminal = new Terminal({
  //       convertEol: true,
  //     });
  //     if (terminalRef.current) {
  //       terminal.open(terminalRef.current);
  //     } else {
  //       throw new Error('Terminal element is not available');
  //     }
  //     webcontainerInstance.current = await WebContainer.boot();
  //     await webcontainerInstance.current.mount(projectFiles);
  //     if (iframeEl.current) {
  //       webcontainerInstance.current.on('server-ready', (port, url) => {
  //         if (iframeEl.current) {
  //           iframeEl.current.src = url;
  //         }
  //       });
  //     } else {
  //       throw new Error('iframe element is not available');
  //     }
  //     startShell(webcontainerInstance.current, terminal);
  //   })();
  // }, []);

  return (
    <div>
      HomePage
    </div>
  );
}
