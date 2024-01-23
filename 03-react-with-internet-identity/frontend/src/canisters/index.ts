import { CoursesActor, courses } from './courses';
import { UsersActor, users } from './users';

export type Actors = {
    courses: CoursesActor,
    users: UsersActor
}

export const canisters = {
    courses,
    users
};
