import { useDispatch , useSelector } from 'react-redux';
import { increment, decrement , reset } from '../../Slices/index';
import "./Counter.css";

export const Counter = () => {
    const dispatch = useDispatch();
    const onUpClick = () => {
        dispatch(increment());
    };
    const onDownClick = () => {
        dispatch(decrement());
    };
    const onReset = () => {
        dispatch(reset());
    };
    const count = useSelector((state) => state.counter.count);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="btn down" onClick={onDownClick}>–</button>
        <button className="btn up" onClick={onUpClick}>+</button>
      </div>
      <button className="btn reset" onClick={onReset}>Reset</button>
    </div>
  );
};
