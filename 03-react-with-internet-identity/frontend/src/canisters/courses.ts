import { Canister } from "@bundly/ic-core-js";
import { ActorSubclass } from "@dfinity/agent";

// @ts-ignore
import { idlFactory } from "../declarations/courses/courses.did.js";
import { _SERVICE } from "../declarations/courses/courses.did.js";

export type CoursesActor = ActorSubclass<_SERVICE>;

export const courses: Canister = {
    idlFactory,
    configuration: {
        canisterId: "bkyz2-fmaaa-aaaaa-qaaaq-cai"
    }
}
