class EventEmitter {
  subscriptions = new Map();
  subscribe(event, cb) {
    if (!this.subscriptions.has(event)) {
        this.subscriptions.set(event, new Set([cb]));
    } else {
        this.subscriptions.get(event).add(cb);
    }
    
    return {
        unsubscribe: () => {
            this.subscriptions.get(event).delete(cb);
        }
    };
  }

  emit(event, args = []) {
      let subcription = [];
      if (!this.subscriptions.has(event)) {
          subcription = [];
      } else {
          for (const fn of this.subscriptions.get(event).values()) {
              subcription.push(fn(...args));
          }
      }
      
      return subcription;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */