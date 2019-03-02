let keyboardState = {};

document.addEventListener('keydown', e => {
  keyboardState[e.code] = true;
});

document.addEventListener('keyup', e => {
  keyboardState[e.code] = false;
});

const KeyboardStateManager = {
  getState: () => {
    return Object.assign({}, keyboardState);
  }
}

export { KeyboardStateManager };