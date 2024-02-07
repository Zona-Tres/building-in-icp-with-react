import { Canister } from "@bundly/ic-core-js";
import { ActorSubclass } from "@dfinity/agent";

import { _SERVICE } from "../declarations/users/users.did";
import { idlFactory } from "../declarations/users/users.did.js";

export type UsersActor = ActorSubclass<_SERVICE>;

export const users: Canister = {
    idlFactory,
    configuration: {
        canisterId: process.env.NEXT_PUBLIC_USERS_CANISTER_ID!
    }
}
