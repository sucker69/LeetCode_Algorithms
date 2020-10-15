
const addTwoNumbers = (list1, list2, carry = 0) => {
    const sum = (list1?.val ?? 0) + (list2?.val ?? 0) + carry;
    carry = sum > 9 ? 1 : 0;
    if (
        (list1 === undefined || list1 === null || list1.next === null) &&
        (list2 === undefined || list2 === null || list2.next === null) &&
        carry == 0
    ) {
        return new ListNode(sum % 10, null);
    }
    return new ListNode(sum % 10, addTwoNumbers(list1?.next, list2?.next, carry));
};
