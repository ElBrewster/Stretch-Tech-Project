import React, {useState} from "react";
import ActivityCard from "../thumbnailActivity/ActivityCard";
import activitiesData from "../../apiCalls/dummyData";
import "./ToDos.scss";

export default function ToDos({id}) {
  
	const filterActivities = activitiesData.filter(activity => activity.id === id);

  const activityCards = filterActivities.map((activity) => {
    return (
        <ActivityCard
          key={activity.id}
          id={activity.id}
          image={activity.path}
          startAge={activity.startAge}
          endAge={activity.endAge}
          name={activity.name}
          materials={activity.materials}
          instructions={activity.instructions}
          indoor={activity.indoor}
          outdoor={activity.outdoor}
          motorSkill={activity.motorSkill}
        />
    );
  });

    return (
        <>
          <h2>To-Do List</h2>
          <section className="to-do-container">
            {activityCards}
          </section>
        </>
    );
}