const taskTypes = (deadlines,day) => {
    let [today, upcoming, later] = [0,0,0];
    deadlines.forEach(deadline => {
        if(deadline <= day){
            today++;
        } else if(deadline >= day + 1 && deadline <= day +7){
            upcoming++
        } else {
            later++
        }
    });

    return [today, upcoming, later]
}

console.log(taskTypes([1,2,3,4,5], 2));
console.log(taskTypes([1,2,4,2,10,3,1,4,5,4,9,8], 1)); //[2,8,2]

/*
 
Problem 98. Tasks Types
 
You have some tasks in your Asana account. For each ith of them you know its deadlines, which is the last day by which
it should be completed. As you can see on your calendar, today's date is day.
 
Asana labels each task in accordance with its due date:
-if the task is due today or its already overdue, its labeled as today.
-if the task is due within a week but not today, that is its deadline it somewhere betweem day + 1 and day + , its labeled as Upcoming.
-All other tasks are labeled as later.
 
Given an array of deadlines, and today's date, your goal is to find the nyumber of tasks with each label type and return it with the format
[Today, Upcoming, Later], where today, upcoming, and later are the number of tasks that correspond to that label.
 
*/