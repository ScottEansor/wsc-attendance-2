import { useMemo } from "react";

export default function MissedAthletes({ history }) {
  //organize entries by name
  //calculate if the athlete has been absent
  const threeOrMoreMissed = useMemo(() => {
    const missedByAthlete = {};
    history.forEach(({ name, coach }) => {
      if (coach) {
        return;
      }
      const missedSoFar = missedByAthlete[name] || 0;
      missedByAthlete[name] = missedSoFar + 1;
      console.log(missedByAthlete);
    });

    //{Winston:4, theo:1, }
    const results = [];
    for (const athleteName in missedByAthlete) {
      const missed = missedByAthlete[athleteName];
      if (missed > 2) {
        results.push(athleteName);
      }
    }
    return results;
  }, [history]);
  return (
    <div className="missed-container p-2">
      <header className="missed-header">Missed 3 or More Days</header>
      <div>
        {threeOrMoreMissed.map((athlete) => {
          return <div key={athlete}>{athlete}</div>;
        })}
      </div>
    </div>
  );
}
