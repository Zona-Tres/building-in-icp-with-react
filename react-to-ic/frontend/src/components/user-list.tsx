import React, { useEffect, useState } from 'react';
import { Principal } from "@dfinity/principal";
import { useActor } from '@bundly/ic-react';
import { Actors } from '../canisters';

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
        <div className="h-full w-full flex flex-col items-center justify-start">
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">User List</h2>

            <div className="max-w-md w-full p-8 bg-white shadow-md rounded">
                <div className="bg-white p-4 rounded">
                    <ul>
                        {users && users.map((user) => (
                            <li key={user.id.toString()} className="mb-4">
                                <h3 className="text-lg font-bold text-black">{user.username}</h3>
                                <p className="text-gray-700">{user.bio}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={getUsers}
                >
                    Refresh
                </button>
            </div>
        </div>
    );
}
