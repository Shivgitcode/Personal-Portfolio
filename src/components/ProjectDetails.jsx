import React from "react";
import Project from "./Project";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { useContext } from "react";
import { AppProvider } from "../context/AppProvider";

export default function ProjectDetails() {
  const { project, index } = useContext(AppProvider);
  const p1 = project[index];
  return (
    <div className="w-full h-full">
      <ProjectDetailsCard key={index} el={p1}></ProjectDetailsCard>
    </div>
  );
}
