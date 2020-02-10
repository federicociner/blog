class Empty(Exception):
    """Error attempting to access an element from an
    empty container. """

    pass


class ArrayQueue:
    """FIFO queue implementation using a Python list as
    underlying storage. """

    DEFAULT_CAPACITY = 10

    def __init__(self):
        """Create an empty queue. """
        self._data = [None] * ArrayQueue.DEFAULT_CAPACITY
        self._size = 0
        self._front = 0

    def __len__(self):
        """Return the number of elements in the queue. """
        return self._size

    def __str__(self):
        """String representation of deque. """
        return str(self._data)

    def is_empty(self):
        """Return True if the queue is empty. """
        return self._size == 0

    def first(self):
        """Return (but do not remove) the element at the front
        of the queue. """
        if self.is_empty():
            raise Empty("Queue is empty")

        return self._data[self._front]

    def dequeue(self):
        """Remove and return the first element of the queue. """
        if self.is_empty():
            raise Empty("Queue is empty")

        element = self._data[self._front]
        self._data[self._front] = None  # garbage collection
        self._front = (self._front + 1) % len(self._data)
        self._size -= 1

        # Shrink underlying array to conserve space
        if 0 < self._size < len(self._data) // 4:
            self._resize(len(self._data) // 2)

        return element

    def enqueue(self, e):
        """Add an element to the back of the queue. """
        if self._size == len(self._data):
            self._resize(2 * len(self._data))

        avail = (self._front + self._size) % len(self._data)
        self._data[avail] = e
        self._size += 1

    def _resize(self, cap):
        """Resize to a new list of capacity >= len(self). """
        old = self._data
        self._data = [None] * cap
        walk = self._front

        for i in range(self._size):
            self._data[i] = old[walk]
            walk = (1 + walk) % len(old)
        self._front = 0


class ArrayDeque:
    """FIFO double-ended queue implementation using a
    Python list as underlying storage. """

    DEFAULT_CAPACITY = 10

    def __init__(self):
        """Create an empty queue. """
        self._data = [None] * ArrayQueue.DEFAULT_CAPACITY
        self._size = 0
        self._front = 0

    def __len__(self):
        """Return the number of elements in the queue. """
        return self._size

    def __str__(self):
        """String representation of deque. """
        return str(self._data)

    def is_empty(self):
        """Return True if the queue is empty. """
        return self._size == 0

    def first(self):
        """Return (but do not remove) the element at the front
        of the queue. """
        if self.is_empty():
            raise Empty("Queue is empty")

        return self._data[self._front]

    def last(self):
        """Return (but do not remove) the element at the back
        of the queue. """
        if self.is_empty():
            raise Empty("Queue is empty")

        back = (self._front + self._size - 1) % len(self._data)

        return self._data[back]

    def add_first(self, e):
        """Add an element to the start of the queue. """
        if self._size == len(self._data):
            self._resize(2 * len(self._data))

        self._front = (self._front - 1) % len(self._data)
        self._data[self._front] = e
        self._size += 1

    def add_last(self, e):
        """Add an element to the back of the queue. """
        if self._size == len(self._data):
            self._resize(2 * len(self._data))

        avail = (self._front + self._size) % len(self._data)
        self._data[avail] = e
        self._size += 1

    def delete_first(self):
        """Remove and return the first element of the queue. """
        if self.is_empty():
            raise Empty("Queue is empty")

        first = self._data[self._front]
        self._data[self._front] = None  # garbage collection
        self._front = (self._front + 1) % len(self._data)
        self._size -= 1

        # Shrink underlying array to conserve space
        if 0 < self._size < len(self._data) // 4:
            self._resize(len(self._data) // 2)

        return first

    def delete_last(self):
        """Remove and return the last element of the queue. """
        if self.is_empty():
            raise Empty("Queue is empty")

        back = (self._front + self._size - 1) % len(self._data)
        last = self._data[back]
        self._data[back] = None  # garbage collection
        self._size -= 1

        # Shrink underlying array to conserve space
        if 0 < self._size < len(self._data) // 4:
            self._resize(len(self._data) // 2)

        return last

    def _resize(self, cap):
        """Resize to a new list of capacity >= len(self). """
        old = self._data
        self._data = [None] * cap
        walk = self._front

        for i in range(self._size):
            self._data[i] = old[walk]
            walk = (1 + walk) % len(old)
        self._front = 0


if __name__ == "__main__":
    # ArrayQueue sample operations
    Q = ArrayQueue()
    Q.enqueue(5)
    Q.enqueue(3)
    print(len(Q))
    print(Q.dequeue())
    print(Q.is_empty())
    print(Q.dequeue())
    print(Q.is_empty())
    Q.enqueue(7)
    Q.enqueue(9)
    print(Q.first())
    Q.enqueue(4)
    print(len(Q))
    print(Q.dequeue())

    # ArrayDeque sample operations
    D = ArrayDeque()
    D.add_last(5)
    D.add_first(3)
    D.add_first(7)
    print(D.first())
    print(D.delete_last())
    print(len(D))
    print(D.delete_last())
    print(D.delete_last())
    D.add_first(6)
    print(D.last())
    D.add_first(8)
    print(D.is_empty())
    print(D.last())
