export function renderBlock(elementId: string, html: string | null) {
    const element = document.getElementById(elementId)
    if (element) {
        element.innerHTML = html ?? ''
    }
}
type Message = {
    text: string
    type: string
}
type Action = {
    name: string
    handler: (() => void) | null
}
export function renderToast(message: Message | null, action: Action) {
    let messageText = ''

    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
    }

    renderBlock(
        'toast-block',
        messageText
    )

    const button = document.getElementById('toast-main-action')
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler()
            }
            renderToast(null, { name: 'ОК', handler: null })
        }
    }
}