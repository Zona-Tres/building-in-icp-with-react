import { Canister, Principal, Record, StableBTreeMap, Vec, bool, query, text, update } from 'azle';

const User = Record({
    id: Principal,
    username: text,
    bio: text
});

type User = typeof User.tsType;

const users = StableBTreeMap<Principal, User>(0);

export default Canister({
    create: update([text, text], bool, (username, bio) => {
        const id = generatePrincipal();
        const user: User = { id, username, bio };

        users.insert(id, user);

        return true;
    }),
    getAll: query([], Vec(User), () => {
        return users.values();
    })
});

function generatePrincipal(): Principal {
    const randomBytes = new Array(29)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 256));

    return Principal.fromUint8Array(Uint8Array.from(randomBytes));
}
