import { useStateContext } from "./store/context";
import { Time } from "./Time";

function Hello() {
  const { dispatch, actions } = useStateContext();
  
  const handleClick = () => {
    dispatch(actions.update({ foo: Date.now() }))
  }

  return (
    <div onClick={handleClick}>Hello <div><Time /></div></div>
  );
}

export default Hello;