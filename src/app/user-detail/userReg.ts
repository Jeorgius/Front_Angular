export class UserReg {
    constructor (
        public nick: string,
        public pw: string,
        public email: string,
        public name: string,
        public surname: string,
        public city: string,
        public sub: boolean
    ) {}
}