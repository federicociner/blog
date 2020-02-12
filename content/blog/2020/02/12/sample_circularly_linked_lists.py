class Empty(Exception):
    """Error attempting to access an element from an empty container. """

    pass


class CircularQueue:
    """Queue implementation using circularly linked list for storage. """

    class _Node:
        """Lightweight private class for storing a singly linked node. """

        __slots__ = "_element", "_next"

        def __init__(self, element, next):
            self._element = element
            self._next = next

    def __init__(self):
        """Create an empty queue. """
        self._tail = None
        self._size = 0

    def __len__(self):
        """Return the number of elements in the queue. """
        return self._size

    def __str__(self):
        """Print contents of the circular queue, staring at the head. """
        curr = self._tail._next
        res = ""

        for i in range(self._size):
            if i != self._size - 1:
                res += f"Node{{element: {curr._element}}} -> "
            else:
                res += f"Node{{element: {curr._element}}}"

            curr = curr._next

        return res

    def is_empty(self):
        """Return True if the queue is empty. """
        return self._size == 0

    def first(self):
        """Return (but do not remove) the element at the front of the queue.

        """
        if self.is_empty():
            raise Empty("Queue is empty.")

        head = self._tail._next

        return head._element

    def dequeue(self):
        """Remove and return the first element of the queue (i.e. FIFO). """
        if self.is_empty():
            raise Empty("Queue is empty.")

        oldhead = self._tail._next
        if self._size == 1:
            self._tail = None
        else:
            self._tail._next = oldhead._next
        self._size -= 1

        return oldhead._element

    def enqueue(self, e):
        """Add an element to the back of the queue. """
        newest = self._Node(e, None)

        if self.is_empty():
            newest._next = newest
        else:
            newest._next = self._tail._next
            self._tail._next = newest

        self._tail = newest
        self._size += 1

    def rotate(self):
        """Rotate front element to the back of the queue. """
        if self._size > 0:
            self._tail = self._tail._next


if __name__ == "__main__":
    # CircularQueue examples
    S = CircularQueue()
    S.enqueue(1)
    S.enqueue(2)
    S.enqueue(3)
    S.enqueue(4)
    print(S)

    S.dequeue()
    print(S.first())

    S.enqueue(7)
    print(S)

    S.rotate()
    print(S)
