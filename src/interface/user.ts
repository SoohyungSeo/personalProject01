export interface User {
    userId?: number;
    id? : string;
    password?: string;
    confirmPassword? : string
    nickname?: string;
    email?: string;
    phone?: string;
    naverId? : string;
    kakaoId? : string;
    googleId? : string;
    provider? : string;
    admin? : boolean;
}