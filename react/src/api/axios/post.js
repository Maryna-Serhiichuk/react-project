let subscribers = []

let ws

const closeHandler = () => {
    console.log('Channel close')
    setTimeout(createChannel, 5000)
}

export const closeClearer = () => {
    ws.removeEventListener('close', closeHandler)
	ws.close()
}

export function createChannel() {
    if(ws) {
        console.log('remove close listener')
        closeClearer()
    }
    ws = new WebSocket('ws://localhost:3031')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    return ws
}

export const messageHandler = (e) => {
    if(!e.data) return
    const newPost = JSON.parse(e.data)
    if(newPost.type === 'NEW_POST'){
        const post = newPost.data
        if(post) {
            subscribers.forEach(s => s(post))
        }
    }
}

export const postStop = () => {
    subscribers = []
    if(!ws) return
    ws.removeEventListener('close', closeHandler)
    ws.removeEventListener('message', messageHandler)
    ws.close()
}

export const postStart = () => {
    createChannel()
}

export const postSubscribe = (callback) => {
    if(!subscribers.includes(callback)) {
        subscribers.push(callback)
    }
    return () => {
        subscribers = subscribers.filter(s => s !== callback)
    }
}

export const postUnsubscribe = (callback) => {
    subscribers = subscribers.filter(s => s !== callback)
}