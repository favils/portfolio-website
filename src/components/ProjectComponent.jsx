import React, { useEffect, useState } from 'react';
import FlowingMenu from "@/components/ui/FlowingMenu/FlowingMenu";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                const data = await response.json();
                setProjects(data.projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const flowingMenuItems = projects.map((project) => ({
        link: project.githubRepo,
        title: project.title,
        tech: project.technologies,
        text: project.description,
        image: project.image,
    }));

    return (
        <div className="relative z-10 h-[80vh] flex items-center justify-center">
            <div className="w-[80%] h-full overflow-y-auto px-4 py-8 space-y-8">
                <div style={{ height: '600px', position: 'relative' }}>
                    <FlowingMenu items={flowingMenuItems} />
                </div>
            </div>
        </div>
    );
};

export default Projects;
