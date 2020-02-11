class Empty(Exception):
    """Error attempting to access an element from an empty container. """

    pass


class LinkedStack:
    """LIFO stack implementation using a singly linked list for storage. """

    class _Node:
        """Lightweight private class for storing a singly linked node. """

        __slots__ = "_element", "_next"

        def __init__(self, element, next):
            self._element = element
            self._next = next

    def __init__(self):
        """Create an empty stack. """
        self._head = None
        self._size = 0

    def __len__(self):
        """Return the number of elements in the stack. """
        return self._size

    def is_empty(self):
        """Return True if the stack is empty. """
        return self._size == 0

    def push(self, e):
        """Add element e to the top of the stack. """
        self._head = self._Node(e, self._head)
        self._size += 1

    def top(self):
        """Return (but do not remove) the element at the top of the stack. """
        if self.is_empty():
            raise Empty("Stack is empty.")

        return self._head._element

    def pop(self):
        """Remove and return the element from the top of the stack. """
        if self.is_empty():
            raise Empty("Stack is empty.")

        element = self._head._element
        self._head = self._head._next
        self._size -= 1

        return element


class LinkedQueue:
    """FIFO queue implementation using a singly linked list for storage. """

    class _Node:
        """Lightweight private class for storing a singly linked node. """

        __slots__ = "_element", "_next"

        def __init__(self, element, next):
            self._element = element
            self._next = next

    def __init__(self):
        """Create an empty queue. """
        self._head = None
        self._tail = None
        self._size = 0

    def __len__(self):
        """Return the number of elements in the queue. """
        return self._size

    def is_empty(self):
        """Return True if the queue is empty. """
        return self._size == 0

    def first(self):
        """Return (but do not remove) the element at the front of the queue.

        """
        if self.is_empty():
            raise Empty("Queue is empty.")

        return self._head._element

    def dequeue(self):
        """Remove and return the first element of the queue (i.e. FIFO). """
        if self.is_empty():
            raise Empty("Queue is empty.")

        element = self._head._element
        self._head = self._head._next
        self._size -= 1

        # If queue is empty, the removed head had been the tail
        if self.is_empty():
            self._tail = None

        return element

    def enqueue(self, e):
        """Add an element to the back of the queue. """
        newest = self._Node(e, None)

        if self.is_empty():
            self._head = newest
        else:
            self._tail._next = newest
        self._tail = newest
        self._size += 1


if __name__ == "__main__":
    # LinkedStack examples
    S = LinkedStack()
    S.push(5)
    S.push(3)
    print(len(S))
    print(S.pop())
    print(S.is_empty())
    print(S.pop())
    print(S.is_empty())

    # LinkedQueue examples
    S = LinkedQueue()
    S.enqueue(5)
    S.enqueue(3)
    print(len(S))
    print(S.dequeue())
    print(S.is_empty())
    print(S.dequeue())
    print(S.is_empty())
