import { useState } from "react";
import type { Job } from "../types/job";

interface Props {
    onAdd: (job: Job) => void;
}

export default function AddJobForm({ onAdd }: Props) {
    const [form, setForm] = useState({
        title: "",
        category: "",
        qualification: "",
        experience: "",
    });

    const handlesubmit = () => {
        if (!form.title)return;

        onAdd({
            id: Date.now(),
            ...form
        });
        setForm({
            title: "",
            category: "",
            qualification: "",
            experience: "",
        });
    };

    return (
        <div className="bg-white p-6 rounded shadow-md mt-10">
            <h2 className="text-lg font-bold mb-4">Add New Job</h2>

            <div className="grid md:grid-cols-2 gap-4">
                <input
                className="border p-2 rounded"
                placeholder="Job Title"
                value={form.title}
                onChange={(e) => setForm({...form, title: e.target.value})}
                />
                <input
                className="border p-2 rounded"
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({...form, category: e.target.value})}
                />
                <input
                className="border p-2 rounded"
                placeholder="Qualification"
                value={form.qualification}
                onChange={(e) => setForm({...form, qualification: e.target.value})}
                />
                <input
                className="border p-2 rounded"
                placeholder="Experience"
                value={form.experience}
                onChange={(e) => setForm({...form, experience: e.target.value})}
                />
            </div>
            <button 
            onClick={handlesubmit} 
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Job
            </button>   
        </div>
    );
}
