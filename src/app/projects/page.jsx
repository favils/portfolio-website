'use client';

import Designs from '@/components/DesignsComponent';
import Projects from '@/components/ProjectComponent';
import ToggleButton from '@/components/ToggleButton';
import React, { useState } from 'react';

function ProjectsPage() {
  const [isDesigns, setIsDesigns] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10 p-6">
      <ToggleButton isDesigns={isDesigns} setIsDesigns={setIsDesigns} />

      <div className="mt-6 w-full">
        {isDesigns ? <Designs /> : <Projects />}
      </div>
    </div>
  );
}

export default ProjectsPage;
