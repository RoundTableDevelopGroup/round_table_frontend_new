import { sha256 } from 'js-sha256';

export class PasswordTool {
    static getRandomSalt(length=12) {
        let str = '';
        for (let i = 0; i < length; i++) {
            str += parseInt(Math.random() * 16, 10).toString(16);
        }
        return str;
    }

    static getHashWithSalt(password, salt) {
        return sha256(sha256(password) + salt);
    }
}