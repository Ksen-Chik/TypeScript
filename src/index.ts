import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, User, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
    let user: User | null = getUserData();
    if (!user) {
        user = new User('', '');
    }
    renderUserBlock(user.userName, user.avatarUrl, getFavoritesAmount())
    renderSearchFormBlock()
    renderSearchStubBlock()
    renderToast(
        { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
        { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )
})
