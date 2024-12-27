import '@testing-library/jest-dom';

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock para scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

global.ResizeObserver = MockResizeObserver;
