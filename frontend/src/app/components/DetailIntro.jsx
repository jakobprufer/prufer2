"use client";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RenderTextArray } from "../functional/RenderTextArray";
import { RenderTitleParts } from "../functional/RenderTitleParts";

export default function DetailIntro({ project }) {
  return (
    <div className="detailIntro">
      <h1 className="title">{RenderTitleParts(project.title, 0)}</h1>
      <div className="introGrid">
        <div className="column">
          {project.detail &&
            project.detail.map((line, index) => (
              <div key={index} className="subtitleLine">
                {RenderTextArray(line)}
              </div>
            ))}
          {project.externalAction && project.externalAction[0] && (
            <a
              className={`container l0 button iconSlide rightup ${project.colour}`}
              href={project.externalAction[0].href}
            >
              <div className="buttonText">{project.externalAction[0].text}</div>
              <div className="riIconInline">
                <RiArrowRightUpLine className="before" />
                <RiArrowRightUpLine className="main" />
              </div>
            </a>
          )}
        </div>
        <div className="column">
          {project.timeFrame && (
            <div className="timeFrame">
              <div className="heading">Time frame</div>
              <div className="text">{project.timeFrame}</div>
            </div>
          )}
          {project.contributors && (
            <div className="contributors">
              <div className="heading">Contributors</div>
              {project.contributors.map((item, index) => {
                return (
                  <div key={index} className="text">
                    <div style={{ fontStyle: "normal" }}>{item.name}</div>
                    {item.role ? (
                      <div style={{ marginBottom: "16px" }}>{item.role}</div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
          {/* {project.tools && (
                  <div className="tools">
                    <div className="heading">Tools</div>
                    <div className="text">
                      {project.tools.map((tool, index) => (
                        <span key={index}>
                          {tool.name}
                          {index < project.tools.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                )} */}
          {project.status && (
            <div className="status">
              <div className="heading">Status</div>
              <div className="text">{project.status}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
