export class Friends {
    constructor(
    private user: string,
    private makeFriendship: string
    ){}
        public getUser() {
            return this.user
        }
        public getMakeFriendship() {
            return this.makeFriendship
        }
}


export interface FriendInputDTO {
    user: string,
    makeFriendship: string
}

export type Friend = {
    user: string,
    makeFriendship: string
}


export type FriendInsert = {
    makeFriendship: string
}
