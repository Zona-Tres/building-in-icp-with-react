import { Actors } from '@app/canisters';
import { useActor } from '@bundly/ic-react';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Card from './card/card.component';
import { CardHeader } from './card/card-header.component';
import { CardContent } from './card/card-content.component';
import { CardActions } from './card/card-actions.component';

const CreateCourseForm: React.FC = () => {
    const coursesActor = useActor<Actors>('courses') as Actors["courses"];
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        setError('');
        setSuccess('');
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!title.trim() || !description.trim()) {
            setError('Por favor, completa todos los campos.');
            setSuccess('');
            setLoading(false);
            return;
        }

        try {
            await coursesActor.create(title, description);

            setTitle('');
            setDescription('');
            setLoading(false);
            setError('');
            setSuccess('Curso creado con éxito!');
        } catch (error) {
            console.error(error);
            setError('Error al crear el curso. Por favor, inténtalo de nuevo.');
            setSuccess('');
            setLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                Create Course
            </CardHeader>
            <CardContent>
                <form id="create-course-form" onSubmit={handleSubmit}>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        className="border p-2 mb-4 w-full text-black"
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        className="border p-2 h-20 mb-4 w-full text-black"
                    />

                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {success && <p className="text-green-500 mb-4">{success}</p>}
                </form>
            </CardContent>
            <CardActions>
                <button
                    form="create-course-form"
                    disabled={loading}
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                    Create Course
                </button>
            </CardActions>
        </Card>
    );
};

export default CreateCourseForm;
