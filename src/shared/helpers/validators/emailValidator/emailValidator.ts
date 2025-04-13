import { regExpTemplate } from "./regExpTemplate";


export function validateEmail(email: string): boolean {

    const emailParts = email.split('@');

    if (emailParts.length !== 2) return false;

    const account = emailParts[0];
    const address = emailParts[1];

    if (account.length > 20 || account.length < 3) {
        return false;
    } else if (address.length > 20) {
        return false;
    }

    const domainParts = address.split('.');

    if (domainParts.some((domain) => domain.length > 20)) {
        return false;
    }
    return regExpTemplate.test(email)
}