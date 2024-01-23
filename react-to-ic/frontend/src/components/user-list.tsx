import React, { useEffect, useState } from 'react';
import { Principal } from "@dfinity/principal";
import { useActor } from '@bundly/ic-react';
import { Actors } from '../canisters';
import Card from './card/card.component';
import { CardHeader } from './card/card-header.component';
import { CardContent } from './card/card-content.component';
import { CardActions } from './card/card-actions.component';

type User = {
    id: Principal;
    bio: string;
    username: string;
}

export default function UserList() {
    const usersActor = useActor<Actors>('users') as Actors["users"];

    const [users, setUsers] = useState<User[] | undefined>();

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        try {
            const result = await usersActor.getAll();

            setUsers(result);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Card>
            <CardHeader>User List</CardHeader>

            <CardContent>
                <ul>
                    {users && users.map((user) => (
                        <li key={user.id.toString()} className="mb-4">
                            <h3 className="text-lg font-bold text-black">{user.username}</h3>
                            <p className="text-gray-700">{user.bio}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardActions>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={getUsers}
                >
                    Refresh
                </button>
            </CardActions>
        </Card>
    );
}
