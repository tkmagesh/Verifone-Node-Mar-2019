class EventEmitter{
	_listeners = {};

	subscribe(evtName, listenerfn){
		_listeners[evtName] = _listeners[evtName] || [];
		_listeners[evtName].push(listenerfn);
	}

	emit(evtName){
		let listenerFns = _listeners[evtName];
		listenerFns.forEach(listenerfn => listenerfn());
	}

	unsubscribe(evtName, listenerfn){
		let listenerFns = _listeners[evtName];
		listenerFns = listenerFns.filter(fn => fn !== listenerfn);
		_listeners[evtName] = listenerFns;
	}
}