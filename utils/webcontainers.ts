import { WebContainer } from "@webcontainer/api";
import { Terminal } from "@xterm/xterm";

export async function installDependencies(webcontainerInstance: WebContainer, terminal: Terminal) {
    const installProcess = await webcontainerInstance.spawn('npm', ['install']);
    installProcess.output.pipeTo(new WritableStream({
        write(data) {
            terminal.write(data);
        }
      }));
    return installProcess.exit;
}

export async function startDevServer(webcontainerInstance: WebContainer, iframeEl: HTMLIFrameElement, terminal: Terminal) {
    const serverProcess = await webcontainerInstance.spawn('npm', ['run', 'start']);
    serverProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            terminal.write(data);
          },
        })
      );
    webcontainerInstance.on('server-ready', (port, url) => {
      iframeEl.src = url;
    });
  }

export async function startShell(webcontainerInstance: WebContainer, terminal: Terminal) {
    const shellProcess = await webcontainerInstance.spawn('jsh', {
        terminal: {
          cols: terminal.cols,
          rows: terminal.rows,
        },
      });
    shellProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          terminal.write(data);
        },
      })
    );
    const input = shellProcess.input.getWriter();
    terminal.onData((data) => {
      input.write(data);
    });
    return shellProcess;
};