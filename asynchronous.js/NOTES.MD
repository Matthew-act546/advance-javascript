# MY NOTES IN ASYNCHRONOUS JAVASCRIPT

### Part 1: objectives
1. What is synchronous programming?
2. What is asynchronous programming? 
3. Call Backs 
4. Promises 
5. Promises (Async/Await) 

### My Answer:
1. Synchronous programming is programming that follows a step-by-step process in the exact order it's written. For example, let's say you have three tasks: task 1, task 2, and task 3. Each task follows a sequential order or step-by-step, like 1, 2, 3. In simple terms, synchronous programming must be in order when running time and cannot go to task 3 if it has not finished task 2. This is like a chronological sequence. 
2. The disadvantages of synchronous programming is  that when a website is waiting for a user input, the entire program stops (block) and waits for it to finish. The meaning of this the rest of the website wont respond until the task(in example inputs) is complete. This is called blocking and not ideal for ui/ux of the website. That's why asynchronous programming was introduced to let the program keep running while waiting for a slow task to finish. You can think of asynchronous in real life is like multi-tasking 
3. callback means you just passing the argument into another functions that it will execute a call back that will then execute callback based on result