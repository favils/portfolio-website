import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
        <div className="relative z-10 container mx-auto my-10 px-4 py-8 max-w-[80%] overflow-visible">
            <div className="grid gap-8">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="relative group w-full h-[250px] overflow-visible border-2 p-4 bg-black"
                        onMouseEnter={() => setHoveredProjectId(project._id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setMousePos({
                                x: e.clientX - rect.left,
                                y: e.clientY - rect.top,
                            });
                        }}
                    >
                        {hoveredProjectId === project._id && (
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="absolute w-40 h-28 object-cover rounded-lg pointer-events-none z-50 transition duration-300 ease-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                                style={{
                                    left: mousePos.x + 20,
                                    top: mousePos.y + 20,
                                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                                }}
                            />
                        )}

                        <div className="w-full h-full text-white text-8xl flex items-center justify-between">
                            <span className='text-sm'>{project.technologies}</span>
                            {project.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
