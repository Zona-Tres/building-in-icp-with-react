import { Canister } from "@bundly/ic-core-js";
import { ActorSubclass } from "@dfinity/agent";

import { _SERVICE } from "../declarations/courses/courses.did";
import { idlFactory } from "../declarations/courses/courses.did.js";

export type CoursesActor = ActorSubclass<_SERVICE>;

export const courses: Canister = {
    idlFactory,
    configuration: {
        canisterId: process.env.NEXT_PUBLIC_COURSES_CANISTER_ID!
    }
}
