import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import { startShell } from '@/utils/webcontainers';
import { WebContainer } from '@webcontainer/api';

export default function Terminal({webcontainerInstance}: {webcontainerInstance: WebContainer}) {
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            const terminal = new XTerm({
                cursorBlink: true,
                fontSize: 14,
                fontFamily: '"Cascadia Code", Menlo, Monaco, "Courier New", monospace',
                theme: {
                    background: '#282c34',
                    foreground: '#abb2bf',
                    black: '#282c34',
                    brightBlack: '#5c6370',
                    red: '#e06c75',
                    brightRed: '#e06c75',
                    green: '#98c379',
                    brightGreen: '#98c379',
                    yellow: '#d19a66',
                    brightYellow: '#d19a66',
                    blue: '#61afef',
                    brightBlue: '#61afef',
                    magenta: '#c678dd',
                    brightMagenta: '#c678dd',
                    cyan: '#56b6c2',
                    brightCyan: '#56b6c2',
                    white: '#abb2bf',
                    brightWhite: '#ffffff',
                },
                allowTransparency: true,
            });

            const fitAddon = new FitAddon();
            terminal.loadAddon(fitAddon);
            terminal.open(terminalRef.current);
            fitAddon.fit();

            startShell(webcontainerInstance, terminal);

            const handleResize = () => {
                fitAddon.fit();
            };

            window.addEventListener('resize', handleResize);

            return () => {
                terminal.dispose();
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [webcontainerInstance]);

    return (
        <div className="w-full h-full min-h-[400px] bg-[#282c34] rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center justify-start space-x-2 px-4 py-2 bg-[#1e2125]">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div ref={terminalRef} className="w-full h-[calc(100%-40px)] p-4 rounded-md overflow-hidden" />
        </div>
      );
}
