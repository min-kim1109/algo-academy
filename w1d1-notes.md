## Data Structures and Algorithms
- A data structure is simply a way to STORE data
    - Examples would include Arrays/Hash Tables/Hash Sets (most common ones to use), Linked Lists, Trees, Graphs
- Algorithms are ways to INTERACT with our data
    - The goal is to create, read, edit, or delete data in a way that is useful

Where do we start?
- Arrays
- Hashing
- Linked Lists
- Recursion
- Sorting Algorithsm
- Binary Search
- Trees
- Heaps
- Tries
- Graphs
- Dynamic Programming


# ARRAYS<br>
Array Metaphor
- Imagine you are a librarian who is responsible for organizing a vast collection of books
- You can imagine an array as a shelf on the bookshelf, each slot on the shelf holds a book
- Just like how you can easily find a book on a specific shelf, if you know what slot it is in, you can find a specific element in an array if you know its index

Static Arrays
- Fixed size, a true array
- You cannot change the size of this array
- For static arrays you cannot increase the size to add in more elements as we cannot guarantee that the space in memory is not already being taken up by a different array
- Rewrite the entire array in a different spot of RAM where we know it has more space
- Pushing into an array is not always going to be O(1)/O(n) since you have to rewrite all of that data somewhere else. But for the most part it will be O(1)
- When rewriting the entire array it garbage collects the original space in RAM (frees up the spot)

Dynamic Arrays
- Same as static arrays, but everytime it reaches the limit, it copies the array in a different space in memory and deletes the original one.
- On average its O(1), but sometimes its O(n)
- If you're doubling the size of the array everytime you have to reallocate your array, you will not have to reasign your values in O(n). The vast majority of your pushes wil be in O(1)

Array Operations<br>
| Operations    | Big-O Time |
| -------- | ------- |
| Read/Write ith element  | O(1)   |
| Insert / Remove End | O(1)    |
| Insert Middle or Beginning    |O(n)    |
| Remove Middle or Beginning    |O(n)    |

- Read/Write ith element - When reading an element that we know the index of, or the ith element -> results in O(1) time. (Constant time)
- Insert / Remove End - Also O(1) time because you don't have to reassign any indices
- Insert Middle or Beginning - O(n) because we are reassigning addresses
- Remove Middle or Beginning - o(n) because we are reassigning addresses

Array Recap
- Arrays must be contiguous in memory
- Static arrays have a fixed size
- Dynamic arrays solve our space problems if we fill up the array with values and are the default for many languages such as Javascript or Python
- Whenever a dynamic array needs to be resized when adding new elements, it is O(n). However, the amortized time (the vast majority of the time) is O(1)

# Stacks
- LIFO (last in, first out)
- Arrays are very efficient when used for stacks because you remove and insert on the same end
- Push/Pop operations are O(1) so it is efficient for stacks
