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
        <div className="container mx-auto px-4 py-8 max-w-[80%]">
            <div className="justify-center">
                {projects.map((project) => (
                    <div key={project._id} className="project-card shadow-[-10px_10px_0_0_rgba(0,0,0,1)] relative bg-white border-2 border-black w-full h-[300px] overflow-hidden">
                        <div className="absolute z-10 border-b-2 border-black top-0 left-0 w-full bg-white p-4 text-md flex justify-between items-center">
                            <div>"{project.title}"</div>
                            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                                <img src="/github.png" alt="GitHub" width="20px" />
                            </a>
                        </div>

                        <div className="relative w-full h-full mt-[50px]">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-300 ease-in-out" />
                            <div className="overlay absolute top-0 left-0 bottom-10 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                                <div className="content text-white p-4 flex flex-col justify-between overflow-y-auto h-full scrollbar-minimal">
                                    <p className="text-sm"><i>{project.technologies}</i></p>
                                    <p className="text-sm mt-3 mb-10">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
