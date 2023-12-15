const matchMediaMock = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: matchMediaMock,
});
