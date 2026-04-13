// [SUDO] Keylogger Simulator - Proyecto Academia X
const monitor = document.createElement('div');
monitor.style = "position:fixed; bottom:20px; right:20px; background:#000; color:#0f0; padding:15px; font-family:monospace; border:2px solid #0f0; border-radius:8px; z-index:9999;";
document.body.appendChild(monitor);

monitor.innerHTML = "SYSTEM_READY: Awaiting input...";

window.addEventListener('keydown', (e) => {
    const timestamp = new Date().toLocaleTimeString();
    monitor.innerHTML = `<div>[${timestamp}] Detected_Key: <span style="color:white">${e.key}</span></div>`;
    
    // Efecto de consola
    console.log(`%c [SECURITY_EVENT]: Key Pressed -> ${e.key}`, 'background: #222; color: #bada55');
});
