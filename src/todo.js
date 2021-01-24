const PENDING = 'PENDING';
const FINISHED = 'FINISHED';
const listKey = [PENDING, FINISHED];

const todoForm = document.querySelector('.form-container');
const todoInput = document.querySelector('.todo-input');

const pendingEl = document.querySelector('.pending-list');
const finishedEl = document.querySelector('.finished-list');

const enter = ([h]) => h;

const initId = () => {
  let id = 0;
  return () => id++;
};
const getId = initId();

const iconObj = {
  delete: '❌',
  finished: '✅',
  undo: '⏪',
};

const elList = {
  PENDING: pendingEl,
  FINISHED: finishedEl,
};

const dataList = {
  PENDING: [],
  FINISHED: [],
};

const saveLocalStorage = (type, list) => {
  localStorage.setItem(type, JSON.stringify(list));
};

const buttonEvents = {
  delete: (type, { id }) => {
    const liEl = elList[type].children;
    if (!liEl.length) return;

    const li = enter(Array.from(liEl).filter((v) => Number(v.id) === id));
    elList[type].removeChild(li);
    dataList[type] = dataList[type].filter((v) => v.id !== id);
    saveLocalStorage(type, dataList[type]);
  },
  finished: (type, { id, text }) => {
    buttonEvents['delete'](type, { id });
    createItem(FINISHED, { text });
  },
  undo: (type, { id, text }) => {
    buttonEvents['delete'](type, { id });
    createItem(PENDING, { text });
  },
};

const createItem = (type, { text }) => {
  const id = getId();
  const li = document.createElement('li');
  const span = document.createElement('span');
  const buttonContainer = document.createElement('div');
  const buttonList = type === PENDING ? ['finished', 'delete'] : ['undo', 'delete'];

  const buttonEls = buttonList.map((key) => {
    const button = document.createElement('button');
    button.innerHTML = iconObj[key];
    button.addEventListener('click', (e) => buttonEvents[key](type, { id, text }));
    return button;
  });

  li.id = id;
  span.innerHTML = text;
  li.appendChild(span);

  buttonEls.forEach((v) => {
    buttonContainer.appendChild(v);
  });
  li.appendChild(buttonContainer);

  elList[type].appendChild(li);
  dataList[type].push({ id, text });
  saveLocalStorage(type, dataList[type]);
};

const handleSubmitTodo = (e) => {
  e.preventDefault();
  const { value: text } = todoInput;
  if (text) {
    createItem(PENDING, { text });
  }
  todoInput.value = '';
};

const loadAllToDoList = () => {
  listKey
    .map((key) => {
      return {
        key,
        list: localStorage.getItem(key),
      };
    })
    .forEach(({ key, list }) => {
      if (!list) return;
      JSON.parse(list).forEach((item) => {
        createItem(key, item);
      });
    });
};

const handleEvent = () => {
  todoForm.addEventListener('submit', handleSubmitTodo);
};

const todoInit = () => {
  loadAllToDoList();
  handleEvent();
};

todoInit();
