import { Actors } from '@app/canisters';
import { useActor } from '@bundly/ic-react';
import React, { useState, ChangeEvent, FormEvent } from 'react';

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
        <div>
            <h2 className="text-2xl font-bold mb-4">Create Course</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded">

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

                {loading ? (
                    <p className="text-gray-500">Sending data...</p>
                ) : (
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    >
                        Create Course
                    </button>
                )}
            </form>
        </div>
    );
};

export default CreateCourseForm;
