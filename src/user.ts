import { renderBlock } from './lib.js'

export class User {
    userName: string
    avatarUrl: string

    constructor(userName: string, avatarUrl: string) {
        this.userName = userName
        this.avatarUrl = avatarUrl
    }
}

export function renderUserBlock(
    userName: string,
    avatarUrl: string,
    favoriteItemsAmount?: number
) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
    const hasFavoriteItems = !!favoriteItemsAmount

    renderBlock(
        'user-block',
        `
    <div class="header-container">
      <img class="avatar" src=${avatarUrl} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
    )
}

export function getUserData(): User | null {

    const userInStorage = window.localStorage.getItem('user');

    if (userInStorage) {
        const user: unknown = JSON.parse(userInStorage);
        Object.setPrototypeOf(user, User.prototype);

        if (user instanceof User) {
            return user;
        } else {
            throw new Error('User in local storage is wrong');
        }
    } else {
        return null;
    }
}

export function getFavoritesAmount(): number {
    return +(window.localStorage.getItem('favoritesAmount') ?? 0);
}