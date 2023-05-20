import {
  RoadmapData,
  RoadmapDataI,
  RoadmapDataII,
  RoadmapDataIII,
} from "../../data/Roadmap";
import {
  Date,
  RoadMapWrapper,
  RoadmapContent,
  RoadmapHold,
  SingTask,
  TaskText,
  TaskWrapper,
} from "../../styles/section/RoadMap.styled";
import React from "react";
import { IoIosDoneAll } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RoadMapSection = () => {
  return (
    <RoadMapWrapper id="roadmap">
      <TaskWrapper>
        <TaskText>Roadmap</TaskText>
        <RoadmapHold>
          <RoadmapContent className="border border-neutral-500 border-b-8">
            {RoadmapData.map((task, index) => (
              <SingTask key={index}>
                <Date>{task.date}</Date>
                <h3>{task.title}</h3>
                <div className="flex justify-between">
                  <li id={task.id}>{task.text}</li>
                  {task.id === "done" ? (
                    <IoIosDoneAll size={30} className="text-green-600" />
                  ) : (
                    <AiOutlineLoading3Quarters
                      size={25}
                      className="text-red-600"
                    />
                  )}
                </div>
              </SingTask>
            ))}
          </RoadmapContent>

          <RoadmapContent className="border border-neutral-500 border-b-8">
            {RoadmapDataI.map((task, index) => (
              <SingTask key={index}>
                <Date>{task.date}</Date>
                <h3>{task.title}</h3>
                <div className="flex justify-between">
                  <li id={task.id}>{task.text}</li>
                  {task.id === "done" ? (
                    <IoIosDoneAll size={30} className="text-green-600" />
                  ) : (
                    <AiOutlineLoading3Quarters
                      size={25}
                      className="text-red-600 span"
                    />
                  )}
                </div>
              </SingTask>
            ))}
          </RoadmapContent>
        </RoadmapHold>

        <RoadmapHold>
          <RoadmapContent className="border border-neutral-500 border-b-8">
            {RoadmapDataII.map((task, index) => (
              <SingTask key={index}>
                <Date>{task.date}</Date>
                <h3>{task.title}</h3>
                <div className="flex justify-between">
                  <li id={task.id}>{task.text}</li>
                  {task.id === "done" ? (
                    <IoIosDoneAll size={30} className="text-green-600" />
                  ) : (
                    <AiOutlineLoading3Quarters
                      size={25}
                      className="text-red-600 span"
                    />
                  )}
                </div>
              </SingTask>
            ))}
          </RoadmapContent>

          <RoadmapContent className="border border-neutral-500 border-b-8">
            {RoadmapDataIII.map((task, index) => (
              <SingTask key={index}>
                <Date>{task.date}</Date>
                <h3>{task.title}</h3>
                <div className="flex justify-between">
                  <li id={task.id}>{task.text}</li>
                  {task.id === "done" ? (
                    <IoIosDoneAll size={30} className="text-green-600" />
                  ) : (
                    <AiOutlineLoading3Quarters
                      size={25}
                      className="text-red-600 span"
                    />
                  )}
                </div>
              </SingTask>
            ))}
          </RoadmapContent>
        </RoadmapHold>
      </TaskWrapper>
    </RoadMapWrapper>
  );
};

export default RoadMapSection;
