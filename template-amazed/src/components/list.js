import { defineComponent } from 'amazed';
import style from '../style/list.module.css';

const List = defineComponent(({ setData }) => {
  const listState = {
    arr: [1, 2],
  };
  let count = 3;

  function usePush() {
    setData(() => {
      listState.arr.push(count++);
    });
  }

  function useUnshift() {
    setData(() => {
      listState.arr.unshift(count++);
    });
  }

  function useDel() {
    setData(() => {
      listState.arr.splice(1, 1);
    });
  }

  return () =>
    html`
      <fragment>
        <div class=${style.listInner}>
          <button onClick=${useUnshift}>Unshift</button>
          <button onClick=${usePush}>Push</button>
          <button onClick=${useDel}>Del</button>
        </div>
        <ul class=${style.listInner}>
          ${listState.arr.map((item) => html`<li key=${item}>${item}</li>`)}
        </ul>
      </fragment>
    `;
});

export default List;
