import { randomBytes } from "node:crypto";

export class Random {
    /**
     * Generate a new credential hash for users whith a length of 8.
     * @returns Hex-String
     * @deprecated
     */
    public static randomCredentialHash(): string {
        return randomBytes(8).toString('hex');
    }

    /**
     * @deprecated
     */
    public static generateClientId(): string {
        return this.randomString(16);
    }

    /**
     * @deprecated
     */
    public static generateClientSecret(): string {
        return this.randomString(32);
    }

    /**
     * Generate a random string from a set of chars.
     * @param length Maximum length of the string
     * @param chars Optional. Define a set of chars to create random string from
     * @returns string
     */
    public static randomString(length = 8, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string {
        let str = "";
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return str;
    }
}
