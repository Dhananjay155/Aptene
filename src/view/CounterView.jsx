import React, { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CounterModel } from '../model/CounterModel';
import { CounterIntent } from '../intent/CounterIntent';
import './CounterView.css';

export const Counter = () => {
  const [model] = useState(() => new CounterModel());
  const [intent] = useState(() => new CounterIntent());
  const [state, setState] = useState(model.getState());

  useEffect(() => {
    const stateSub = model.state$.subscribe(setState);

    const actionSub = intent.actions$.subscribe(action => {
      const currentState = model.getState();

      switch (action.type) {
        case 'INCREMENT':
          model.updateState({ count: Math.min(currentState.count + 1, 98) });
          break;
        case 'DECREMENT':
          model.updateState({ count: Math.max(currentState.count - 1, 0) });
          break;
        case 'RESET':
          model.updateState({ count: 0 });
          break;
        case 'TOGGLE_AUTO':
          model.updateState({ isAutoIncrement: !currentState.isAutoIncrement });
          break;
        default:
          break;
      }
    });

    const autoSub = interval(1100)
      .pipe(filter(() => model.getState().isAutoIncrement))
      .subscribe(() => {
        const { count } = model.getState();
        model.updateState({ count: Math.min(count + 1, 98) });
      });

    return () => {
      stateSub.unsubscribe();
      actionSub.unsubscribe();
      autoSub.unsubscribe();
    };
  }, [model, intent]);

  return (
    <div className="app-container">
      <div className="counter-container">
        <h1 className="counter-title">Counter App</h1>
        
        <div className="counter-display">
          {state.count}
        </div>
        
        <div className="counter-controls">
          <button 
            className="counter-button increment-button"
            onClick={() => intent.dispatch({ type: 'DECREMENT' })}
          >
            -
          </button>
          <button 
            className="counter-button increment-button"
            onClick={() => intent.dispatch({ type: 'INCREMENT' })}
          >
            +
          </button>
        </div>
        
        <button 
          className="counter-button reset-button"
          onClick={() => intent.dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
        
        <div className="auto-increment-control">
          <div 
            className={`toggle-switch ${state.isAutoIncrement ? 'active' : ''}`}
            onClick={() => intent.dispatch({ type: 'TOGGLE_AUTO' })}
          >
            <div className={`toggle-handle ${state.isAutoIncrement ? 'active' : ''}`} />
          </div>
          <span className="toggle-label">Auto Increment</span>
        </div>
      </div>
    </div>
  );
};