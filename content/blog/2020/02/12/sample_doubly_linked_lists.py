class Empty(Exception):
    """Error attempting to access an element from an empty container. """

    pass


class _DoublyLinkedBase:
    """A base class providing a doubly linked list representation. """

    class _Node:
        """Lightwieght, private class for storing a doubly linked node. """

        __slots__ = "_element", "_prev", "_next"

        def __init__(self, element, prev, next):
            self._element = element
            self._prev = prev
            self._next = next

    def __init__(self):
        self._header = self._Node(None, None, None)
        self._trailer = self._Node(None, None, None)
        self._header._next = self._trailer
        self._trailer._prev = self._header
        self._size = 0

    def __len__(self):
        """Return the number of elements in the list. """
        return self._size

    def __str__(self):
        """Print contents of the doubly linked list, staring at the head. """
        curr = self._header._next
        res = ""

        for i in range(self._size):
            if i != self._size - 1:
                res += f"Node{{element: {curr._element}}} -> "
            else:
                res += f"Node{{element: {curr._element}}}"

            curr = curr._next

        return res

    def is_empty(self):
        """Return True if list is empty. """
        return self._size == 0

    def _insert_between(self, e, predecessor, successor):
        """Add element e between two existing nodes and return new node. """
        newest = self._Node(e, predecessor, successor)
        predecessor._next = newest
        successor._prev = newest
        self._size += 1

        return newest

    def _delete_node(self, node):
        """Delete non-sentinel node from the list and return its element. """
        predecessor = node._prev
        successor = node._next
        predecessor._next = successor
        successor._prev = predecessor
        self._size -= 1
        element = node._element
        node._prev = node._next = node._element = None

        return element


class LinkedDeque(_DoublyLinkedBase):
    """Double-ended queue implementation based on a doubly linked list. """

    def first(self):
        """Return (but do not remove) the element at the front of the deque.

        """
        if self.is_empty():
            raise Empty("Deque is empty.")

        return self._header._next._element

    def last(self):
        """Return (but do not remove) the element at the back of the deque. """
        if self.is_empty():
            raise Empty("Deque is empty.")

        return self._trailer._prev._element

    def insert_first(self, e):
        """Add an element to the front of the deque. """
        self._insert_between(e, self._header, self._header._next)

    def insert_last(self, e):
        """Add an element to the back of the deque. """
        self._insert_between(e, self._trailer._prev, self._trailer)

    def delete_first(self):
        """Remove and return the element from the front of the deque. """
        if self.is_empty():
            raise Empty("Deque is empty.")

        self._delete_node(self._header._next)

    def delete_last(self):
        """Remove and return the element from the back of the deque. """
        if self.is_empty():
            raise Empty("Deque is empty.")

        self._delete_node(self._trailer._prev)


if __name__ == "__main__":
    # LinkedDeque examples
    D = LinkedDeque()
    D.insert_first(1)
    D.insert_first(2)
    D.insert_last(3)
    print(D)

    D.delete_first()
    print(D.first())

    D.insert_first(4)
    print(D)

    D.delete_last()
    print(D)
