import { getDatabase, onValue, ref, orderByKey, query, limitToLast } from "firebase/database";
import { useEffect, useState } from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import { IoExitOutline } from 'react-icons/io5';

const ActivityLog = ({
    db
}) => {
    const currentDate = new Date();
    const [activities, setActivities] = useState([])

    const enterRef = ref(db, 'tracker/' + `${currentDate.getFullYear()}/` + `${currentDate.getMonth() + 1}/` + `${currentDate.getDate()}/` + 'entry')
    const enterQuery = query(enterRef, limitToLast(4))
    const exitRef = ref(db, 'tracker/' + `${currentDate.getFullYear()}/` + `${currentDate.getMonth() + 1}/` + `${currentDate.getDate()}/` + 'exit')
    const exitQuery = query(exitRef, limitToLast(4))

    const [enterActivities, setEnterActivities] = useState([])
    const [exitActivities, setExitActivities] = useState([])
    useEffect(() => {

        onValue(enterQuery, (snapshot) => {
            const timestamps = Object.keys(snapshot.val())
            setEnterActivities(timestamps)
        }, (error) => {
            console.error(error);
        })

        onValue(exitQuery, (snapshot) => {
            const timestamps = Object.keys(snapshot.val())
            setExitActivities(timestamps)
        }, (error) => {
            console.error(error);
        })

    }, [])

    useEffect(() => {
        const unsortedActivities = []
        enterActivities.forEach(ts => {
            unsortedActivities.push({
                timestamp: ts,
                type: "entry"
            })
        })
        exitActivities.forEach(ts => {
            unsortedActivities.push({
                timestamp: ts,
                type: "exit"
            })
        })
        const sortedActivities = unsortedActivities.sort((a, b) =>
            a.timestamp.localeCompare(b.timestamp)
        );
        setActivities(sortedActivities.slice(-4))
    }, [enterActivities, exitActivities])

    return (
        <div className="activityLog">
            <h3>Activity</h3>
            <div className="logContainer">
            {
                activities.map((activity) => (
                    <div className="logEntry">
                    {(activity.type === "entry") ? <h2 className="enterIcon"><IoEnterOutline /></h2>: <h2 className="exitIcon"><IoExitOutline /></h2>}
                    <p>{activity.timestamp}</p>
                    <p className="logEntryText">Someone {(activity.type === "entry") ? "entered" : "exited"} the gym</p>
                </div>
                ))
            }
                
            </div>
        </div>
    );
}

export default ActivityLog;