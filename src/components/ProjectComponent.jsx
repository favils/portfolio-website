import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                const data = await response.json();
                setProjects(data.projects);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div className="text-center py-12 text-xl">⋆⭒˚.⋆ loading ⋆⭒˚.⋆</div>;
    }

    return (
        <div className="container mx-auto my-10 px-4 py-8 max-w-[80%]">
            <div className="justify-center">
                {projects.map((project) => (
                    <div key={project._id} className="relative w-full h-[250px] overflow-hidden border-2">
                        <div>
                                <img src={project.image} className='w-full opacity-50 object-cover'></img>
                            </div>
                        <div className="w-full h-full bg-white text-8xl flex items-center justify-between">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
