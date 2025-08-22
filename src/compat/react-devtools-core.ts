// Minimal shim for 'react-devtools-core' so Ink's optional import does not break the web build.
// The real package is intended for Node/Electron devtools integration; not needed here.
export default {
  connectToDevTools() {
    // no-op
  },
};
