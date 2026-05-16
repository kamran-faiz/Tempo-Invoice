const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"clients.index":{"uri":"clients","methods":["GET","HEAD"]},"clients.store":{"uri":"clients","methods":["POST"]},"clients.update":{"uri":"clients\/{client}","methods":["PUT","PATCH"],"parameters":["client"],"bindings":{"client":"id"}},"clients.destroy":{"uri":"clients\/{client}","methods":["DELETE"],"parameters":["client"],"bindings":{"client":"id"}},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]},"storage.local.upload":{"uri":"storage\/{path}","methods":["PUT"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
