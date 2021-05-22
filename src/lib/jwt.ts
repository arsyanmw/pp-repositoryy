import { sign, verify } from 'jsonwebtoken';
import { Identity } from '../entity/Identity';
import { promisify } from 'bluebird';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const AHU_TOKEN_SECRET = 'QXJndWUgZm9yIHlvdXIgbGltaXRhdGlvbnMsIGFuZCBzdXJlbHkgdGhleeKAmXJlIHlvdXJzLg==';
const ACCESS_TOKEN_LIFE = 3600 * 48;
const TEMP_ACCESS_TOKEN_LIFE = 3600 * 25;
const ALGORITHM = 'HS256';
const ISSUER = 'Auth Service';

interface TempData {
    nik?: string;
    email?: string;
}

interface ClientCredentialData {
    client: string;
    clientKey: string;
}

class Jwt {
    public static async generate(identity: Identity) {
        const signAsync = promisify(sign);
        return await signAsync(this.payload(identity), ACCESS_TOKEN_SECRET, {
            algorithm: ALGORITHM,
            expiresIn: ACCESS_TOKEN_LIFE,
        });
    }

    public static async generateTemporaryToken(data: TempData) {
        const signAsync = promisify(sign);
        return await signAsync(
            {
                iss: ISSUER,
                data: { ...data },
            },
            ACCESS_TOKEN_SECRET,
            {
                algorithm: ALGORITHM,
                expiresIn: TEMP_ACCESS_TOKEN_LIFE,
            },
        );
    }

    public static async generateThirdPartyAccessToken(data: ClientCredentialData, ttl: string | number) {
        const signAsync = promisify(sign);
        return await signAsync(
            {
                iss: ISSUER,
                data: { ...data },
            },
            ACCESS_TOKEN_SECRET,
            {
                algorithm: ALGORITHM,
                expiresIn: ttl || '1h',
            },
        );
    }

    public static async verify(token: string) {
        const verifyAsync = promisify(verify);
        const decoded = await verifyAsync(token, ACCESS_TOKEN_SECRET);
        return decoded;
    }

    public static verifyAhuToken(token: string) {
        const ahuKey = Buffer.from(AHU_TOKEN_SECRET, 'base64').toString('utf8');
        console.log("ahuKey: ", ahuKey);
        return verify(token, ahuKey);
    }

    private static payload(identity: Identity): any {
        return {
            iss: ISSUER,
            data: {
                identityId: identity.id,
                fullName: identity.fullName,
                email: identity.identityEmail.email,
                nik: identity.identityNik.nik,
            },
        };
    }
}

export { Jwt };
