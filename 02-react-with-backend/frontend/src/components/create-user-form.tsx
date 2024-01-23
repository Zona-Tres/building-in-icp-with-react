import { Actors } from '@app/canisters';
import { useActor } from '@bundly/ic-react';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Card from './card/card.component';
import { CardHeader } from './card/card-header.component';
import { CardContent } from './card/card-content.component';
import { CardActions } from './card/card-actions.component';

const CreateUserForm: React.FC = () => {
    const usersActor = useActor<Actors>('users') as Actors["users"];
    const [username, setUsername] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username.trim() || !bio.trim()) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        setLoading(true);

        try {
            await usersActor.create(username, bio);

            setUsername('');
            setBio('');
            setLoading(false);
            setError('');
        } catch (error) {
            console.error(error);
            setError('Error al crear el usuario. Por favor, inténtalo de nuevo.');
            setLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                Create User
            </CardHeader>
            <CardContent>
                <form id="create-user-form" onSubmit={handleSubmit}>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        className="border p-2 mb-4 w-full text-black"
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2">Bio:</label>
                    <textarea
                        value={bio}
                        onChange={handleBioChange}
                        className="border p-2 h-20 mb-4 w-full text-black"
                    />

                    {error && <p className="text-red-500 mb-4">{error}</p>}
                </form>
            </CardContent>
            <CardActions>
                <button
                    form="create-user-form"
                    disabled={loading}
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                    Create User
                </button>
            </CardActions>
        </Card>
    );
};

export default CreateUserForm;
